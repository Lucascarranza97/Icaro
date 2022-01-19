# **Módulo 2: Introducción al Front-End**
## **Clase 1: Introducción a HTML y CSS**
--- 

## Desarrollo **Front-End** y **Back-End**
<img src="../../images/front_back.png" alt="front-back" height="300" width="500"/>

<br>
<br>

### **Front-end**

Todo lo que podemos visualizar en nuestro navegador es gracias al desarrollo front-end. De este "lado" de la comunicación web se encuentra todo aquello a lo que nos referimos cuando hablamos de un _cliente_. Las habilidades técnicas imprescindibles de este _lado_ son muchas, pero podemos enumerar tres de las más importantes:

- HTML
- CSS
- JavaScript

<br>

### **Back-end**
La tarea principal de todo desarrollador back-end o desarrollador _del lado del servidor_, implica la creación y/o mantenimiento de aplicaciones que puedan interactuar con una base de datos para brindarle respuestas (información) al _cliente_ que la solicita.

<img src="../../images/Server-Side-vs-Client-Side.png" alt="client server" height="300" width="500"/>

---

<br>
<br>

### **`HTML`: the hyper-text markup language**
**HTML** es un lenguaje de [marcado](https://es.wikipedia.org/wiki/Lenguaje_de_marcado) que nos permite, mediante `<etiquetas />`, generar contenido visible dentro de nuestro sitio web. Podemos crear desde elementos simples, como títulos, hasta elementos más complejos, como formularios. Para eso tendremos que aprender algunas cuestiones importantes: la sintaxis de HTML con sus etiquetas y atributos, cómo estructurar un sitio y las características de los distintos elementos de HTML.

### HTML significa:
- `hyper-text`: "hypertexto", se refiere a texto con enlaces, o "[links](https://es.wikipedia.org/wiki/Hipertexto)".
- `markup language`: son lenguajes basados en **etiquetas** que uno agrega a un texto para darle estructura e información adicional. A diferencia de los lenguajes de _scripting_, que se usan para crear programas informáticos, los lenguajes de marcado son sólo **reglas para ordenar un documento**.

<br>

### Sintaxis HTML

<img src="../../images/html_syntax.jpeg" alt="html syntax" height="150" width="500"/>

<br>

Cada etiqueta (o _tag_, en inglés) está encerrado en `< >` y tiene un nombre. Los tags se abren (etiquetas de apertura) y se cierran (etiquetas de cierre), los tags de cerrado incluyen con un `/` en el principio del tag que cierra.


```html
<etiqueta>
...
<etiqueta />
```

<br>

Algunas etiquetas de HTML, por su naturaleza, **no necesitan de una etiqueta de cierre**: simplemente agregamos un "/" antes del bracket final:

```html
<etiqueta ... />
```

<br>

