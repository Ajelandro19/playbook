const superhero=require("./../app/Superhero")
describe("Unit Test for SuperHero", () =>{
    test('Case 1: Get a superhero', () =>{
        const ironman= new superhero("Iron Man","Tony Stark","Robert Downey JR")
        expect(ironman.name).toBe("Iron Man")
        expect(ironman.actor).toBe("Robert Downey JR")
        expect(ironman.heroName).toBe("Tony Stark")
    });
})