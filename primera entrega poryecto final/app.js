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
  
  let pregunta = prompt("quieres ingresar un prodcuto si/no ??");
  
  while (pregunta != "no") {
  crearProducto();
    lista.push(prodcuto1);
    pregunta = prompt("quieres ingresar un prodcuto si/no ??");
  }
  console.log(lista);
  
  alert(
    "muchas gracias, para ver los prodcuto y sus precios fijarse en la CONSOLA !!!! "
  );
  