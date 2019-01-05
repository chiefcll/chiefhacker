//Actions only work from Service worker and don't show icons.
const NotificationsWithActions = Object.assign({}, MyNotification, {
  actions: [
  {
    action: 'thumbs-up',
    title: 'Thumbs Up',
    icon: '/static/img/thumbs-up.png'
  },
  {
    action: 'thumbs-down',
    title: 'Thumbs Down',
    icon: '/static/img/thumbs-down.png'
  }
]});

navigator.serviceWorker.ready.then(function(registration) {
  registration.showNotification('Service Worker Notification', NotificationsWithActions);
});
