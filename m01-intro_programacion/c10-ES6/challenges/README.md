# **Módulo 1: Introducción a la programación**
## **Clase 10: Desafíos** ⚡️
--- 

### Desafío 1: **Ingrediente en mal estado** 💀
¡Conseguimos trabajo en la cocina! Como ayudantes, sí... pero por algo se empieza. Después de todo, ningún edificio nace desde la terraza, ¿cierto? Bien. Nuestra primera tarea consiste en **chequear que algún ingrediente de la cocina esté en buen estado**. En caso de que no lo esté... ¡hay que sacarlo!, y no sólo a él, sino a los ingredientes que tenga al lado, porque puede que estén contaminados también.

Nuestra función recibe un objeto ```menú``` que contiene las comidas del día. También recibe ```comida```, un arreglo de ingredientes. Por último, también recibe un ```ingrediente```.
Si el ingrediente está en el arreglo de comida, hay que **devolver un arreglo con el ingrediente y los elementos con un índice de diferencia** (el ingrediente que tiene a su izquierda o a su derecha, si los tuviese).
En caso de no encontrarse el ingrediente en la receta, devolver ```"El menú está perfecto"```.

>Pueden usar el método ```includes()``` de los arreglos, y ```hasOwnProperty()```, de los objetos. 😉

---

<br>
<br>

### Desafío 2: **Contando ovejas** 🐑
¡Tenemos un segundo empleo! Esta vez, los fines de semana... en un campo. El aire fresco debería sentarnos bien. Nos han encargado un grupo de ovejas, de las cuales debemos separar sólo a aquéllas que cumplan con ciertas condiciones para esquilado.
Nos han dado un arreglo de ovejas, donde cada oveja tiene un ```nombre``` y un ```color```. Necesitaremos de una función que devuelva una lista con todas las ovejas que sean **de color rojo** y que además **su nombre contenga tanto las letras n Y a**, sin importar el orden, las mayúsculas o espacios.

>Recuerden: debe contener las dos letras, ```'a'``` y ```'n'```, en el ```nombre```. No separen ovejas que sólo tengan una de las letras, **debe tener ambas**.