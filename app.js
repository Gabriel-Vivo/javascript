// ejrcicio  convercion de divisas//

let resultado = 0;

let respuesta = prompt("quieres cambiar dinero  si/ no");

while (respuesta != `no`) {
  valor = parseInt(prompt("ingrese cantidad de dinero que quierre cambiar "));
  moneda = prompt("reales-dolares-euros");

  switch (moneda) {
    case "reales":
      resultado = valor / 25;
      alert(`tu dinero en reales seria ${resultado}`);
      break;

    case "dolares":
      resultado = valor / 110;
      alert(`tu dinero en dolares seria ${resultado}`);
      break;

    case "euros":
      resultado = valor / 121;
      alert(`tu dinero en euros seria ${resultado}`);
      break;

    default:
      alert("no hacemos cambios de esa moneda ");
      break;
  }
  respuesta = prompt("quieres seguir cambiando si/ no");
}

alert("GRACIAS");
