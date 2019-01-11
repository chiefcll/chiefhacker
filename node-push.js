#! /usr/bin/env node
const webpush = require('web-push');
const privateVapidKey = require('./private_key.js');
const publicVapidKey = 'BEjYRLcs198fROr8BWQtwbHKA01kigkq23XnzthjRM-EPnKmLNv6S5Fj22P2hNl2ii95l_zQRvG-mFioBpfhbL8';

const subscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/f0ZND_zrgBA:APA91bH_O8h-WMEPqg85XUD_-8LpMcF1MKhWPMmedfgn7VFy5_S_oRn7kNur_f_XSaOEpfeIKW2ClKE_HD4qbTFQnl432PL6bKpye0LzjNg4QPcAdoqL7R4nLQsaH9Y3VN5FcPq-g12j",
  "expirationTime": null,
  "keys": {
    "p256dh": "BNHVnpwvUBHkf-MhebzAWWYq-fg7gHWHYL3lzDok9-JfiFvtw9yDSP5Mpmlj_ODHRhaJ8NrfkrIIXZmWGAaHz1U",
    "auth": "kJ9S6-KqxKn00uoER-NlWQ"
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

webpush.sendNotification(subscription, payload).catch(error => {
  console.error(error.stack);
});
