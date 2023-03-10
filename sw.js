const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/images/maskable_icon_192.png",
  "/images/maskable_icon_512.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
});

this.addEventListener('fetch', function (event) {
    // it can be empty if you just want to get rid of that error
});


self.addEventListener('push', (e) => {
  var options = {
    body: e.data.text,
    icon: 'images/example.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      { action: 'explore', title: 'Explore this new world', icon: 'images/checkmark.png' },
      {action: 'close', title: 'Close', icon: 'images/xmark.png'},
    ]
  }
  console.log(JSON.stringify(e));
  e.waitUntil(self.registration.showNotification('test message', options));
});