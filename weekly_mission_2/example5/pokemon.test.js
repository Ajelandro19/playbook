import Pokemon from './pokemon'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu')
  expect(myPokemon.name).toBe('Pikachu'); // Corrige esta prueba
});


///TDD test driven development
//1) Escribir una prueba de lo que quieres modelar
//2) correr la prueba y verla fallar
// 3) Escribir el código que haga pasar la prueba