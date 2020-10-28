console.log("Hola de nuevo");

//Variables: var y let

var mes= "Octubre";
mes=10;

console.log(typeof(mes));

var hola;
hola=null;
console.log(hola);

console.dir(document);
document.title="Prueba";

function suma(a,b){
    document.getElementById('resultado').innerHTML = a+b;

}

var imprimir= function (dato){
    document.getElementById("valor").innerHTML = dato;
}

var aumentar = function(){
    localStorage.cuenta++;
    imprimir(localStorage.cuenta);
}


var reiniciar = function (){
    localStorage.cuenta = 0;
    imprimir(localStorage.cuenta);
}

var eliminar = function (){
    localStorage.removeItem("cuenta");
    imprimir(localStorage.cuenta);
}



if(typeof(Object) != "undefined"){
    if(localStorage.cuenta){


    }else{
        localStorage.cuenta = 0;
    }
}


//VALORES DE VERDADERO Y FALSO

// VALOR FALSO: UNDEFINED, NULL 0, ""
//VALOR VERDADERO: VALOR DIFERENTE A LOS FALSO

let mes;
mes=10;

if(mes){
    console.log("es verdadero");
}else{
    console.log("es falso");
}

//OPERADORES DE IGUAL

//DOBLE IGUAL - DEVUELVE VERDADERO SI LOS DOS OPERANDOS SON IGUALES

//TRIPLE IGUAL - DEVUELVE VERDADERO SI LOS OPERANDOS SON IGUALES AL MISMO TIEMPO
// ? es un operador ternario y es como un IF
mes != "10" ? console.log("si") : console.log("no");

//TEMPLATE DE STRING

let nombre = "Juan";
let apellido = "Lopez";
const nacimiento = 1990;
function calculaEdad(nac){
    return 2020 - nac;
}
console.log(nombre + "" + apellido + ", su edad: " + calculaEdad(nacimiento));

console.log(`${nombre} ${apellido}, su edad: ${calculaEdad(nacimiento)}`);


//FUNCIONES DE FECHA // el map recorre todo el arreglo

const anios = [2000,2005,2010,2020];
var edad = anios.map(function(el){
    return 2020 - el;
});
console.log(edad);

let edadNueva = anios.map(el =>)


const cuadrado3  = (num) => num * num;
console.log(uadrado3(2));

const frutas =[
    {
        nombre: "Manzana",
        cantidad : 2
    },
    {
        nombre: "Fresa",
        cantidad: 5
    },
    {
        nombre: "Mora azul",
        cantidad: 8
    },
    {
        nombre: "Naranja",
        cantidad: 12
    }
];

const menores10= frutas.filter(fruta=> fruta.cantidad < 10 && fruta.nombre.)