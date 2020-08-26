int data;
int LED=13;
float temp;
int tempPin = 0;

void setup() { 
  Serial.begin(9600);                               //initialize serial COM at 9600 baudrate
  pinMode(LED, OUTPUT);                    //declare the LED pin (13) as output
  digitalWrite (LED, LOW);                     //Turn OFF the Led in the beginning
  
  Serial.println("Hello!,How are you Python ?");
}
 
void loop() {
temp = analogRead(tempPin);
temp = temp * 0.48828125;

printf("%s",Serial.available());
while (Serial.available())    //whatever the data that is coming in serially and assigning the value to the variable “data”

{ 
printf("%d",1);
data = Serial.read();
printf("%s",data);q



if (data == '1' && temp < 35.0){


digitalWrite (LED, HIGH); 
}


else if (data == '0'){

digitalWrite (LED, LOW);                 
}
}
}
