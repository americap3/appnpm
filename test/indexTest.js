const sumar = require('../index');
const assert = require('assert');


describe("Probar la suma de los números", ( )=> {
    // Afirmar que 5 + 5 = 10
    it("Cinco más cinco es 10", () => {
        assert.equal(10, sumar(5, 5));
    });

    // Afirmamos que cinco más 5 no es 55
    it("Cinco más cinco no es 55", () => {
        assert.notEqual(55, sumar(5, 5));
    });

});