"use strict";

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('chiefhacker-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/speaking.html',
        '/static/css/main.css',
        '/static/img/profile.jpg',
        '/static/img/profile_offline.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {

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


    event.respondWith(
        fetch(url.replace(/\.[a-z]*$/, `_${size}$&`), {
            mode: 'no-cors'
        }).catch(function() {
          return caches.match('/static/img/profile.jpg');
        })
    );
  }
});

self.addEventListener('notificationclose', function(e) {
  console.log('Closed notification');
});

self.addEventListener('notificationclick', function({notification, action}) {
  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('https://www.chiefhacker.com/speaking.html');
    notification.close();
  }
});

self.addEventListener('push', function(e) {
  e.waitUntil(
    self.registration.showNotification('Conference Alert!!!', {
      body: 'Chris has a new conference scheduled!',
      icon: 'static/img/icons/icon-144x144.png',
      vibrate: [200, 100, 200, 100, 200, 100, 200],
      tag: 'vibration-sample'
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
