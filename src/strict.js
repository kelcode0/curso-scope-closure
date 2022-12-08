nombre = "Andres"
console.log(nombre) // "Andres"

"use strict";

nombre = "Andres"
console.log(nombre) // ReferenceError: nombre is not defined


function myFunction(){
    return pi = 3.14
}

console.log(myFunction()) // ReferenceError: pi is not defined