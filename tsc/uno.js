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
//let {nombre,apellido,posicion}=jugador2;
//console.log(`El jugador ${nombre} de apellido ${apellido}
//juega en la posiciòn de ${posicion}`);  
//----- Promesas -----
var prom1 = new Promise(function (resolve, reject) {
    console.log("promesa");
    reject();
});
prom1.then(function () { console.log("Termina bien"); }, function () { console.log("Termina mal"); });
function correr(personaje) {
    console.log("el xmen " + personaje.nombre + " est\u00E0 corriendo");
}
var creator = {
    nombre: "mateo",
    edad: 45,
    real: "hola"
};
correr(creator);
// ---- clases y constructores ----
var MyFlaseO = /** @class */ (function () {
    function MyFlaseO(nombre, equipo, edad) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.edad = edad;
    }
    return MyFlaseO;
}());
