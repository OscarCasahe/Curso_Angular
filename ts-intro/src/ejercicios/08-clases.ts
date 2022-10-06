
/*
    ===== Código de TypeScript =====
*/
class PersonaNomral {
    
    constructor(public nombre: string, public direccion: string){}

}

class Heroe extends PersonaNomral {
    // AKA: string;
    // edad:number;
    // nombreReal:string;

    constructor(
        public aka: string,
        public edad: number,
        public nombreReal: string
        ) {
            super('Tony Stark', 'NY');
        }



    // imprimirNombre() {
    //     return this.AKA+' '+this.nombreReal;
    // }
}


interface Personaje1 {
    AKA?: string;
    edad?:number;
    nombreReal?:string;
}

const ironman = new Heroe('Ironman', 34, 'Tony');
const spiderman: Personaje1 = {};

console.log(ironman);


