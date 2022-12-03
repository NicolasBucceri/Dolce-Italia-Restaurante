const staticDolceItalia = "Dolce-Italia";
const assets = [
  "./",
  "index.html",
  "estilos/estilos.css",
  "./js/app.js",
  "assets/banners/banner1.jpg",
  "assets/banners/banner2.jpg",
  "assets/banners/banner3.jpg",
  "assets/banners/banner4.jpg",
  "assets/pizzas/pizza-capricciosa.jpg",
  "assets/pizzas/pizza-hawaiana.jpg",
  "assets/pizzas/pizza-margarita.jpg",
  "assets/pizzas/pizza-marinara.JPG",
  "assets/pizzas/pizza-napoletana.jpg",
  "assets/pizzas/pizza-pugliese.jpg",
  "assets/pastas/boloñesa.jpg",
  "assets/pastas/carbonara.jpg",
  "assets/pastas/pasta-con-ajo-y-aceite.jpg",
  "assets/pastas/pesto.jpg",
  "assets/pastas/putanesca.jpg",
  "assets/pastas/vongole.jpg",
  "assets/postres/cannoli.jpg",
  "assets/postres/cannoncini-alla-crema.webp",
  "assets/postres/gelato.jpg",
  "assets/postres/panna-cotta.webp",
  "assets/postres/tiramisu.jpg",
  "assets/tragos/aperol-spritz.jpg",
  "assets/tragos/bellini.webp",
  "assets/tragos/el-padrino.jpg",
  "assets/tragos/limoncello.jpg",
  "assets/tragos/negroni.webp",
  "assets/tragos/rossini.jpg",
  "assets/bebidas-calientes/cafe-capuchino.jpg",
  "assets/bebidas-calientes/cafe-de-filtro.jpg",
  "assets/bebidas-calientes/chocolate-italiano.jfif",
  "assets/bebidas-calientes/expreso.jpg",
  "assets/bebidas-calientes/te-chai-latte.jpeg",
  "assets/bebidas-calientes/tisana.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDolceItalia).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
