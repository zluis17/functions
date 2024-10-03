// Importaciones (asumiendo que ya tienes los tipos definidos correctamente)
import mostrarEstudiante from "./mostrarEstudiante";
import { Address, Estudiante } from "./tipos";

// Definición de los estudiantes con direcciones
const e1: Estudiante = {
    nombre: "Alejandro",
    apellido: "Quintero",
    edad: 20,
    addresses: [
        { street: "calle 123", numero: 123, city: "Bogotá" },
        { street: "calle Z 3223-2", numero: 199, city: "Tunjuelito" }
    ]
};

const e2: Estudiante = {
    nombre: "Luis",
    apellido: "Ramos",
    edad: 30,
    addresses: [
        { street: "calle 123", numero: 123, city: "Bogotá" },
        { street: "calle R 3223-2", numero: 122, city: "Tocaima" },
        { street: "calle Z 3223-2", numero: 199, city: "Tunjuelito" }
    ]
};

// Arreglo para almacenar estudiantes 
let arregloEstudiante: (number | string | Estudiante)[] = [];

// Agregar primeros elementos al arreglo
arregloEstudiante.push(2);
arregloEstudiante.push("oseomo");
arregloEstudiante.push("jorge");
arregloEstudiante.push(3);

// Método para agregar un estudiante al arreglo
const addEstudiante = (e: Estudiante) => {
  arregloEstudiante.push(e);
  console.log("Estudiante agregado correctamente");
};

// Type Guard para verificar si un objeto es de tipo Estudiante
const  esEstudiante = (elemento: any): elemento is Estudiante => {
    return (
        typeof elemento === 'object' &&
        elemento !== null &&
        typeof elemento.nombre === 'string' &&
        typeof elemento.apellido === 'string' &&
        typeof elemento.edad === 'number' &&
        Array.isArray(elemento.addresses) // Verificamos que 'addresses' sea un array
    );
}

// Recorrer el arreglo y mostrar los estudiantes si el elemento es de tipo Estudiante
arregloEstudiante.forEach((elemento) => {
    if (esEstudiante(elemento)) {
        // Si el elemento es un estudiante, mostramos su información usando el método mostrarEstudiante
        console.log("Estudiante encontrado:");
        mostrarEstudiante(elemento); // Mostrar directamente el estudiante
    } else {
        console.log("El elemento no es un estudiante:", elemento);
    }
});

// Agregar el estudiante e1 al arreglo
addEstudiante(e1);
addEstudiante(e2); // También agregamos el segundo estudiante

// Ahora recorrer el arreglo y mostrar los estudiantes
arregloEstudiante.forEach((elemento) => {
    if (esEstudiante(elemento)) {
       
        console.log("Estudiante encontrado:");
        mostrarEstudiante(elemento); 
    } else {
        console.log("El elemento no es un estudiante:", elemento);
    }
});

// Salida de todo el arreglo
// console.log("Contenido del arreglo:");
// console.log(arregloEstudiante);
