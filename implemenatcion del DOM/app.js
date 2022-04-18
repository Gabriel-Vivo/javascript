class Prodcuto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
  
  }
  
  const crearProducto =()  =>{

    let nombre = prompt("ingrese nombre del producto");
    let precio = Number(prompt("ingrece precio"));
    return  prodcuto1 = new Prodcuto(nombre, precio)
  }
  // let nombre = "";
  // let precio = 0;
  
  const lista = [];
  
  let pregunta = confirm("quieres ingresar un prodcuto si/no ??");


  

  while (pregunta != false) {
  crearProducto();
    lista.push(prodcuto1);
    pregunta = confirm("quieres ingresar un prodcuto nuevo si/no ??");
  }
  console.log(lista);



  ///// AQUI LE DEJO LA IMPLEMENTACION DEL DOM CAMBIANDO EL TEXTO DE BIENVENIDA /////
  
  let titulo=document.getElementById("titulo");
  
  titulo.innerText="GRACIAS POR TU COMPRA";
  titulo.style.color="brown";
  