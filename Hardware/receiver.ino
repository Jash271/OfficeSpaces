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
    while(Serial.available()){
    // Set buffer to size of expected message
    uint8_t buf[1];
    uint8_t buflen = sizeof(buf);
    // Check if received packet is correct size
    
    int c = Serial.read();

    if (rf_driver.recv(buf, &buflen))
    {
      int val = strcmp((char *)buf,"1");
      

      // Message received with valid checksum
            
      if( !val && c == '1'){
        
        digitalWrite(LED,HIGH);
        Serial.println("okayy");   
        delay(500);

         
      }
      else{
        digitalWrite(LED,LOW);
      }
      
    }
    else{
        digitalWrite(LED,LOW);
        
        }
    
}
}
