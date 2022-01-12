# **Módulo 1: Introducción a la programación**
## **Clase 10: ECMAScript 6**
--- 

## Diferencias entre ```var``` y ```let```

Tanto ```var``` como ```let``` **crean una nueva variable**. La principal diferencia entre ellos es que ```let```, que es más reciente que ```var``` **se maneja con un scope (alcance) diferente**: al crearse una variable cualquiera dentro del scope de un ```if``` o de un ```for```, puede advertirse que ```let``` sólo tiene injerencia dentro de él, y no por fuera, como sí lo hace ```var```.

```javascript
function prueba(){
    var a = "Juan";
    var b = "Tahiel";

    if(true){
        var a = "Pedro";
        let b = "Mica";
    }

    console.log(a) // Pedro
    console.log(b) // Tahiel
}
prueba();
```
>En este ejemplo puede verse cómo sólo fue sobrescrita la variable a, definida con ```var```, mientras que la variable definida con let no fue sobrescrita, puesto que ```let``` sólo existe dentro del scope donde es creado (en este caso, ```if```).

<br>

## Destructuring

