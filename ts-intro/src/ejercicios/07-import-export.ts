import { Producto, calculaIVA } from './06-desestructuracion-argumentos';

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 200
    },
    {
        desc: 'Telefono 2',
        precio: 550
    },
];

const [total, iva] =calculaIVA(carritoCompras);

console.log( 'Total: ', total);
console.log('IVA: ', iva);