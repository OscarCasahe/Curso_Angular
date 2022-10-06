
/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre:string,
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Pepe',
}

const pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['Natalia', 'Jesús']
}

function imprimeHijos(pasajero: Pasajero):void {
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

console.log(imprimeHijos(pasajero1));
