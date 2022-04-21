


alert("PRECIONA EL BOTON ROJO y MIRA EL CARRITO ABAJO ");

const boton=document.querySelector("#boton1");

const parrafo=document.querySelector("#parrafo")


const producto3={
  nombre:"AMY",
  precio:150
}

const mensaje =()=>{

  let texto = producto3

  parrafo.textContent="elegiste esta hamburguesa "+ texto.nombre+ " y el precio es $" + texto.precio ;

}

boton.addEventListener("click",mensaje);





