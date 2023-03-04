var push = require('web-push');

let vapidKeys = push.generateVAPIDKeys();
console.log(vapidKeys);

push.setVapidDetails('mailto: test@code.co.in', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint": "https://fcm.googleapis.com/fcm/send/fzJXBZkNl1Q:APA91bHMK2X1vScVDKWHFoIaVNBUCq6iysj0HOXulCjijjBRVF_oRRMq8O_RzzSCcXQLgwHOp5wTIMnkoqKFJBQRkg5YPStrcsD4JM0Tj15aqgOUmIr3Zo4AXW6vHHO5aJRTGu8807tA", "expirationTime": null, "keys": { "p256dh": "BCdPDhYZ8oa38Wq5PbnQSNkV-Et7f6PkuetjWr_3hJ0Ka1oVSS06XydD2qHVy_WCDv0B0-h5fTbeT3_CJXNGzGs", "auth": "HCUfvrkxHzN4Lt2OkXljTA" }}
push.sendNotification(sub, 'Test message')