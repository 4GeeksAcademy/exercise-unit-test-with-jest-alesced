// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

//test fromDollarToYen
test("One yen should be 156.5 dollars", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    const expected = fromDollarToYen * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(547.75); // 3.5 euros son 5.95 dólares.
})

//test fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

//test fromYentoPound
test("One euro should be 0.87 yen", function() {
    const { fromYenToPound } = require('./app.js');

    const expected = fromYenToPound * 0.87;

    expect(fromYenToPound(1)).toBe(0.87);

})

