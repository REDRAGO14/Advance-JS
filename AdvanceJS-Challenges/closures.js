function createCounter(){
    let counter = 2
    return function(){
        counter++
        return counter
    }
}

let increment = createCounter()
console.log(increment());


