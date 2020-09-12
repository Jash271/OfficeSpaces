// Include RadioHead Amplitude Shift Keying Library
#include <RH_ASK.h>
// Include dependant SPI Library 
#include <SPI.h> 
int LED = 13;

 
// Create Amplitude Shift Keying Object
RH_ASK rf_driver;
 
void setup()
{
  pinMode(LED, OUTPUT);                    //declare the LED pin (13) as output
digitalWrite (LED, LOW);  
    // Initialize ASK Object
    rf_driver.init();
    // Setup Serial Monitor
    Serial.begin(9600);
}
 
void loop()
{
    // Set buffer to size of expected message
    uint8_t buf[1];
    uint8_t buflen = sizeof(buf);
    // Check if received packet is correct size
    if (rf_driver.recv(buf, &buflen))
    {
      int val = strcmp((char *)buf,"1");
      Serial.println(val);

      // Message received with valid checksum
      
      Serial.println((char *)buf); 

      if( !val ){
        digitalWrite(LED,HIGH);
        Serial.println("okayy");    
      }
      else{
        digitalWrite(LED,LOW);
      }
    }
}
