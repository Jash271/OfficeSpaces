#include <RH_ASK.h>
// Include dependant SPI Library
#include <SPI.h>

RH_ASK rf_driver;
int data;
int LED = 13;
float temp;
int tempPin = 0;

void setup()
{
  Serial.begin(9600);     //initialize serial COM at 9600 baudrate
  pinMode(LED, OUTPUT);   //declare the LED pin (13) as output
  digitalWrite(LED, LOW); //Turn OFF the Led in the beginning
  rf_driver.init();
  Serial.println("Hello!,How are you Python ?");
}

void loop()
{
  temp = analogRead(tempPin);
  temp = temp * 0.48828125;

  printf("%s", Serial.available());
  while (Serial.available()) //whatever the data that is coming in serially and assigning the value to the variable “data”

  {
    printf("%d", 1);
    data = Serial.read();
    printf("%s", data);

    if (data == '1' && temp < 35.0)
    {

      const char *msg = "1";
      rf_driver.send((uint8_t *)msg, strlen(msg));
      rf_driver.waitPacketSent();

      digitalWrite(LED, HIGH);
      delay(500);
    }

    else if (data == '0')
    {
      const char *msg = "0";
      rf_driver.send((uint8_t *)msg, strlen(msg));
      rf_driver.waitPacketSent();

      digitalWrite(LED, LOW);
      delay(500);
    }
  }
}
