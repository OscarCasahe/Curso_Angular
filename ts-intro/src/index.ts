/*
    ===== Código de TypeScript =====
*/

interface Producto {
    
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

function calculaIVA(productos: Producto[]) {

    let total = 0;

    productos.forEach((producto) => {

        total += producto.precio;
    });

    return total * 0.15;

}

const articulos = [telefono, tablet]
const iva = calculaIVA(articulos);

console.log('IVA: ', iva);