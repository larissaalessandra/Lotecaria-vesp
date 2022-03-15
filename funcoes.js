var malaco = []
var Baco  = []

function Tataco(){
    if(Baco.length < 6){
        alert("Digita tudo ai pô")
    }else{
    malaco=[]

    do{
        let sort = Math.ceil(Math.random()*60)        
        if(!malaco.includes(sort))
            malaco.push(sort) 
          
    }while(malaco.length<6)       

    document.getElementById("malaco").innerText = malaco
    tico()
    }
}


function  getNum(valor, pos){
    valor = Number(valor)
   if(valor > 60){
       alert("O valor é maior que 60")
    }else if(valor <=0){
        alert("O valor não pode ser menor que 0")
    }else if(Baco.includes(valor)) {
        alert("O valor ja foi digitado!")

    }
    
    else{
        Baco[pos]=valor
    }
}

function tico(){
    let pato = 0
    Baco.forEach(function (valor, index){
        if(malaco.includes(valor)){
            pato = pato+1

        }
    })
    document.getElementById("teco").innerText = pato
}