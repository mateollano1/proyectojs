//console.log("soy el primero"); 
var mensaje = "Mateo";
var numero = 15;
var tyu = true;
var EDAD = 15;
var texto = "hola " + mensaje + "\nedad " + EDAD;
//console.log(texto);
function saludar(nombre) {
    if (nombre) {
        console.log("hola " + nombre + " \n\u00BFcomo estas?");
    }
}
//---- funciones flecha ----
//saludar("josè");
var comer = function (vo) { return (EDAD); };
//comer("");
var probar = function (a, b) {
    console.log("probando " + b + " en el numero " + a);
};
//probar(5,"teclado");
//----Desestructuraciòn---- 
var jugador = {
    nombre: "Radamel",
    apellido: "Falcao",
    posicion: "Delantero"
};
var jugador2 = {
    nombre: "Davinson",
    apellido: "Sanchez",
    posicion: "Defensa"
};
//let {nombre,apellido,posicion}=jugador;
var nombre = jugador2.nombre, apellido = jugador2.apellido, posicion = jugador2.posicion;
console.log("El jugador " + nombre + " de apellido " + apellido + "\njuega en la posici\u00F2n de " + posicion);
