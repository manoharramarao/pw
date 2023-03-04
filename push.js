var push = require('web-push');

let vapidKeys = push.generateVAPIDKeys();
console.log(vapidKeys);

push.setVapidDetails('mailto: test@code.co.in', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
  endpoint: "https://fcm.googleapis.com/fcm/send/fzJXBZkNl1Q:APA91bHMK2X1vScVDKWHFoIaVNBUCq6iysj0HOXulCjijjBRVF_oRRMq8O_RzzSCcXQLgwHOp5wTIMnkoqKFJBQRkg5YPStrcsD4JM0Tj15aqgOUmIr3Zo4AXW6vHHO5aJRTGu8807tA",
  expirationTime: null,
  keys: {
    p256dh: "BCdPDhYZ8oa38Wq5PbnQSNkV-Et7f6PkuetjWr_3hJ0Ka1oVSS06XydD2qHVy_WCDv0B0-h5fTbeT3_CJXNGzGs",
    auth: "HCUfvrkxHzN4Lt2OkXljTA"
  }
}

// let sub = {endpoint:"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABkA…CT4C3koYqvB9c-Yhc14lpEoZ8jRy41TAieC2xQ8QSu0LQYZIzFKAsIYmwteY",expirationTime:null,keys:{auth:"b1_8s9vqUYC8IIzAJ6s2Fw",p256dh:"BNJXiX0rtYJYr8vWIWB4Dt67JuVNm1TQP8DdCIRNX--uioAugNdthjatkylyrYIctyNrITXZ_OB9dHsy9NFCyZY"}}



push.sendNotification(sub, 'Test message')