export type Estudiante = {
    nombre: string;
    edad: number;
    apellido: string;
    addresses?: Address[]; 
};

export type Address = {
    street: string;
    numero: number; 
    sector?: string;
    city: string;
    postalCode?: string;
};