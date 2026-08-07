//for defualt export
import multiply from "./ModuleExport.js";

console.log(multiply(4, 2));

//named import
import {add, subtract} from "./ModuleExport.js"

console.log(add(4,2));
console.log(subtract(4,2));
