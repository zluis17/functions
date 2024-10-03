import { Address, Estudiante } from "./tipos";

const mostrarEstudiante = (estudiante: Estudiante) => {
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Apellido: ${estudiante.apellido}`);
    console.log(`Edad: ${estudiante.edad || "NO DEFINIDO"}`);  // Si la edad es undefined, muestra "NO DEFINIDO"
    console.log("DIRECCIONES:");

    if (estudiante.addresses && estudiante.addresses.length > 0) {
        estudiante.addresses.forEach(function (direccion: Address) {
            console.log(`Calle: ${direccion.street}`);
            console.log(`Ciudad: ${direccion.city}`);
            console.log(`Número: ${direccion.numero}`);
            console.log("------------------");
        });
    } else {
        console.log("No tiene direcciones.");
    }
};

export default mostrarEstudiante;
