/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    
    desc: string,
    precio: number
}

const telefono: Producto = {

    desc: 'Nokia A1',
    precio: 200

}

const tablet: Producto = {

    desc: 'IPad Air',
    precio: 500

}

export function calculaIVA(    productos: Producto[]   ):[number, number]   {

    let total = 0;

    productos.forEach(  ({precio})   => {

        total += precio;
    });

    return [total, total * 0.15];

}

const articulos = [telefono, tablet]
const [total, iva] = calculaIVA ( articulos);

console.log('Total: ', total);
console.log('IVA: ', iva);

function nuevaFunc( cosas:Producto[] ):number {

    let total = 0;

    cosas.forEach ( ({precio}) => {
        total += precio;
    })

    return total * 0.15;
    ;
}
const cosasNuevas = [tablet];
const nuevaCosa = nuevaFunc(cosasNuevas)

console.log('FunctionIVANueva: ', nuevaFunc(cosasNuevas));
