console.log(nombre) // undefined
var nombre = "Andres" 

// Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"

//hoisting en scope de bloque
if (true){
    var saludo = "hola"
    let despedida = "chao"
  }
  
  console.log(saludo);
  console.log(despedida);


  //
  var saludo = undefined

if (true){
  saludo = "hola"
  let despedida = "chao"
}

console.log(saludo) 
// "hola"
console.log(despedida) 
// ReferenceError: despedida is not defined



//hoisting en funciones 
console.log( saludar() )

function saludar() {
  return "Hola"
}

// Hoisting
function saludar() {
    return "Hola"
  }
  
  console.log( saludar() ) // "Hola"

//hoisting de variables  dentro de una funcion  

function scope() {
    console.log(nombre) // undefined
    console.log(edad) // undefined
    console.log(i) // undefined
    
    var nombre = "Andres"
    var edad = 20
    for (var i = 0; i< 6; i++) {
    //...
    }
  }


  //javascript lo interpreta asi 

  function scope() {
    var nombre = undefined
    var edad = undefined
    var i = undefined
    
    console.log(nombre) // undefined
    console.log(edad) // undefined
    console.log(i) // undefined
    
    nombre = "Andres"
    edad = 20
    for ( i = 0; i< 6; i++) {
    
    //
    }
  }

  //Hosting en funciones asignadas a variables

  console.log( saludar() )

var saludar = function saludar() {
  return "hola"
}

var saludar = undefined

console.log( saludar() ) // TypeError: saludar is not a function

saludar = function saludar() {
  return "hola"
}

//La respuesta es un error de tipo porque si asignas una función a una variable declarada con var, y la invocas antes declararla, la variable será de tipo undefined y no de función por el hoisting.


//Hoisting con let y const
//Aunque te haya dicho que el hoisting solo ocurre con declaraciones con var, no es totalmente cierto. El hoisting hará que el intérprete de JavaScript eleve las declaraciones con let y const a la Temporal Dead Zone.

