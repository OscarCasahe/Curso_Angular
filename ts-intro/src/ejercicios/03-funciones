
/*
    ===== Código de TypeScript =====
*/
function sumar(a: number, b): number {

    return a + b;

}

const sumarFlecha = (a: number, b: number): number => {

    return a + b;

}

function multiplicar(numero: number, otroNumero?: number, base: number = 2) {

    return numero * base;

}

const resultado = multiplicar(5);

console.log(resultado);



interface PersonajeLOR {
    nombre: string,
    hp: number
    mostrarHp: () => void
}

function curar(personaje, cantidad): void {

    personaje.hp += cantidad

    console.log( personaje )
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: ' Strider ',
    hp: 50,
    mostrarHp() {
        console.log( 'Puntos de vida: ', this.hp )
    }
}

curar( nuevoPersonaje, 20 );

nuevoPersonaje.mostrarHp();