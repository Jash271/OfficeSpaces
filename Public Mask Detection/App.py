import glob
import face_recognition
from PIL import Image, ImageDraw
import numpy as np

l1 = []
l2 = []
for name in glob.glob(<path of IMage Directory>):
    l1.append((name))

for name in glob.glob(<path of Image Directory>):
    l2.append((name))

s1 = set(l1)
s2 = set(l2)

s3 = s1.union(s2)
l3 = list(s3)
known_face_encodings = []
known_face_names = []
for x in l3:
    y = x.split("\\")[-1][:-4].split(".")[0]
    known_face_names.append(y)
    p = face_recognition.load_image_file(x)
    r = face_recognition.face_encodings(p)[0]
    known_face_encodings.append(r)

print(
    f"These are the identified face names from target directory ----> {known_face_names}"
)
unknown_image = face_recognition.load_image_file(
    <path of unkown image>
)
face_locations = face_recognition.face_locations(unknown_image)

face_encodings = face_recognition.face_encodings(unknown_image, face_locations)
pil_image = Image.fromarray(unknown_image)
draw = ImageDraw.Draw(pil_image)
l = []
for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
    # See if the face is a match for the known face(s)
    matches = face_recognition.compare_faces(known_face_encodings, face_encoding)

    name = "Unknown"

    # If a match was found in known_face_encodings, just use the first one.
    # if True in matches:
    #     first_match_index = matches.index(True)
    #     name = known_face_names[first_match_index]

    # Or instead, use the known face with the smallest distance to the new face
    face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
    best_match_index = np.argmin(face_distances)
    if matches[best_match_index]:
        name = known_face_names[best_match_index]
        l.append(name)

    # Draw a box around the face using the Pillow module
    draw.rectangle(((left, top), (right, bottom)), outline=(0, 0, 255))

    # Draw a label with a name below the face
    text_width, text_height = draw.textsize(name)
    draw.rectangle(
        ((left, bottom - text_height - 10), (right, bottom)),
        fill=(0, 0, 255),
        outline=(0, 0, 255),
    )
    draw.text((left + 6, bottom - text_height - 5), name, fill=(255, 255, 255, 255))


del draw
print(l)
pil_image.show()
