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
//let {nombre,apellido,posicion}=jugador2;
//console.log(`El jugador ${nombre} de apellido ${apellido}
//juega en la posiciòn de ${posicion}`);  

//----- Promesas -----

let prom1 = new Promise(function(resolve,reject){
    console.log("promesa");
    reject();
})

prom1.then(function(){console.log("Termina bien");},function(){console.log("Termina mal");})


// ----- Interfaces ----
 interface Xmen {
     nombre:string,
     edad: number,
     real: string
 }

 function correr(personaje:Xmen){
    console.log(`el xmen ${personaje.nombre} està corriendo`);
 }
  let creator:Xmen= {
      nombre: "mateo",
      edad: 45,
      real: "hola"
  }
  correr(creator);

  // ---- clases y constructores ----

  class MyFlaseO {
     nombre:number;
     equipo:string;
     edad:number;
        
    
     constructor(nombre:number,equipo:string,edad:number) {
         this.nombre=nombre;
         this.equipo=equipo;
         this.edad=edad;      
     }
  }