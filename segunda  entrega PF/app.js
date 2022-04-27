//array de objestos :productos

const prodcutos = [
  {
    id: "1",
    nombre: "AMY",
    precio: 150,
    imagen: "./imagenes/AMY.jpg",
    descripcion:
      "170g de carne Angus, provoleta, tomate perita asado, rúcula y mayonesa dechimichurri.",
  },
  {
    id: "2",
    nombre: "CHEESE-BURGUER",
    precio: 170,
    imagen: "./imagenes/cheese-burger.jpg",
    descripcion:
      "170g de carne Angus, provoleta, tomate perita asado, rúcula y mayonesa dechimichurri.",
  },
  {
    id: "3",
    nombre: "DOBLE CHEES",
    precio: 180,
    imagen: "./imagenes/DOBLE CHEES.jpg",
    descripcion:
      "170g de carne Angus, provoleta, tomate perita asado, rúcula y mayonesa dechimichurri.",
  },
  {
    id: "4",
    nombre: "DOBLE CHEES",
    precio: 180,
    imagen: "./imagenes/DOBLE CHEES.jpg",
    descripcion:
      "170g de carne Angus, provoleta, tomate perita asado, rúcula y mayonesa dechimichurri.",
  },
  {
    id: "5",
    nombre: "DOBLE CHEES",
    precio: 180,
    imagen: "./imagenes/DOBLE CHEES.jpg",
    descripcion:
      "170g de carne Angus, provoleta, tomate perita asado, rúcula y mayonesa dechimichurri.",
  },
  {
    id: "6",
    nombre: "DOBLE CHEES",
    precio: 180,
    imagen: "./imagenes/DOBLE CHEES.jpg",
    descripcion:
      "170g de carne Angus, provoleta, tomate perita asado, rúcula y mayonesa dechimichurri.",
  },
];

/* Cuando arranca la aplicación tengo que ver si el LS para el item productos tiene información 
si hay info, la guarda en el arrayLS, si fuera que no hay nada, deja el arrayLS vacío */
let arrayLS = [];
leerLocalStorage();

let total = 0.0;
let carrito = [];

//DOM del DIV contenedor de los productos
let listaBurguer = document.getElementById("listaBurguer");
let carro = document.querySelector("#carrito");

arrayLS.forEach((el) => {
  carro.innerHTML += divCarrito(el.id);

  let totalh4 = document.getElementById("totalCarro");
  totalh4.textContent = " TOTAL $ " + total;
});

//forEach del array : recorre todos los objestos del array
prodcutos.forEach((el) => {
  listaBurguer.innerHTML += divHamburguesa(el);
});

// aqui hago un array de los div con la clase tarjeta
let tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach((el) => {
  let boton = el.querySelector("button");
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    let identificador =
      e.target.parentElement.querySelector("#identificador").textContent;

    carrito.push(identificador);

    let hamburguesaCarrito = prodcutos.find((el) => el.id == identificador);
    /* Cada vez que clickeas sobre una hamburguesa es que se guarda en el LS */
    /* Antes de guardar al localStorage, lo guardo en el arrayLS y el arrayLS es lo que va al LS */
    arrayLS.push(hamburguesaCarrito);
    localStorage.setItem("productos", JSON.stringify(arrayLS));

    carro.innerHTML += divCarrito(identificador);

    let totalh4 = document.getElementById("totalCarro");
    totalh4.textContent = " TOTAL $ " + total;
  });
});

//funcion donde arma las cards de los prodcutos !!!
function divHamburguesa(hamburguesa) {
  return `        
        <div class="card  mt-2 mb-2 tarjeta  ">
            <img src="${hamburguesa.imagen}" class="card-img-top w-50" alt="...">
            <div class="card-body">
            <p class="d-none"  id="identificador">${hamburguesa.id}</p>
                <h3 class="card-title">${hamburguesa.nombre}</h3>
                <p class="card-text">${hamburguesa.descripcion}</p>
                    <h4>${hamburguesa.precio}</h4>
                <button class="btn btn-primary">Comprar</button>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a>-->
            </div>
        </div>            
    `;
}

function divCarrito(id) {
  let hamburguesaCarrito = prodcutos.find((el) => el.id == id);

  total = total + hamburguesaCarrito.precio;
  console.log(total);

  let carrito_span = document.getElementById("carrito_span");
  carrito_span.textContent = arrayLS.length;

  return `        
      <div class="tarjetasCarrito">
      <img src="${hamburguesaCarrito.imagen}" alt="">
      <p>"${hamburguesaCarrito.nombre}"</p>
      <span>$ ${hamburguesaCarrito.precio}</span>
      </div>
    `;
}

function leerLocalStorage() {
  if (localStorage.getItem("productos") != null) {
    arrayLS = JSON.parse(localStorage.getItem("productos"));
  }

  let carrito_span = document.getElementById("carrito_span");
  carrito_span.textContent = arrayLS.length;
}
