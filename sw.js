self.addEventListener('push', (e) => {
  var options = {
    body: JSON.stringify(e.data),
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