from flask import Flask, render_template, url_for, request, jsonify
import numpy as np
import pickle
from twilio.twiml.messaging_response import MessagingResponse
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import LinearSVC
import pandas as  pd
import numpy as np
app = Flask(__name__)
pipe = pickle.load(open("svc_pipeline(1)", "rb"))



@app.route("/")
def home():
    

    return jsonify({"message": "Hello World"})

@app.route("/check",methods=['POST'])
def determine():
    
    symp = []
    p=['hi','hey','hola','heya','howdy','hello','heyy','hey','hi']
    x = request.form.get('Body')
    if x.lower() in p:
        txt="Hello Here's Your Precaution Bot at your service!\nTo get started enter your symptoms so that I can recommend you some precautions that may help you feel better,In the mean time also consult your doctor  \nso let's get started 🩺"
        resp = MessagingResponse()
        resp.message(txt)
        return str(resp)

    else:
        df=pd.read_csv('precuation.csv')
        l=[]
        symptoms=x
        print(type(symptoms))
        x=str(symptoms)
        x=x.lower()
        y=(pipe.predict([x])[0])
        df=pd.read_csv('precuation.csv')
        x=df[df['Disease']==f'{y}']
        for i in range(1,5):
            l.append(x[f'Precaution_{i}'].values[0])


        txt=f"I think you might be having {y}\n Hence follow these precuations\n 1) {l[0]}\n 2 {l[1]}\n 3 {l[2]} \n 4 {l[3]} \n Hoping you get well soon 😀 "
        print(y)
        
        
        resp = MessagingResponse()
        resp.message(txt)
        
        return str(resp)

    


if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0", port=5000)