const CACHE_NAME = "ssw-kaigo-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./latihan.html",
  "./ujian.html",
  "./belajar.html",
  "./assets/css/styles.css",
  "./assets/js/app.js",
  "./assets/js/bank.js",
  "./assets/js/common.js",
  "./assets/js/quiz-core.js",
  "./assets/icons/app-192.png",
  "./assets/icons/app-512.png",
  "./manifest.json"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (e.request.method === "GET" && res.status === 200 && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
