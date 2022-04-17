    console.log("POO")
     

//Objeto JS

const woopa={
    name:"Woopa",
    mission: "NodeJS",
    age: "12",
    color:"Pink"
}


//Crear una clase

class Ajolonauta{
    constructor(name, mission, age,color){
        this.name= name
        this.mission= mission
        this.age=age
        this.color=color

    }
    //Métodos
    sayHello(){
        return `hey hello ${this.name}`
    }
}

console.log(Ajolonauta)

const Ajolowoopa = new Ajolonauta("Woopa","NodeJS",18,"Pink")

const Wooper = new Ajolonauta("Wooper","NodeJS",18,"Pink")


console.log(Ajolowoopa)
console.log(Ajolowoopa.sayHello())
console.log(Wooper.name)
