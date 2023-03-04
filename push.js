var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

push.setVapidDetails('mailto: test@code.co.in', 'BHDTngWIhVl2pm85P7KCAST59CvizykEjkk6XaVorjijsuGmAdDNr8524T1f7aQEYHHrYMD72RNuaESwv0FW2A4', 'Tspntl75iJZNbykOHbFJI2-GrgqEm5cCw_5BemFFCVQ');

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eqxyVt1UxC4:APA91bH5dHDA7phdux74MSX94ydvTfz1i-h7m-gNpDtoMHO8rkh9Aykpo3IfhoJSzwzK9wzGAxtozTBz_OZNDHQPoZEBmAcXyb9q05XL7nlgnjMWG2ffS8OYe2jYiAOvYdS8SyBuAtdB","expirationTime":null,"keys":{"p256dh":"BKxb9_bn2bPLOKWoObKdtxl-CGuUZuDaU5bnma1mtfLASIR-G2bxBy_LUmRqWVntPSouQYzp6qggav7ntZimDCo","auth":"odNOKw9b-BCudEo1O8o-rA"}}

// let sub = {endpoint:"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABkA…CT4C3koYqvB9c-Yhc14lpEoZ8jRy41TAieC2xQ8QSu0LQYZIzFKAsIYmwteY",expirationTime:null,keys:{auth:"b1_8s9vqUYC8IIzAJ6s2Fw",p256dh:"BNJXiX0rtYJYr8vWIWB4Dt67JuVNm1TQP8DdCIRNX--uioAugNdthjatkylyrYIctyNrITXZ_OB9dHsy9NFCyZY"}}



push.sendNotification(sub, 'Test message')