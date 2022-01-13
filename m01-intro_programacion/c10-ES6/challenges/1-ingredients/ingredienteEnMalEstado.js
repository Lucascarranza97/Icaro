const fs = require('fs');
const menuDelDia = JSON.parse(fs.readFileSync('./ingredients.JSON', 'utf-8'));

console.log(menuDelDia);

const encontrarIngrediente = (menu, comida, ingrediente) => {

}

// encontrarIngrediente(menuDelDia, "raviolesConSalsa", "Aceite") ---> ["Huevos", "Aceite", "Peceto"]
// encontrarIngrediente(menuDelDia, "tallarines", "Pollo")       ---> ["Harina", "Pollo", "Aceite"]
// encontrarIngrediente(menuDelDia, "bagnaCauda", "Cebolla")    ---> "El menú está perfecto"