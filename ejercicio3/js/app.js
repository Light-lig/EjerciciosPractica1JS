var Estudiante = {
  carnet:033616,
  nombre:"Oscar",
  edad:23,
  facultad:{
    nombre:"Ingenieria en desarrollo de software",
    escuela:{
      nombre:"Computacion",
      cantidadMaterias:100
    }
  },
  cumCiclo:10,
  direccion:{
    departamento:"La libertad",
    municipio:"San juan opico",
    ciudad:"San juan opico"
  }
};

function app(){
  console.log("Nombre del estudiante" + Estudiante.nombre);
  console.log("Municipio" + Estudiante["direccion"]["municipio"]);
  console.log("Nombre facultad: " + Estudiante.facultad.nombre);
  console.log("Cum de ciclo: " + Estudiante.cumCiclo);
  console.log("Nombre escuela: " + Estudiante["facultad"]["escuela"]["nombre"]);
}

app();
