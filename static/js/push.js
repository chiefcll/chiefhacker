// This does not work on iOS or Mac
// Follow the non web standard for implementing it.
// https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/NotificationProgrammingGuideForWebsites/PushNotifications/PushNotifications.html


//Why do we need this? :-(
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/')
  ;
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

function logSubscription(sub) {
  console.log('p256dh: ', sub.getKey('p256dh'));
  console.log('Auth: ', sub.getKey('auth'));
  console.log('Endpoint URL: ', sub.endpoint);

  console.log('Sub JSON: ', JSON.stringify(sub));
}

navigator.serviceWorker.ready.then(function(registration) {
  registration.showNotification('Service Worker Notification', MyNotification);

  registration.pushManager.getSubscription().then(function(sub) {
    console.log(sub);
    if (sub === null) {
      // Update UI to ask user to register for Push
      console.log('Not subscribed to push service!');
    } else {
      // We have a subscription, update the database
      logSubscription(sub);
    }
  });

   registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        'BEjYRLcs198fROr8BWQtwbHKA01kigkq23XnzthjRM-EPnKmLNv6S5Fj22P2hNl2ii95l_zQRvG-mFioBpfhbL8'
      )
    })
    .then(logSubscription)
    .catch(function(e) {
      if (Notification.permission === 'denied') {
        console.warn('Permission for notifications was denied');
      } else {
        console.error('Unable to subscribe to push', e);
      }
    });
  });


function unsubscribe() {
  navigator.serviceWorker.ready.then(function(registration) {
    registration.pushManager.getSubscription().then(function(sub) {
      sub.unsubscribe();
    })
  })
}

navigator.serviceWorker.addEventListener('message', function(event) {
  console.log('Received a message from service worker: ', event.data);
});
