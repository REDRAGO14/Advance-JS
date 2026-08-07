function Animal(){
}

Animal.prototype.makeSound = function (){
        console.log("make sound");
    }

function Dog(){}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.bark = function (){
        console.log("wof wof");
    }

let dog = new Dog()
console.log(dog.makeSound())

