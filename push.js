var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

push.setVapidDetails('mailto: test@code.co.in', 'BHDTngWIhVl2pm85P7KCAST59CvizykEjkk6XaVorjijsuGmAdDNr8524T1f7aQEYHHrYMD72RNuaESwv0FW2A4', 'Tspntl75iJZNbykOHbFJI2-GrgqEm5cCw_5BemFFCVQ');

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dd8PXx1SHqc:APA91bFyXUHjs33-h8ANrNw_kym91ghWEwhGEXGYJ3aF7sY5x5d-bpiBCo2BxBxE8UFTUA15Xf6bJSOMVPfRWgeusDZtgXGGDjgUmNiIm2E3LdJkN7rHIqhn5T_YL-XN8rs0m7ycc5AQ","expirationTime":null,"keys":{"p256dh":"BNFmLXgo1w8GDd2-7kbOEgqg1jNS9WRGMHrVZQGJ_Q7ZCNSnAx-vyOc0j-rarrRm8VJz0ioDW2rfcpR1RYXyoa0","auth":"JEjkoaz7IKaa3TP4JgYJmQ"}}

// let sub = {endpoint:"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABkA…CT4C3koYqvB9c-Yhc14lpEoZ8jRy41TAieC2xQ8QSu0LQYZIzFKAsIYmwteY",expirationTime:null,keys:{auth:"b1_8s9vqUYC8IIzAJ6s2Fw",p256dh:"BNJXiX0rtYJYr8vWIWB4Dt67JuVNm1TQP8DdCIRNX--uioAugNdthjatkylyrYIctyNrITXZ_OB9dHsy9NFCyZY"}}



push.sendNotification(sub, 'Test message')