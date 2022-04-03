let seleccion = 0;
let valor = 0;
let total = 0;

function suma() {
  return (total += seleccion);
}
let respuesta = prompt("quieres comprar algo de la tienda si o no");

while (respuesta != "no") {
  let pro = prompt("ingrese  producto COCA $50 ,FANTA $70,BURGUER $150  ");
  switch (pro) {
    case "coca":
      valor = 50;
      break;
    case "fanta":
      valor = 70;
      break;
    case "burguer":
      valor = 150;
      break;
    default:
      alert("no tenemos ese producto");
  }

  seleccion = valor;

  respuesta = prompt(
    "quieres seguir comprando !!! si/no y si quieres ver el monto total.... ingresa monto"
  );
  suma();
}

let respuesta2 = prompt("quieres ver el total ingresa monto");

if (respuesta2 == "monto") {
  alert("tu compra es " + total);
} else {
  alert("no compraste nada gracias por visatrnos ");
}

alert("Muchas gracias");