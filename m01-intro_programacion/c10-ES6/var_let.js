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