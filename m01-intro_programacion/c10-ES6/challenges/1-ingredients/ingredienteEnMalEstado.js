const fs = require('fs');
const menuDelDia = JSON.parse(fs.readFileSync('./ingredients.JSON', 'utf-8'));

console.log(menuDelDia);


function ingredienteEnMalEstado (menu, comida, ingrediente) {
    let ingredientesEnMalEstado = [];

    if (menu.hasOwnProperty(comida)) {
        for (let i = 0; i < menu[comida].length; i++) {
            if(menu[comida][i] === ingrediente) {
                ingredientesEnMalEstado.push(menu[comida][i - 1], menu[comida][i], menu[comida][i + 1])
            }
        }
        if (ingredientesEnMalEstado.length > 0) {
            return ingredientesEnMalEstado;
        } else {
            return "El menú está perfecto"
        }
    } else {
        return "Lo siento, no tenemos eso en el menú"
    }
}
