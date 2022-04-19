const Ajolonauta = require('./../app/Ajolonauta')
describe("Esto es una suite de pruebas", () =>{
    test('Caso de prueba 1: creacion de objeto', () =>{
        const woopa= new Ajolonauta("Woopa") 
        expect(woopa.name).toBe("Woopa");
    });
})