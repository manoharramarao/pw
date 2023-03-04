var push = require('web-push');

let vapidKeys = push.generateVAPIDKeys();
console.log(vapidKeys);

push.setVapidDetails('mailto: test@code.co.in', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {}
push.sendNotification(sub, 'Test message')