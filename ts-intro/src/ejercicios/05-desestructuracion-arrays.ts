/*
    ===== Código de TypeScript =====
*/

interface Reporoductor {
    volumen: number,
    segundo: number,
    cancion : string,
    detalles: Detalles
}

interface Detalles {
    autor: string,
    anio: number
}

const reproductor: Reporoductor = {
    volumen: 90,
    segundo: 120,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const {volumen, segundo, cancion, detalles} = reproductor
const{autor, anio} = detalles;

// console.log(' El volumen es de: ', reproductor.volumen);
// console.log(' El volumen es de: ', reproductor.segundo);
// console.log(' El volumen es de: ', reproductor.cancion);
// console.log(' El autor es: ', autor); 

const dbz: string[] = ['Goku', 'Vegetta', 'Piccolo'];
const [ , , p3] = dbz

console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', p3);
