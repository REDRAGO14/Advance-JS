/* 
explore js asyncronous behavior and learned that js don't have module to support this behavior because it is single threaded instande it delegate asyncronous function to the host enviroment such as browser/node/bun/deno and proceed to excute synchronous instractions till the enviroment finishes excuting the asynchronous ones */

console.log("hi redragon");

function say_hello(){
    console.log("i just want to say hello")
}

setTimeout(() => {
    say_hello()
}, 4000);

for(let i = 0; i < 5; i++){
    console.log(i);  
}
