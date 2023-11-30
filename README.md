# Basic-Check-in-out-web-application

How to use:

1. In order to run this locally on a PC within the folder location enter:
  npm install -g live-server
  live-server

2. To access the web application simply create a QR code using https://www.qr-code-generator.com/ to simulate the intended purpose this QR code should use the address of the server in our case local host port 8080.

3. Scan QR code to be brought to the web application or on PC once the server is started the web application will start in a new tab.


What it does:

Users will be able to access the web application then choose to check in or out. This will be logged on the web app in a section under "Current Attendees" based on the selection they made.


Issues:

Current Attendees aren't saved so the next user to enter the site or if the same user exits and reenters the web app it will be blank.
