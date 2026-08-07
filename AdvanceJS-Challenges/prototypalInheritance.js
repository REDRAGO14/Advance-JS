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
dog.makeSound()



function Shape(color){
    this.color = color
}

Shape.prototype.getColor = function(){
    return `color: ${this.color}`
}

function Rectangle(width, height, color){
    Shape.call(this, color)
    this.width = width
    this.height = height
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.getArea = function(){
    return `Area of Rectangle: ${this.width * this.height}`
}

let rec = new Rectangle(4,2, "blue")
console.log(rec.getColor());
console.log(rec.getArea());

