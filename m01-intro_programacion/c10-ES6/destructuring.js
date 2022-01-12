// asignando valores en un arreglo
var [a, b, c] = [1, 2, 3];

console.log(a) // 1
console.log(b) // 2
console.log(c) // 3


// asignación por default
var [a = 1] = [];
console.log(a) // 1

var [a = 1] = [5];
console.log(a) // 5


var [nombre, edad] = ["Marcos", 30];
console.log(nombre) // Marcos
console.log(edad) // 30


var [nombre, , apellido] = ["Marcos", 30, "Rausch"];
console.log(nombre) // Marcos
console.log(apellido) // Rausch


// asignando valores en un objeto
var { nombre, apellido } = {nombre: "Juan", apellido: "Aguirre" };
console.log(nombre) // Juan
console.log(apellido) // Aguirre


// eligiendo propiedades de un objeto
const objetoGigante = {
    nombre: 'Juan',
    apellido: 'Aguirre',
    edad: 25,
    hobbies: ['fútbol', 'crossfit'],
    trabajo: 'desarrollador',
    nacionalidad: 'argentina',
    mascotas: true,
    altura: 1.80
}

function desestructurar({ nombre }){
    console.log(nombre)
}

desestructurar(objetoGigante); // Juan