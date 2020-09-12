import cv2
import pyzbar.pyzbar as pyzbar
import os
import time
import serial
Arduino = serial.Serial("COM4",9600)
cap=cv2.VideoCapture(0)

while True:
    ret,image=cap.read()
    
    x=pyzbar.decode(image)
    for y in x:
        
        print(y.data)
        if(y.data.decode()=='1'):
            print("yes.....")
            Arduino.write(b"1")
        else:
            Arduino.write(b"0")


        
        

    cv2.imshow("frame",image)


    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

cap.release()
cap.destroy.AllWindows()
    

    
