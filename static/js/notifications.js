// Vibration: Star Wars shamelessly taken from the awesome Peter Beverloo
// https://tests.peter.sh/notification-generator/

//Image only works on Mobile
//Sound is not supported... YET
//Actions only work from Service worker and don't show icons.

//The spec: https://notifications.spec.whatwg.org/

const MyNotification = {
  body: 'Check out where I\'ll be speaking next',
  icon: '/static/img/icons/icon-144x144.png',
  image: '/static/img/speaking.jpg',
  sound: '/static/sounds/BOTW_Fanfare_HeartContainer.wav',
  click_action: '/speaking.html',
  requireInteraction: true,
  vibrate: [500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500],
  tag: 'vibration-sample'
};

const checkbox = document.getElementById('notifyMe');
const notifyOn = Notification.permission === 'granted';

if (notifyOn) {
  checkbox.setAttribute('checked', '');
}

checkbox.addEventListener('change', e => {
  if (checkbox.checked) {
    Notification.requestPermission().then(function(result) {
      console.log(result); // granted!
      new Notification('Permission Granted!', MyNotification);
    });
  } else {
    //Can't turn off notifications via JS - need to do this in Chrome
  }
});
