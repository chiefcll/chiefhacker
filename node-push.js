#! /usr/bin/env node
//Details https://www.clarkio.com/2017/08/22/pwa-web-push-3/
//https://github.com/web-push-libs/web-push
const webpush = require('web-push');
const privateVapidKey = require('./private_key.js');
const publicVapidKey = 'BEjYRLcs198fROr8BWQtwbHKA01kigkq23XnzthjRM-EPnKmLNv6S5Fj22P2hNl2ii95l_zQRvG-mFioBpfhbL8';

const subscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/cSGXh54uPok:APA91bEhDxKzluq_uVA8DaGDi4SPuK4RSXW4KhkeDNI1YSaCrdgz8Z-4eOfADIWF7Oz4gJ6NkdlSTgAqu7gvR8BkuTs2HfKJm2gM9zR5j9Qt1CYyT9ayxRjxRG9Xf4edjzTf9HbELLme",
  "expirationTime": null,
  "keys": {
    "p256dh": "BLx97DHs8zUav8cQ7sXlvwNd1kI9iz_sjKlI5El84pxHh54vUPQ6xRbUHjrGEI-pRdQrxmRePRvKgbOtLeIGhvY",
    "auth": "H5bFGEPw7Fn9moQiMLwYgQ"
  }
};

firefoxSubscription =  {
  "endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABcMQPGD5iOiS2IXINkgkuIALuOURQvMl_QidfCMLpmr7HDm8eXomZ64xplRwG2dwIdPlsvI8JpYHovBrJjx36hyEESRo3BQz_5qCiGFmiFW0lSrVBmaKKjwIxqGFbx17_LnVSuOhnBPk5FKxPDewhkzBkjqFEaAtiQyxCCr7lEysH9vis",
  "keys": {
    "auth": "nrUFyJWqlA47VC8jgNP_2w",
    "p256dh": "BFg80dHuQBqJig5EouwUp7CvEpyJv8aiCPs8dUKcTq0HBw7T-L0tR577tzeh6WivqydZf1Q7Kr8k7dhSQarG7tE"
  }
};

// Replace with your email
webpush.setVapidDetails('mailto:chiefcll@gmail.com', publicVapidKey, privateVapidKey);

//Use Chrome tools with {"title": "hi", "body": "there"}
const payload = JSON.stringify({
  title: 'Conference Alert',
  body: 'Chris is speaking at PWX!'
});

webpush.sendNotification(subscription, payload).catch(error => {
  console.error(error.stack);
});
