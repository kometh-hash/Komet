const CACHE_NAME = 'stock-flow-v3'; // เปลี่ยนตัวเลขเวอร์ชันไปเรื่อยๆ เมื่อมีการแก้โค้ด
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
