//variables

 var a; //declarando
 var b = 'b';//declaramos y asignamos inicializado
 b = 'bb';//reasignacion 
 var a= 'aa'; // redeclaracion

 //global scope
 var fruits = 'Apple';//global
 console.log(fruits);

 function bestFruit(){
    console.log(fruits);
 }

 bestFruit();

 //otra forma de crear varibles globales pero hay que tener cuidado 
 function country(){
    country= 'chile';
    console.groupCollapsed(countreis);
 }

 country();
 console.log(country);