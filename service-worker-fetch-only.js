"use strict";
/*
For More info on service workers read:
https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/
https://developers.google.com/web/fundamentals/primers/service-workers/
*/
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('chiefhacker-v1').then((cache) =>
      cache.match(event.request).then((response) => {
        var fetchPromise = fetch(event.request).then((networkResponse) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        return response || fetchPromise;
      })
    )
  );
});
