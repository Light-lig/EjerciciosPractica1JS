//declaracion de constantes
const cm = 0.39370;
const m = 39.370;
const km = 39370.1;
const milla = 63360;

const funciones = {
    centimetros : (pl) => {
      total = pl/cm;
      return total;
    },
    metros : (pl) => {
      total = pl/m;
      return total;
    },
    kilometros : (pl) => {
      total = pl/km;
      return total;
    },
    millas : (pl) => {
      total = pl/milla;
      return total;
    }
}

app = () =>{
    var cantidad = parseFloat(prompt("Ingrese la cantidad"));
    console.log("cantidad en centimetros: " + funciones.centimetros(cantidad));
    console.log("cantidad en metros: " + funciones.metros(cantidad));
    console.log("cantidad en kilometros: " + funciones.kilometros(cantidad));
    console.log("cantidad en millas: " + funciones.millas(cantidad));
}

app();
