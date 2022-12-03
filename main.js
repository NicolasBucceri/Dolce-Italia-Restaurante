//Menu De Pizza
class Pizza {
    constructor(id, titulo, ingredientes, precio, imagen){
        this.id = id,
        this.titulo = titulo,
        this.ingredientes = ingredientes,
        this.precio = precio,
        this.imagen = imagen;
    }
}

let pizza1 = new Pizza(1, "Pizza Capricciosa", "Tomate, Mozzarella, Albahca, Alcachofa, Aceitunas Negras, Anchoa, Champiñones, Huevo", 2100, "pizza-capricciosa.webp")
let pizza2 = new Pizza(2, "Pizza Hawaiana", "Tomate Frito, Anana, Queso Rallado, Oregano, Jamon Cocido", 2100, "pizza-hawaiana.webp")
let pizza3 = new Pizza(3, "Pizza Margarita", "Albahca, Mozzarella Hilada, Aceite De Oliva", 2100, "pizza-margarita.webp")
let pizza4 = new Pizza(4, "Pizza Marinara", "Ajo, Aceite De Oliva, Oregano", 2100, "pizza-marinara.webp")
let pizza5 = new Pizza(5, "Pizza Napoletana", "Tomate, Mozzarella, Albahaca, Aceite De Oliva", 2100, "pizza-napoletana.webp")
let pizza6 = new Pizza(6, "Pizza Pugliese", "Papa, Tomate, Ajo, Oregano, Aceite De Oliva", 2100, "pizza-pugliese.webp")

let menuPizza = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6]; 

let divPizza = document.querySelector("#Pizza")

for (let pizza of menuPizza) {
    let nuevaPizza = document.createElement("div")
    nuevaPizza.classList.add("col-12","col-md-6", "col-lg-4", "col-xl-3")
    nuevaPizza.innerHTML =
     `
    <div id="${pizza.id}" class="card m-auto my-3" style="width: 18rem;">
       <img class="card-img-top img-fluid" style="height: 200px;"src="assets/pizzas/${pizza.imagen}" alt="${pizza.imagen}">
        <div class="card-body">
            <h4 class="card-title">${pizza.titulo}</h4>
            <p style="height:100px">Ingredientes: ${pizza.ingredientes}</p>
            <p class="">Precio: $${pizza.precio}</p>
        <button id=${pizza.id} class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modalMenu" >Agregar al carrito</button>
        </div>
    `
    divPizza.appendChild(nuevaPizza)
}

//Menu De Pasta
class Pasta {
    constructor(id, titulo, ingredientes, precio, imagen) {
        this.id = id,
        this.titulo = titulo,
        this.ingredientes = ingredientes,
        this.precio = precio,
        this.imagen = imagen;
    }
}

let pasta1 = new Pasta(1,"Spaghetti Con Ajo y Aceite", "Ajo, Perejil, Aceite, Guindilla, Laurel", 1100, "pasta-con-ajo-y-aceite.webp")
let pasta2 = new Pasta(2, "Spaghetti A La Boloñesa", "Carne Picada, Ajo, Tomate, Queso Parmesano, Laurel, Pimienta Negra, Albahaca", 1100, "boloñesa.webp")
let pasta3 = new Pasta(3, "Spaghetti A La Carbonara", "Queso Parmesano, Panceta, Pimienta", 1100, "carbonara.webp")
let pasta4 = new Pasta(4, "Spaghetti Al Pesto", "Pimienta, Albahaca Fresca, Parmesano, Ajo, Piñones", 1100, "pesto.webp")
let pasta5 = new Pasta(5,"Spaghetti A La Putanesca", "Ajo, Anchoas, Guindilla, Alcaparras, Aceitunas Negras, Tomates, Pimienta, Oregano, Perejil", 1100, "putanesca.webp")
let pasta6 = new Pasta(6, "Spaghetti A La Vongole", "Ajo, Tomate, Almejas, Mejillones, Pimienta, Cayena, Oregano", 1100 , "vongole.webp")

let menuPasta = [pasta1, pasta2, pasta3, pasta4, pasta5, pasta6];

let divPasta = document.querySelector("#Pasta")

for (let pasta of menuPasta) {
    let nuevaPasta = document.createElement("div")
    nuevaPasta.classList.add("col-12","col-md-6", "col-lg-4", "col-xl-3")
    nuevaPasta.innerHTML +=
    `
    <div id="${pasta.id}" class="card m-auto my-3" style="width: 18rem;">
    <img class="card-img-top img-fluid" style="height: 200px;"src="assets/pastas/${pasta.imagen}" alt="${pasta.imagen}">
     <div class="card-body">
         <h4 class="card-title">${pasta.titulo}</h4>
         <p style="height:100px">Ingredientes: ${pasta.ingredientes}</p>
         <p class="">Precio: $${pasta.precio}</p>
     <button id=${pasta.id} class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modalMenu" >Agregar al carrito</button>
     </div>
    `
    divPasta.appendChild(nuevaPasta)
}

//Menu De Postre
class Postre {
    constructor(id, titulo, ingredientes, precio, imagen) {
        this.id = id,
        this.titulo = titulo,
        this.ingredientes = ingredientes,
        this.precio = precio,
        this.imagen = imagen
    }
}

let postre1 = new Postre(1, "Cannoli", "Canela, Ricotta, Azucar, Chips De Chocolate", 350, "cannoli.webp")
let postre2 = new Postre(2, "Canutillos A La Crema", "Crema Pastelera, Masa De Hojaldre", 350, "cannoncini-alla-crema.webp")
let postre3 = new Postre(3, "Costrata Al Chocolate", "Masa Quebrada, Cacao Amargo", 350, "costrata-al-cioccolato.webp" )
let postre4 = new Postre(4, "Gelato", "Frutilla, Chocolate", 350, "gelato.webp")
let postre5 = new Postre(5, "Panna Cotta", "Canela, Limon, Vainilla", 350, "panna-cotta.webp")
let postre6 = new Postre(6, "Tiramisu", "Crema, Mascarpone, Cafe, Vainillas, Cacao", 350, "tiramisu.webp")

let menuPostre = [postre1, postre2, postre3, postre4, postre5, postre6];

let divPostre = document.querySelector("#Postre")

for (let postre of menuPostre) {
    let nuevoPostre = document.createElement("div")
    nuevoPostre.classList.add("col-12","col-md-6", "col-lg-4", "col-xl-3")
    nuevoPostre.innerHTML +=
    `
    <div id="${postre.id}" class="card m-auto my-3" style="width: 18rem;">
    <img class="card-img-top img-fluid" style="height: 200px;"src="assets/postres/${postre.imagen}" alt="${postre.imagen}">
     <div class="card-body">
         <h4 class="card-title">${postre.titulo}</h4>
         <p style="height:100px">Ingredientes: ${postre.ingredientes}</p>
         <p class="">Precio: $${postre.precio}</p>
     <button id=${postre.id} class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modalMenu" >Agregar al carrito</button>
     </div>
    `
    divPostre.appendChild(nuevoPostre)
}

//Menu Tragos
class Tragos {
    constructor(id, titulo, ingredientes, precio, imagen) {
        this.id = id,
        this.titulo = titulo,
        this.ingredientes = ingredientes,
        this.precio = precio,
        this.imagen = imagen
    }
}

let trago1 = new Tragos(1, "Bellini", "Durazno y Champagne", 870, "bellini.webp")
let trago2 = new Tragos(2, "El Padrino", "Whiskey Escoces, Amaretto, Angostura, Rodaja De Limon", 870, "el-padrino.webp")
let trago3 = new Tragos(3, "Limoncello", "Limon y Vodka", 870, "limoncello.webp")
let trago4 = new Tragos(4, "Negroni", "Campari, Vermouth Rosso, Rodaja De Naranja", 870, "negroni.webp")
let trago5 = new Tragos(5, "Aperol Spritz", "Aperol, Prosecco, Soda, Naranja", 870, "aperol-spritz.webp")
let trago6 = new Tragos(6, "Rossini", "Frutillas, Zumo De Limon, Champagne", 870, "rossini.webp")

let menuTragos = [trago1, trago2, trago3, trago4, trago5, trago6];

let divTragos = document.querySelector("#Tragos")

for (let tragos of menuTragos) {
    let nuevoTrago = document.createElement("div")
    nuevoTrago.classList.add("col-12","col-md-6", "col-lg-4", "col-xl-3")
    nuevoTrago.innerHTML +=
    `
    <div id="${tragos.id}" class="card m-auto my-3" style="width: 18rem;">
    <img class="card-img-top img-fluid" style="height: 200px;"src="assets/tragos/${tragos.imagen}" alt="${tragos.imagen}">
     <div class="card-body">
         <h4 class="card-title">${tragos.titulo}</h4>
         <p style="height:100px">Ingredientes: ${tragos.ingredientes}</p>
         <p class="">Precio: $${tragos.precio}</p>
     <button id=${tragos.id} class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modalMenu" >Agregar al carrito</button>
     </div>
    `
    divTragos.appendChild(nuevoTrago)
}

//Menu De Bebidas Calientes
class bebidasCalientes {
    constructor(id, titulo, precio, imagen) {
        this.id = id,
        this.titulo = titulo,
        this.precio = precio,
        this.imagen = imagen
    }
}

let bebidasCaliente1 = new bebidasCalientes(1, "Cafe Capuchino", 250, "cafe-capuchino.webp" )
let bebidasCaliente2 = new bebidasCalientes(2, "Cafe De Filtro", 250, "cafe-de-filtro.webp")
let bebidasCaliente3 = new bebidasCalientes(3, "Chocolate Italiano", 250, "chocolate-italiano.webp")
let bebidasCaliente4 = new bebidasCalientes(4, "Expreso", 250, "expreso.webp")
let bebidasCaliente5 = new bebidasCalientes(5, "Te Chai Latte", 250, "te-chai-latte.webp")
let bebidasCaliente6 = new bebidasCalientes(6, "Tisana", 250, "tisana.webp") 

let menuBebidasCalientes = [bebidasCaliente1, bebidasCaliente2, bebidasCaliente3, bebidasCaliente4, bebidasCaliente5, bebidasCaliente6];

let divBebidasCalientes = document.querySelector("#BebidasCalientes")

for (let bebidasCalientes of menuBebidasCalientes) {
    let nuevaBebidaCaliente = document.createElement("div")
    nuevaBebidaCaliente.classList.add("col-12","col-md-6", "col-lg-4", "col-xl-3")
    nuevaBebidaCaliente.innerHTML +=
    `
    <div id="${bebidasCalientes.id}" class="card m-auto my-5" style="width: 18rem;">
    <img class="card-img-top img-fluid" style="height: 200px;"src="assets/bebidas-calientes/${bebidasCalientes.imagen}" alt="${bebidasCalientes.imagen}">
     <div class="card-body">
         <h4 class="card-title">${bebidasCalientes.titulo}</h4>
         <p class="">Precio: $${bebidasCalientes.precio}</p>
     <button id=${bebidasCalientes.id} class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modalMenu" >Agregar al carrito</button>
     </div>
    `
    divBebidasCalientes.appendChild(nuevaBebidaCaliente)
}

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(res => console.log("service worker registered",res))
      .catch(err => console.log("service worker not registered", err));
  });
}

  
