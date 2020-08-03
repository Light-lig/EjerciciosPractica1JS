// Ejercicio 2
var estudiantes = [];
var respuesta = false;
var cantidad = 0;
var cantidadAprobados = 0;
var cantidadReprobados = 0;
var notaGlobalPromedio = 0.0;

function app(){
    cantidad = parseInt(prompt('Ingrese la cantidad de estudiantes'));
   for (var i = 0; i < cantidad; i++) {
     var estudiante = new Object();
     estudiante.nombre = prompt("Ingrese el nombre del estudiante");
     estudiante.nota = parseFloat(prompt("Ingrese la nota del estudiante"));
     aproboReprobo(estudiante);
     agregarEstudiante(estudiante);
   }
   imprimirInformacion();
}

function imprimirInformacion(){
  console.log("Informacion");
  console.log(estudiantes);
  console.log("cantidad de aprobados: " + cantidadAprobados);
  console.log("cantidad de reporbados: " + cantidadReprobados);
  console.log("Promedio global: " + notaGlobalPromedio);
}

function aproboReprobo(obj){
  notaGlobalPromedio = obj.nota/cantidad;
 if (obj.nota >= 7) {
     obj.estado = "Aprobado";
     cantidadAprobados++;
 }else{
     obj.estado = "Reprobado";
     cantidadReprobados++;
 }
}
function agregarEstudiante(obj){
  estudiantes.push(obj);
}

app();
