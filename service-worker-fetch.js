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
    fetchHandler(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});

const fetchHandler = event => {
  let url = event.request.url;
  if (/profile\.jpg$/.test(url)) {
    // Connection Type is not available yet
    // https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
    // navigator.connection.type === 'cellular'

    let size = {
      "2g": 'old',
      "3g": 'head',
      "4g": 'medium',
      "slow-2g": 'xsmall'
    }[navigator.connection.effectiveType];

    return fetch(url.replace(/\.[a-z]*$/, `_${size}$&`))
            .catch(e => caches.match('/static/img/profile.jpg'))
  }

  return fetch(url);
}
