const webpush = require('web-push');
const privateVapidKey = require('./private_key.js');
const publicVapidKey = 'BEjYRLcs198fROr8BWQtwbHKA01kigkq23XnzthjRM-EPnKmLNv6S5Fj22P2hNl2ii95l_zQRvG-mFioBpfhbL8';

const subscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/cdWx1YtGeds:APA91bH5MhLuKfIUGXehp62zhOF2oTzkv9ALnEfv6mdy4lx3e8kg7nnqVxs-MKdrF0-z03i5FqeZARYm-F_eCtGMTa3e2K1GIjKgD1MGMw1a57Y02jqWThQkCdif_yRnqM-MRdR-Fd6S","expirationTime":null,"keys":{"p256dh":"BLdGg6EBJdE72ENaRmU7iG7FseN-Q_Ox61nVlruk8UeInISbfmNhvDCmtDZ0-B3KQksstsx6IAxhrJFoOL-hXx4","auth":"QzqBRYJqR6HPNfGJ7gdiIA"}};

// Replace with your email
webpush.setVapidDetails('mailto:chiefcll@gmail.com', publicVapidKey, privateVapidKey);

const payload = JSON.stringify({
  title: 'Test from Node!'
});

webpush.sendNotification(subscription, payload).catch(error => {
  console.error(error.stack);
});
