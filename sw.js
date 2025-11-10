// Service Worker para Alacena PWA
const CACHE_NAME = 'alacena-v1.0.0';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Instalar Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar requests (estrategia Network First para datos dinámicos)
self.addEventListener('fetch', function(event) {
  // Solo cachear requests GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Para Google Sheets API: siempre red primero
  if (event.request.url.includes('spreadsheets.google.com') || 
      event.request.url.includes('script.google.com')) {
    event.respondWith(
      fetch(event.request)
        .catch(function() {
          return new Response('{"error": "Sin conexión a internet"}', {
            headers: { 'Content-Type': 'application/json' }
          });
        })
    );
    return;
  }

  // Para recursos de la app: cache primero
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - devolver respuesta desde cache
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Verificar que sea una respuesta válida
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clonar la respuesta para cache
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

// Actualizar cache cuando hay nueva versión
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Mensajes del cliente
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});