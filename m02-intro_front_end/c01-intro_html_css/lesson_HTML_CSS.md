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

### Atributos

En su mayoría, los atributos de un elemento son pares **clave-valor**, separados por un signo de igual `=` y escritos en la etiqueta **después del nombre del elemento**. El valor puede estar rodeado por comillas dobles o simples. Los atributos de los tags nos sirven para cambiar su comportamiento o configurarlos.

```html
<etiqueta atributo="valor" /> Contenido </etiqueta>
```

> 🔜  Veremos en detalle las etiquetas más comunes HTML en la próxima lección.

---

<br>
<br>

### **`CSS`: Cascading Style Sheets**

CSS, Hojas de Estilo en Cascada (_Cascading Style Sheets_, por sus siglas en inglés) es un concepto que permite, como su nombre lo indica, añadir estilos a una página web. <br>
Como hemos visto, las primeras páginas de internet eran, bueno... algo aburridas; de hecho, aún está viva la [primera página de internet](http://info.cern.ch/hypertext/WWW/TheProject.html).<br>
Mediante reglas de estilo compuestas por un par `propiedad: valor;` que se aplican a un selector en particular, CSS nos permite añadir estilos visuales a nuestros sitios web.

```css
selector {
  propiedad: valor;
  propiedad: valor;
}
```

Los **selectores** implican un abordaje bastante amplio, ya que los hay en calidad y cantidad. Por ahora, sólo diremos que un selector **es un elemento de nuestro archivo html** al cual se le aplicarán los estilos especificados en las reglas. Aunque, en realidad, más adelante veremos cuánto más complejo es referirnos a selectores.

<img src="../../images/css-declaration.png" alt="css declaration" height="200" width="400"/>

<br>

### Formas de dar estilo
Antes de empezar a dar estilos, necesitamos una forma de avisarle al navegador que vamos a hacerlo. Hay varias formas de lograr esto:

- Dentro del mismo documento HTML al cual queremos dar estilos:
    - utilizando el **atributo** `<style>` [dentro de nuestra etiqueta HTML](#item1).
     - haciendo uso de la **etiqueta** `<style>`. Esta etiqueta, a su vez, debe ubicarse [dentro de la etiqueta `<head>`](#item2) para que tenga efecto.

<br>

- Por fuera del documento HTML que estructura nuestra web:
    - Mediante un archivo externo, por convención denominado `styles.css`. Este archivo estará _enlazado_ a nuestro documento HTML por vía de [la etiqueta `<link>`](#item3).

<br>

<a id="item1"></a>

```html
<h1 style="color: red"></h1>
```
> Este es un ejemplo de un estilo en línea.
---

<br>

<a id="item2"></a>

```html
  <html>

    <head>

      <style>
        h1 {
            color: red;
        }
      </style>

    </head>

    <body>
        ...
    </body>

  </html>
```
> Otra de las maneras es colocar las reglas dentro de la etiqueta `<head>`.
---
<br>

<a id="item3"></a>
```html
<html>

    <head>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
    </body>

</html>
```
> Así es como le indicamos al navegador que vaya a buscar una hoja de estilos externa a nuestro Documento HTML. Los atributos de la etiqueta `<link>` son `rel` y `href`: el primero determina la relación que el archivo tiene con el documento (en este caso, _stylesheet_, u hoja de estilos, por su traducción), mientras que el segundo recibe como valor el nombre de nuestra hoja externa de estilos.