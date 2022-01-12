# **Módulo 1: Introducción a la programación**
## **Clase 10: ECMAScript 6**
--- 

## Diferencias entre ```var``` y ```let```

Tanto ```var``` como ```let``` **crean una nueva variable**. La principal diferencia entre ellos es que ```let```, que es más reciente que ```var```, **se maneja con un scope (alcance) diferente**: al crearse una variable cualquiera dentro del scope de un ```if``` o de un ```for```, puede advertirse que ```let``` sólo tiene injerencia dentro de él, y no por fuera, como sí lo hace ```var```.

```javascript
function pruebaIf(){
    var a = "Juan";
    var b = "Tahiel";

    if(true){
        var a = "Pedro";
        let b = "Mica";
    }

    console.log(a) // Pedro
    console.log(b) // Tahiel
}
pruebaIf();
```
>En este ejemplo puede verse cómo sólo fue sobrescrita la variable a, definida con ```var```, mientras que la variable definida con let no fue sobrescrita, puesto que ```let``` sólo existe dentro del scope donde es creado (en este caso, ```if```).

<br>

```javascript
function pruebaFor(){
    var array = [1, 2, 3];
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
    console.log(i) // ReferenceError: i is not defined
}
pruebaFor();
```
>La variable ```i``` no puede ser mostrada: JavaScript la marca como que no está definida porque, al haber sido creada con ```let```, sólo existe dentro del scope del ciclo ```for```.
---

<br>

## Destructuring

Las estructuras, como los arreglos y los objetos, se pueden **desestructurar** para poder seleccionar valores utilizando patrones de _match_ o coincidencia. Esto funciona igual que buscar una propiedad de un objeto ```foo['bar']``` en el sentido que ambos son _fail-soft_, es decir, que producen un ```undefined``` cuando algo no se encuentra.


```javascript
var [a, b, c] = [1, 2, 3];

console.log(a) // 1
console.log(b) // 2
console.log(c) // 3
```

```javascript
var [nombre, edad] = ["Marcos", 30];
console.log(nombre) // Marcos
console.log(edad) // 30
```
>JavaScript es inteligente e interpreta que, para cada elemento del arreglo declarado a la izquierda, le corresponde, en ese orden, cada uno de los valores que están a la derecha ```=```.

Esto también nos permite **saltarnos elementos**
```javascript
var [nombre, , apellido] = ["Marcos", 30, "Rausch"];
console.log(nombre) // Marcos
console.log(apellido) // Rausch
```

> Al ```nombre``` se le asigna "Marcos", al ```apellido``` se le asigna "Rausch", pero como el dato de la edad no interesa, **dejamos un espacio en blanco** en el arreglo de la izquierda. 
---

La desestructuración también admite la **asignación por default**: podemos establecer el valor de a, en caso de que el arreglo que le pasemos esté provisoriamente vacío, evitando el _soft-fail_.
```javascript
var [a = 1] = [];
console.log(a) // 1
```


<br>

Los objetos, como también representan una estructura de datos, también pueden ser desestructurados
```javascript
var { nombre, apellido } = {nombre: "Juan", apellido: "Aguirre" };
console.log(nombre) // Juan
console.log(apellido) // Aguirre
```

Esto es de mucha utilidad, ya que permite elegir sólo las las propiedades deseadas de un objeto, sin importar cuántas tenga este en total. Y también es **aplicable a funciones**.

```javascript
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

```
> ```fail-soft``` es el mecanismo por el cual, al no hallar una propiedad, JavaScript evita el colapso y devuelve ```undefined```.
---
<br>

## Spread operator ```...```

Dependiendo de cómo lo invoquemos, el **spread operator** hace una cosa, o la inversa:  
1. Deshace un arreglo y separa sus elementos en datos particulares, o bien
2. Une los elementos separados dentro de un arreglo.

```javascript
function unir(...y) {
    console.log(y);
}
unir(3, 4, "hola");

```
>Cada nuevo elemento que se le pase por parámetro a la función ```unir``` **formará parte del arreglo** a ser mostrado por consola.

<br>

```javascript
function desunir(x, y, z) {
    console.log(x + y + z);
}
desunir(...[1, 2, 3]); // 6
```
>Cada elemento del arreglo pasado por parámetro, en la función ```desunir``` será extirpado de él y sumado dentro de la consola.