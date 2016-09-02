# iOS_iBeacons_Application

Purpose:

This app showcases how iBeacon Technology can be used with Kony Apps. 

Requirements:                                                                                                                        
In this application, we show below details.

● How to turn iPhone as iBeacon Transmitter using Kony App.

● How to set up and receive iBeacons using Kony App.


To run this application:

Make the following changes in the Xcode before running the application in your iPhone/iPad devices.

1) Click on edit scheme for KRelease mode in Xcode.                                                                   
2) For Run -> Options tab make sure the Core Location is checked and select default location to 'Mumbai India'.                     
3) Select 'VMAppWithKonyLib' project in Xcode.                                                                                     
4) For KRelease target select 'info' tab.                                                                                             
5) Add 'NSLocationAlwaysUsageDescription' key.                                                                                         
6) Also select 'Capabilities' under KRelease target and make sure to check the below modes. 
          i. Location updates.                                                                                                         
          ii. Uses Bluetooth LE accessories.                                                                                            
          iii. Acts as Bluetooth LE accessories.                                                                                        
          iv. Remote notifications.                                                                                                                                                                                                            
7) Now run the application in iPhone/iPad devices with iOS 7 devices supporting BLE. These are iPhone 4S and up, iPad mini and iPad 3 and up.                                                                                                                                                                                               
8) Go to settings application in your iPhone/iPad device and select your application.                                                  
9) Click on Location and select 'Always' option.                                                                                       
10) Now click on 'Turn into iBeacons' on one iPhone and 'Locate iBeacons' in another iPhone.                                                           
11) Now we can see the beacons are located in the iPhone devices. Please find the attached screenshots for your reference.                             

Supported Channels:

iPhone

iPad

Supported Version:

All versions of Kony studio
