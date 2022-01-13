const fs = require('fs');
const ovejas = JSON.parse(fs.readFileSync('./sheeps.JSON', 'utf-8'));

const separarOvejas = arregloOvejas => {
    const arreglo = arregloOvejas.filter(
        oveja => oveja.color === 'rojo' &&
        oveja.name.toLowerCase().includes('a') && 
        oveja.name.toLowerCase().includes('n')
        );

        console.log(arreglo);
        return arreglo;
}

separarOvejas(ovejas);