function unir(...y) {
    console.log(y);
}
unir(3, 4, "hola");



function desunir(x, y, z) {
    console.log(x + y + z);
}
desunir(...[1, 2, 3]); // 6