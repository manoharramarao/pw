var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

push.setVapidDetails('mailto: test@code.co.in', 'BHDTngWIhVl2pm85P7KCAST59CvizykEjkk6XaVorjijsuGmAdDNr8524T1f7aQEYHHrYMD72RNuaESwv0FW2A4', 'Tspntl75iJZNbykOHbFJI2-GrgqEm5cCw_5BemFFCVQ');

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dksz5vncTJs:APA91bGeKG_vDJ-F_MlZIWLfv8HQ5HlRwqAhFdsbEykGD_5YRn7joCuf0Le4KeV8RSRTiXpxmGgYSOcfVi5wvCG62-6YfOkhYyAaq8MifTdkWpX2naJqKfStV7XmmvrFv0jB_5WkDOhv","expirationTime":null,"keys":{"p256dh":"BAnNBCb7OusJIjTeXPoQlrHv4b8u9Apqn9EzIeSa3zPrOySFMGLKR47h3JYKureKPN2nRqgiXzEaE4Tv5q8rJms","auth":"Gn-C2EqwxaDTgl-VproRdA"}}

// let sub = {endpoint:"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABkA…CT4C3koYqvB9c-Yhc14lpEoZ8jRy41TAieC2xQ8QSu0LQYZIzFKAsIYmwteY",expirationTime:null,keys:{auth:"b1_8s9vqUYC8IIzAJ6s2Fw",p256dh:"BNJXiX0rtYJYr8vWIWB4Dt67JuVNm1TQP8DdCIRNX--uioAugNdthjatkylyrYIctyNrITXZ_OB9dHsy9NFCyZY"}}



push.sendNotification(sub, 'Test message')