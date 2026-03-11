const CACHE_NAME = 'stock-flow-v2'; // อัปเดตเป็น v2 เพื่อล้างแคชเก่า
self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll([
        './', 
        './index.html', 
        './manifest.json', 
        './309723.png'
    ])));
});
self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
