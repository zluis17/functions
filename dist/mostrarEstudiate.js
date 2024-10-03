"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mostrarEstudiante;
function mostrarEstudiante(estudiante) {
    var _a;
    // Información del estudiante
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Apellido: ${estudiante.apellido}`);
    console.log(`Edad: ${estudiante.edad || "NO DEFINIDO"}`);
    console.log("DIRECCIONES");
    (_a = estudiante.addresses) === null || _a === void 0 ? void 0 : _a.forEach(function (direccion) {
        console.log(`Calle: ${direccion.street}`);
        console.log(`Ciudad: ${direccion.city}`);
        console.log(`Número: ${direccion.numero}`);
        console.log("------------------");
    });
}
