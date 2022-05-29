//array de objestos :productos

/* const prodcutos = [{
        id: "1",
        nombre: "AMY",
        precio: 150,
        imagen: "./imagenes/AMY.jpg",
        descripcion: "170g de carne Angus, provoleta, tomate perita asado, rúcula y mayonesa dechimichurri.",
    },
    {
        id: "2",
        nombre: "CHEESE-BURGUER",
        precio: 170,
        imagen: "./imagenes/cheese-burger.jpg",
        descripcion: "Carne, Pan y Queso. Simple y al pie!",
    },
    {
        id: "3",
        nombre: "NORMAN",
        precio: 180,
        imagen: "./imagenes/NORMAN.jpg",
        descripcion: "170g de Carne Angus, Pan de Papa, Muzzarella, Queso Azul y Cebolla Crispy.",
    },
    {
        id: "4",
        nombre: "FREDDY",
        precio: 180,
        imagen: "./imagenes/FREDDY.jpg",
        descripcion: "170g de Carne Angus, Cebolla Caramelizada, Queso Brie, Tomate Perita Asado, Rúcula y Mostaza Casera.",
    },
    {
        id: "5",
        nombre: "jimmy",
        precio: 180,
        imagen: "./imagenes/jimmy.jpg",
        descripcion: "170g de Carne Angus, Queso Cheddar, Panceta, Cebolla Caramelizada, Pepinillos y Ronnie BBQ.",
    },
    {
        id: "6",
        nombre: "MOTZ",
        precio: 180,
        imagen: "./imagenes/MOTZ.jpg",
        descripcion: "2 Burgers de 100g de Carne Angus, Pan de Papa, Cebolla y Cheddar.",
    },
]; */

let total = 0.0;
let carrito = [];

/* Cuando arranca la aplicación tengo que ver si el LS para el item productos tiene información 
si hay info, la guarda en el arrayLS, si fuera que no hay nada, deja el arrayLS vacío */
let arrayLS = [];
leerLocalStorage();

// datos JSON
let prodcutos = [];
obtenerDatos();


//swet alert 
const btoncito = document.getElementById("botoncito");
btoncito.addEventListener("click", () => {
    swal("Porfavor ingresa tu nombre ", {
        content: "input",
    }).then((value) => {
        console.log(value);
        if(value){
            swal(`Gracias por tu compra  ${value}, el total es $${total}`);                     
        }        
    });
});

////////////////
/* FUNCIONES */
////////////////

function obtenerDatos() {

    fetch("./datos.json")
        .then(response => response.json())
        .then(result => {
            prodcutos = result;

            let listaBurguer = document.getElementById("listaBurguer");
            let carro = document.querySelector("#carrito");

            arrayLS.forEach((el) => {                
                carro.innerHTML += divCarrito(el);
            });

            //forEach del array : recorre todos los objetos del array
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

                    let hamburguesaCarrito = prodcutos.find((ele) => ele.id == identificador);
                    hamburguesaCarrito.cantidad = 1;                    

                    /* Cada vez que clickeas sobre una hamburguesa es que se guarda en el LS */
                    /* Antes de guardar al localStorage, lo guardo en el arrayLS y el arrayLS es lo que va al LS */
                    
                    let h = arrayLS.find( a => a.id === hamburguesaCarrito.id);                    

                    if(h !== undefined){
                        let pos = arrayLS.indexOf(h);                        
                        arrayLS.splice(pos,1);
                        h.cantidad ++;
                        arrayLS.push(h);
                    }else{
                        arrayLS.push(hamburguesaCarrito);
                    }                                                       
                    localStorage.setItem("productos", JSON.stringify(arrayLS));

                    carro.innerHTML += divCarrito(hamburguesaCarrito);
                    location.reload();
                });
            });   

            let botones_eliminar = document.querySelectorAll('.btn_eliminar');
            botones_eliminar.forEach( boton => {
                boton.addEventListener('click', (e) => {
                    e.preventDefault();
                    let div = e.target.parentElement.parentElement.parentElement;
                    let p_id = div.querySelector('.p_id').textContent;
                    
                    let hamb = arrayLS.find( h => h.id === p_id);
                    let pos = arrayLS.indexOf(hamb);  
                    arrayLS.splice(pos,1);

                    hamb.cantidad--;

                    if(hamb.cantidad === 0){
                        
                    }else{                                                
                        arrayLS.push(hamb);
                    }                                        
                    localStorage.setItem("productos", JSON.stringify(arrayLS));

                    /* carro.innerHTML += divCarrito(hamburguesaCarrito); */
                    location.reload();  
                });
            });
        });

}

//funcion donde arma las cards de los prodcutos !!!
function divHamburguesa(hamburguesa) {
    let { imagen, id, nombre, precio, descripcion } = hamburguesa; // deseestruturacion de objeto

    return `        
        <div class="card  mt-2 mb-2 tarjeta  ">
            <img src="${
              imagen || "./imagenes/imageError.jpg" // aqui dejo imagen de error !!
            }" class="card-img-top w-50" alt="Img ${nombre}">
            <div class="card-body">
            <p class="d-none"  id="identificador">${id}</p>
                <h3 class="card-title">${nombre}</h3>
                <p class="card-text">${descripcion}</p>
                    <h4>${precio}</h4>
                <button class="btn btn-primary">Comprar</button>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a>-->
            </div>
        </div>            
    `;
}

function divCarrito(hamburguesaCarrito) {

    //let hamburguesaCarrito = prodcutos.find((el) => el.id == id);
    
    let { id, imagen, nombre, precio, cantidad } = hamburguesaCarrito; // deseestruturacion de objeto

    total = total + (precio*cantidad);

    let carrito_span = document.getElementById("carrito_span");
    carrito_span.textContent = arrayLS.length;
    
    return `        
      <div class="tarjetasCarrito">
        <p class="d-none p_id">${id}</p>
        <img class="hamb_img" src="${imagen || "./imagenes/imageError.jpg"}" alt="Img ${nombre}">
        <p class="hamb_nombre">"${nombre}"</p>
        <p class="hamb_cantidad">x(${cantidad})</p>
        <span class="hamb_precio">$ ${precio*cantidad}</span> 
        <a href="" id="btnEliminar${id}"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="btn_eliminar bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
      </svg> </a>
     
      </div>
    `;   
}

function leerLocalStorage() {

    arrayLS = JSON.parse(localStorage.getItem("productos")) || [];

    let carrito_span = document.getElementById("carrito_span");
    let carro_container = document.querySelector('.carro_container');

    carrito_span.textContent = arrayLS.length;

    if(arrayLS.length > 0){
        carro_container.style.display = "block";
    }
}