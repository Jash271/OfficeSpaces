import cv2
from fastai import *
from fastai.vision import load_learner, open_image
from fastai.vision import *
import os
import serial
import time

learn = load_learner(".")
ArduinoUnoSerial = serial.Serial("COM3", 9600)
print(ArduinoUnoSerial.readline().decode())

cap = cv2.VideoCapture(0)
while True:
    ret, image = cap.read()

    cv2.imwrite("image" + ".jpg", image)
    img = open_image("image.jpg")
    k = learn.predict(img)[1]
    cv2.imshow("frame", image)
    print(k)
    if k == 1:
        value = "No Mask"
        print(value)
        print(0)
        ArduinoUnoSerial.write(b"0")

    else:
        value = "Mask"
        print(value)
        print("1")
        ArduinoUnoSerial.write(b"1")

    if cv2.waitKey(1) & 0xFF == ord("q"):
        break


cap.release()
cap.destroy.AllWindows()
