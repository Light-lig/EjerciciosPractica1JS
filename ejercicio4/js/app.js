var empleado  = {
  carnet:8989,
  nombre:"Oscar",
  edad:23,
  sexo:"masculino",
  lugarTrabajo:"Datasoft",
  cargo:"Programador"
}

imprimir = (obj) =>{
   console.log("Datos empleado");
   console.log(obj)
 }
 app = (obj, fn) => {
  fn(obj);
}

app(empleado, imprimir);
