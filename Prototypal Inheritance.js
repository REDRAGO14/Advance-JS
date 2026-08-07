function Person(name){
    this.name = name;
}

Person.prototype.greet = function()  {console.log(`hi mr/mis ${this.name}`);}

let p1 = new Person("dagim")

p1.greet()


