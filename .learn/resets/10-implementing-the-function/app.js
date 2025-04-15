// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// funcion de dolar a yen
const fromDollarToYen = valueInDollar => {
    let ValueInYen =  valueInDollar * 156.5
    return ValueInYen
}

// funcion de euro a dollar
const fromEurotoDollar = valueInEuro => {
    let valueInDollar =  valueInEuro * 1.07
    return valueInDollar
}

// funcion de Yen a Euros
const fromYenToPound = ValueInYen => {
    let valueInEuro = ValueInYen * 0.87
    return valueInEuro
}
module.exports = {sum, fromDollarToYen, fromEurotoDollar, fromYenToPound};