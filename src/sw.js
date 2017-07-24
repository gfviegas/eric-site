// @flow weak
/* eslint-disable no-console */

const DEBUG = false;

const debugLog = (message) => {
  if (DEBUG) {
    console.log(`%c ${message}`, `background:#222222;color:#CC0000`)
  }
}

// When the user navigates to your site,
// the browser tries to redownload the script file that defined the service
// worker in the background.
// If there is even a byte's difference in the service worker file compared
// to what it currently has, it considers it 'new'.
const {
  assets,
} = global.serviceWorkerOption;

const CACHE_NAME = (new Date()).toISOString();

let assetsToCache = [
  ...assets,
  './',
];

assetsToCache = assetsToCache.map((path) => {
  return new URL(path, global.location).toString();
});

// When the service worker is first added to a computer.
self.addEventListener('install', (event) => {
  // Perform install steps.

  debugLog('[SW] Install event');

  // Add core website files to cache during serviceworker installation.
  event.waitUntil(
    global.caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(assetsToCache);
      })
      .then(() => {
        debugLog('[SW] Cached assets: main', assetsToCache);
      })
      .catch((error) => {
        console.error(error);
        throw error;
      }),
  );
});

// After the install event.
self.addEventListener('activate', (event) => {

  debugLog('[SW] Activate event');

  // Clean the caches
  event.waitUntil(
    global.caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Delete the caches that are not the current one.
            if (cacheName.indexOf(CACHE_NAME) === 0) {
              return null;
            }

            return global.caches.delete(cacheName);
          }),
        );
      }),
  );
});

self.addEventListener('message', (event) => {
  switch (event.data.action) {
    case 'skipWaiting':
      if (self.skipWaiting) {
        self.skipWaiting();
        self.clients.claim();
      }
      break;
    default:
      break;
  }
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Ignore not GET request.
  if (request.method !== 'GET') {
    debugLog(`[SW] Ignore non GET request ${request.method}`);
    return;
  }

  const requestUrl = new URL(request.url);

  let requestResource = (requestUrl.origin !== location.origin) ? new Request(request.url, {mode: 'cors-with-forced-preflight'}) : request

  const resource = global.caches.match(requestResource)
    .then((response) => {
      if (response) {
        // Different Origin only when offline
        if (requestUrl.origin !== location.origin) {
          if (!navigator.onLine) {
            debugLog(`[SW] External resource ${requestUrl.href} from cache because we're offline`);
            return response;
          }
        } else {
          debugLog(`[SW] fetch URL ${requestUrl.href} from cache`);
          return response;
        }
      }

      // Load and cache known assets.
      return fetch(requestResource)
        .then((responseNetwork) => {
          if (!responseNetwork || !responseNetwork.ok) {
            debugLog(`[SW] URL [${requestUrl.toString()}] wrong responseNetwork: ${responseNetwork.status} ${responseNetwork.type}`);
            return responseNetwork;
          }

          debugLog(`[SW] URL ${requestUrl.href} fetched`);
          const responseCache = responseNetwork.clone();

          global.caches
            .open(CACHE_NAME)
            .then((cache) => {
              return cache.put(request, responseCache);
            })
            .then(() => {
              debugLog(`[SW] Cache asset: ${requestUrl.href}`);
            });

          return responseNetwork;
        })
        .catch(() => {
          // User is landing on our page.
          if (event.request.mode === 'navigate') {
            return global.caches.match('./');
          }

          return null;
        });
    });

  event.respondWith(resource);
});
