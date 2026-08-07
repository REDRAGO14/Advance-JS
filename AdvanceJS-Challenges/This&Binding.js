/* const Person = {
    name: "dagim",
    introduce: function(){return console.log(`hello ${this.name}`);
    }
}

Person.introduce()


const greetFunction = Person.introduce

greetFunction() //return undefined as it lost the context


const bindFunction = Person.introduce.bind({name: "redragon"})
bindFunction()
const user = {
  name: "Dagim",
  sayHi: function() {
    setTimeout(function() {
      console.log(`Hi, I am ${this.name}`);
    }.bind(this), 1000);
  }
};

user.sayHi(); */


function introduce(){
    return `hi my name is ${this.name}`
}

const p1 = {name: "dagim"}
const p2 = {name: "redragon"}

introduce.call(p1)
introduce.call(p2)


function sum(a,b){
    return console.log(`Sum:${ a+b * this.multiplyer}`);
}
let context1 = {multiplyer: 2}
let context2 = {multiplyer: 5}
sum.apply(context1,[4,2])
sum.apply(context2,[4,2])