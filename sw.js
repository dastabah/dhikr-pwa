const CACHE_NAME = 'mi-dhikr-cache-v1';
// List of all the files and assets to cache for offline use
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  'images/icon-192x192.png',
  'images/icon-512x512.png',
  // The image from your header
  'https://i.pinimg.com/1200x/9a/43/14/9a4314d66273d8fbe3c6aa5ebdc51471.jpg',
  // The Google Fonts stylesheet
  'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cinzel:wght@700&family=Inter:wght@400;600;700&display=swap'
];

// Install event: open a cache and add all the specified assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching assets');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: respond with cached assets if available (cache-first strategy)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the response from the cache
        if (response) {
          return response;
        }
        // Not in cache - fetch from the network
        return fetch(event.request);
      })
  );
});