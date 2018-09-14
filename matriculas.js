var matricula ={
    numero:"000",
    letra:"abc"
}
function descomponer(numero){
    var i =0;
    var numeros = [];
    while (numero>10){
        numeros[i] = numero%10;
        numero = numero/10;
        i++;
    }
    return numeros;
}
function cambia(){
    var letr = []
    for(i=0;i<3;i++)
    {
        letr[i]=matricula.letra[i];
    }
    return letr;
}
function machetazo(matrnum){
    var num;
    if (matrnum<10){
        num = "00";
        matricula.numero = num+matrnum;
        return;
    }  
    if (matrnum<100){
        num = "0";
        console.log(matricula.numero)
        matricula.numero = num+matrnum;
       
    }
    
}
function corre(){
    var matrnum;
    matrnum = parseInt(matricula.numero, 10);
    if(matrnum<999){
        matrnum ++;
        
    }
    else{
        var letr = []
        letr=cambia()
        matricula.numero ="000";
        for(i=0;i<3;i++)
            {
            console.log(letr[i]+ "nro"+i);
            }
    }
    machetazo(matrnum)
    console.log("La matricula siguiente es: "+matricula.numero+" "+matricula.letra)
}

corre();