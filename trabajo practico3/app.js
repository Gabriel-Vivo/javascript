


class Prodcuto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

let nombre = "";
let precio = 0;

const lista = [];

let pregunta = prompt("quieres ingresar un prodcuto si/no ??");

while (pregunta != "no") {
  nombre = prompt("ingrese nombre del producto");
  precio = Number(prompt("ingrece precio"));
  const prodcuto1 = new Prodcuto(nombre, precio);
  lista.push(prodcuto1);
  pregunta = prompt("quieres ingresar un prodcuto si/no ??");
}
console.log(lista);

alert(
  "muchas gracias, para ver los prodcuto y sus precios fijarse en la CONSOLA !!!! "
);
