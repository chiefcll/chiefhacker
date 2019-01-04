"use strict";
/*
For More info on service workers read:
https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/
https://developers.google.com/web/fundamentals/primers/service-workers/
*/
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('chiefhacker-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/speaking.html',
        '/static/css/main.css',
        '/static/img/profile.jpg',
        '/static/img/profile_offline.jpg',
        '/static/js/offline.js',
        '/static/js/notifications.js',
      ]);
    })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});