/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/bootstrap.icon-large.min.css",
    "revision": "3ed1bb64537a3dab8389fc812d0962ac"
  },
  {
    "url": "css/main.css",
    "revision": "5a7d89397a1d202bbebfa5676e37e959"
  },
  {
    "url": "css/syntax.css",
    "revision": "459beccdd58e5d7ac5d654c40cc9fa41"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "c83b1d7bb82cdc4c54af32c7e6a53900"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "f117f51c1cec05fc29b5668c1e9832bd"
  },
  {
    "url": "img/favicon.ico",
    "revision": "c833dffd1c263960dd5329a533f01592"
  },
  {
    "url": "img/icons/icon-128x128.png",
    "revision": "74bcd2d2b18487ce380a49a090851a12"
  },
  {
    "url": "img/icons/icon-144x144.png",
    "revision": "057be9e5bdd9816071bac80479689034"
  },
  {
    "url": "img/icons/icon-152x152.png",
    "revision": "fd26c34bbbe7bc8f56befd5efb44a661"
  },
  {
    "url": "img/icons/icon-192x192.png",
    "revision": "6d3592a89bb62fb25ccd257d209d5666"
  },
  {
    "url": "img/icons/icon-384x384.png",
    "revision": "3421b3d7bbb4bcd8a555e6f997c1bbd1"
  },
  {
    "url": "img/icons/icon-512x512.png",
    "revision": "1f6b52b527eca21e5026bb5c528655e1"
  },
  {
    "url": "img/icons/icon-72x72.png",
    "revision": "874ec582c6651e3157083f144246450a"
  },
  {
    "url": "img/icons/icon-96x96.png",
    "revision": "072f77f3919155df71bd016f38619718"
  },
  {
    "url": "img/offline_thomas.jpg",
    "revision": "683504c712c2d483cb5b4f2b0276f7fc"
  },
  {
    "url": "img/profile_grayscale.jpg",
    "revision": "3df7887ac94a2ae2fd72e11af21bbc89"
  },
  {
    "url": "img/profile_head.jpg",
    "revision": "a295e5b67edad0b0947765dda942c28a"
  },
  {
    "url": "img/profile_large_old.jpg",
    "revision": "b1c9c3ffffa82850b296cf14f1005f9f"
  },
  {
    "url": "img/profile_large.jpg",
    "revision": "3acbccb8f4b9f469a6cc42cf372718c3"
  },
  {
    "url": "img/profile_medium.jpg",
    "revision": "1a5f4ffa5222972f1c5c052f8d7e07f8"
  },
  {
    "url": "img/profile_offline.jpg",
    "revision": "3df7887ac94a2ae2fd72e11af21bbc89"
  },
  {
    "url": "img/profile_old.jpg",
    "revision": "e36dbd7c4af2f97981131a88c6439c0d"
  },
  {
    "url": "img/profile_small.jpg",
    "revision": "d1c9619174d18d437ba65fc6ef186aa3"
  },
  {
    "url": "img/profile_xsmall.jpg",
    "revision": "3795870eb0c253573f609675a51ac6e5"
  },
  {
    "url": "img/profile.jpg",
    "revision": "b2f91bd591d155ec579cb6ad3a86360d"
  },
  {
    "url": "img/speaking.jpg",
    "revision": "4705dab7011042b95a990b6f463024fa"
  },
  {
    "url": "img/splashscreens/ipad_splash.png",
    "revision": "cc26268a1bc8415ee715b59e00142a60"
  },
  {
    "url": "img/splashscreens/ipadpro1_splash.png",
    "revision": "1f1f864c32b8e6e76a805938ef89ec9d"
  },
  {
    "url": "img/splashscreens/ipadpro2_splash.png",
    "revision": "b00d1fd93200276d95b736729acaa029"
  },
  {
    "url": "img/splashscreens/ipadpro3_splash.png",
    "revision": "6821d18ef22dcf42132e5b6850fee002"
  },
  {
    "url": "img/splashscreens/iphone5_splash.png",
    "revision": "4b9251581aa09d3d2d1c630f02ac5d15"
  },
  {
    "url": "img/splashscreens/iphone6_splash.png",
    "revision": "abec71d2fc3d08260435f0b96580fbbc"
  },
  {
    "url": "img/splashscreens/iphoneplus_splash.png",
    "revision": "44fd7f77f0f38980a739c2bc8f3f4dce"
  },
  {
    "url": "img/splashscreens/iphonex_splash.png",
    "revision": "5d9bda8fc15a44238bd7b7702f0af725"
  },
  {
    "url": "img/splashscreens/iphonexr_splash.png",
    "revision": "d1cb749b12cb57c48fc0e5552c1e4cf5"
  },
  {
    "url": "img/splashscreens/iphonexsmax_splash.png",
    "revision": "10f49f9fbea4ac9df7fb1929f78b0b82"
  },
  {
    "url": "img/thumbs-down.png",
    "revision": "965cdba857681c9a8bdf80fc1f022f18"
  },
  {
    "url": "img/thumbs-up.png",
    "revision": "804599d50b793f8cb0a9ed40e6f78f4e"
  },
  {
    "url": "img/touch-icons/add-to-head.html",
    "revision": "b5e8e10b031f01d474e60d9a47cbc889"
  },
  {
    "url": "img/touch-icons/apple-touch-icon-ipad-76x76.png",
    "revision": "9939b51f55dde1da39e20e0cd24ccfb0"
  },
  {
    "url": "img/touch-icons/apple-touch-icon-ipad-retina-152x152.png",
    "revision": "6d71a1700b1fcb4c46960998b3c7e6a7"
  },
  {
    "url": "img/touch-icons/apple-touch-icon-iphone-60x60.png",
    "revision": "dc0433f8955bb262d412f46f8439571d"
  },
  {
    "url": "img/touch-icons/apple-touch-icon-iphone-retina-120x120.png",
    "revision": "87f3c53ff12d3249632222691d106542"
  },
  {
    "url": "js/firebase-push.js",
    "revision": "85e9d4811a1c6a6522705ffd0fbf98fd"
  },
  {
    "url": "js/notifications.js",
    "revision": "c82e0512ec86f726362582135fbf8efa"
  },
  {
    "url": "js/offline.js",
    "revision": "0eba2f518f14a5554ef44381b0a8c25b"
  },
  {
    "url": "js/push.js",
    "revision": "e013e254accc3148993d8f2108e04ba9"
  },
  {
    "url": "js/sw-notification.js",
    "revision": "2cd5d7e802d740b9d7e3ddfc62174608"
  },
  {
    "url": "sounds/BOTW_Fanfare_HeartContainer.wav",
    "revision": "84dbabb310fce51606b8456df337f45f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
