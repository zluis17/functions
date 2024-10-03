"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importaciones (asumiendo que ya tienes los tipos definidos correctamente)
const mostrarEstudiante_1 = __importDefault(require("./mostrarEstudiante"));
// Definición de los estudiantes con direcciones
const e1 = {
    nombre: "Alejandro",
    apellido: "Quintero",
    edad: 20,
    addresses: [
        { street: "calle 123", numero: 123, city: "Bogotá" },
        { street: "calle Z 3223-2", numero: 199, city: "Tunjuelito" }
    ]
};
const e2 = {
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
let arregloEstudiante = [];
// Agregar primeros elementos al arreglo
arregloEstudiante.push(2);
arregloEstudiante.push("oseomo");
arregloEstudiante.push("jorge");
arregloEstudiante.push(3);
// Método para agregar un estudiante al arreglo
const addEstudiante = (e) => {
    arregloEstudiante.push(e);
    console.log("Estudiante agregado correctamente");
};
// Type Guard para verificar si un objeto es de tipo Estudiante
const esEstudiante = (elemento) => {
    return (typeof elemento === 'object' &&
        elemento !== null &&
        typeof elemento.nombre === 'string' &&
        typeof elemento.apellido === 'string' &&
        typeof elemento.edad === 'number' &&
        Array.isArray(elemento.addresses) // Verificamos que 'addresses' sea un array
    );
};
// Recorrer el arreglo y mostrar los estudiantes si el elemento es de tipo Estudiante
arregloEstudiante.forEach((elemento) => {
    if (esEstudiante(elemento)) {
        // Si el elemento es un estudiante, mostramos su información usando el método mostrarEstudiante
        console.log("Estudiante encontrado:");
        (0, mostrarEstudiante_1.default)(elemento); // Mostrar directamente el estudiante
    }
    else {
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
        (0, mostrarEstudiante_1.default)(elemento);
    }
    else {
        console.log("El elemento no es un estudiante:", elemento);
    }
});
// Salida de todo el arreglo
// console.log("Contenido del arreglo:");
// console.log(arregloEstudiante);
