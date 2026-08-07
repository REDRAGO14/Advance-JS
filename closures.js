function outer(){
    let counter = 4
    return function(){
        counter++
        return counter
    }

}

let incrementer = outer()
console.log(incrementer());
