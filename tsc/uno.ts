//console.log("soy el primero"); 
let mensaje:string = "Mateo";
let numero:number =15;
let tyu:boolean=true;
const EDAD =15;
let texto:string=`hola ${mensaje}
edad ${EDAD}`;
//console.log(texto);
function saludar(nombre?:string){
    if (nombre){
        console.log(`hola ${nombre} 
¿como estas?`);
    }
}

//---- funciones flecha ----
//saludar("josè");
let comer = (vo:string) =>(EDAD);
//comer("");
let probar = (a:number,b:string)=>{
    console.log(`probando ${b} en el numero ${a}`);
};
//probar(5,"teclado");

//----Desestructuraciòn---- 
let jugador ={
    nombre: "Radamel",
    apellido: "Falcao",
    posicion:"Delantero"
}
let jugador2 ={
    nombre: "Davinson",
    apellido: "Sanchez",
    posicion:"Defensa"
}
//let {nombre,apellido,posicion}=jugador;
let {nombre,apellido,posicion}=jugador2;
console.log(`El jugador ${nombre} de apellido ${apellido}
juega en la posiciòn de ${posicion}`); 