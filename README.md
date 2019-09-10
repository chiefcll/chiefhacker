# Welcome to Chiefhackers Website!

### Hello! :wave:

This is my personal site built with [Jekyll](https://jekyllrb.com/) and [Sustain](https://github.com/jekyller/sustain/) theme.

It serves as an example on how to create a PWA from a personal website and also to keep track of my speaking engagements.

[Slides from my talk](https://tinyurl.com/ydcxx3ne)

## Resources

### Web App Manifest

The manifest.json tells browsers what to do when your site is installed on mobile or desktop. You can find more info: https://developers.google.com/web/fundamentals/web-app-manifest/ and https://www.w3.org/TR/appmanifest/

Links
[Web App Manifest Generator 1](https://app-manifest.firebaseapp.com/)
[Web App Manifest Generator 2](https://tomitm.github.io/appmanifest/)
[Related Applications](https://developers.google.com/web/fundamentals/app-install-banners/native)

```json
"prefer_related_applications": true,
"related_applications": [
  {
    "platform": "play",
    "id": "com.google.samples.apps.iosched"
  }
]
```

### Questions?

Please reach out to me on Twitter, happy to help :-)

—[Chris](https://twitter.com/chiefcll)


#Todo
Record fetch images for profile
Sync event to get latest speaking.html


#Demo Steps
* Chrome Application Tab
* Offline Mode
* Dinosaur Game
* Service Worker (Install + Cache)
* Installing Application
* Connection Speed
* Notifications
* Push Notifications
 - Generate a VAPID key
 - Add Public Key into web registration
 - Push messages with private key
