/*
    ===== Código de TypeScript =====
*/

import { ObjectType } from "typescript";

interface superHeroe {
    nombre: string,
    edad: number,
    direccion: Direccion,
    mostrarDireccion(): string
}

interface Direccion {
    calle: string,
    pais: string,
    ciudad: string
}

const superHeroe: superHeroe = {

    nombre: 'Spiderman',
    edad: 28,
    direccion: {

        calle: ' Main ST',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', '+ this.edad + ', '+ this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion );

