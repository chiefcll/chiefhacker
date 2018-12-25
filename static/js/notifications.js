// Vibration: Star Wars shamelessly taken from the awesome Peter Beverloo
// https://tests.peter.sh/notification-generator/

//Image only works on Mobile
//Sound is not supported... YET
//Actions only work from Service worker and don't show icons.

//The spec: https://notifications.spec.whatwg.org/

const MyNotification = {
  title: 'New Conference Talk 2!',
  body: 'Check out where I\'ll be speaking next',
  icon: '/static/img/icons/icon-144x144.png',
  image: '/static/img/speaking.jpg',
  sound: 'static/sounds/BOTW_Fanfare_HeartContainer.wav',
  click_action: 'https://www.chiefhacker.com/speaking.html',
  requireInteraction: true,
  vibrate: [500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500],
  tag: 'vibration-sample',
  actions: [
    {
      action: 'up',
      title: 'Thumbs Up',
      icon: '/static/img/thumbs-up.png'
    },
    {
      action: 'down',
      title: 'Thumbs Down',
      icon: '/static/img/thumbs-down.png'
    }
  ]
};

Notification.requestPermission().then(function(result) {
  console.log(result); // granted!
  new Notification(MyNotification.title, MyNotification);
});
