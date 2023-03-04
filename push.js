var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

push.setVapidDetails('mailto: test@code.co.in', 'BHDTngWIhVl2pm85P7KCAST59CvizykEjkk6XaVorjijsuGmAdDNr8524T1f7aQEYHHrYMD72RNuaESwv0FW2A4', 'Tspntl75iJZNbykOHbFJI2-GrgqEm5cCw_5BemFFCVQ');

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fXWr0d6waUU:APA91bGwMcMl8R4Gz4xh1xRgZ2hvLVPhsAzJ18KM4gc56q-x6pm8L20vBGCzQcu2AZJJsZih4RXBet7QuWcrFpSbrNhU1K6VYODChFMAUeq8utBFPOHJgeG7NKdDWFz3MjEuhXdfgIJY","expirationTime":null,"keys":{"p256dh":"BBO82ZwN9DPoaySFgnALuCJiGgQbrJfM91GpTE_1bzzZ0zYd6Ob322kL7oQFlQf5I2L0kYJq7jMTN4xAn_-AJQk","auth":"0le9eoMlaeD5wKo2pZriHA"}}

// let sub = {endpoint:"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABkA…CT4C3koYqvB9c-Yhc14lpEoZ8jRy41TAieC2xQ8QSu0LQYZIzFKAsIYmwteY",expirationTime:null,keys:{auth:"b1_8s9vqUYC8IIzAJ6s2Fw",p256dh:"BNJXiX0rtYJYr8vWIWB4Dt67JuVNm1TQP8DdCIRNX--uioAugNdthjatkylyrYIctyNrITXZ_OB9dHsy9NFCyZY"}}



push.sendNotification(sub, 'Test message')