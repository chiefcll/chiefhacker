#! /usr/bin/env node
const webpush = require('web-push');
const privateVapidKey = require('./private_key.js');
const publicVapidKey = 'BEjYRLcs198fROr8BWQtwbHKA01kigkq23XnzthjRM-EPnKmLNv6S5Fj22P2hNl2ii95l_zQRvG-mFioBpfhbL8';

const subscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/eKbyPbaV1Rs:APA91bHw74G9zj6cVYqSNWBRFZ-ssu-TIx1fREXdsqcQuRm_vlW0i5leZIi0Pth8QyazF5SGa1FQ8O7WC1C6UycEWwXseaT9UNs2uLOIlxZ7NXBEVamP6oYBqtBiQgoo1Kk0ymmCv5uT",
  "expirationTime": null,
  "keys": {
    "p256dh": "BKYFp0uM7lxNXcqhkyVy5gHKUHwwjTOx0KeuBvTUuWy1pHl2uEktMibffDMJjzCO3WfI1wW_2jzvjUNWZZPnoLU",
    "auth": "HlWdvK6mvM5iBjbESfQQVw"
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
  body: 'Chris is speaking at CodeMash!'
});

webpush.sendNotification(firefoxSubscription, payload).catch(error => {
  console.error(error.stack);
});
