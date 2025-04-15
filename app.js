// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// funcion de dolar a yen
const fromDollarToYen = valueInDollar => {
    let ValueInYen =  valueInDollar * 156.5;
    return ValueInYen;
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// funcion de Yen a Euros
const fromYenToPound = ValueInYen => {
    let valueInEuro = ValueInYen * 0.87;
    return valueInEuro;
}
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};