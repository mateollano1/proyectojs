var persona = {
    nombre: "Mateo",
    apellido: "Llano",
    edad: 21,
    correo: "mateo.llano1@gmail.com",
    cedula: "1045025062"
};
var i = 10;
var j = 20;


function saludar(nombre) {
    console.log("hola " + nombre);
}

function suman(i) {
    var salida = i + 80;
    return salida;
}

function multiplica(i, j) {
    var salida = j * i;
    return salida;
}

function crear(j) {
    for (a = 0; a < j; a++) {
        persona.edad = persona.edad + 1;
        console.log(persona.edad);
    }
}

function matematica(i, j) {
    var sumana = suman(i);
    var multi = multiplica(i, j);
    crear(i);
    var ret = multi - sumana;
    return ret;
}
saludar(persona.nombre);
console.log(matematica(i, j))