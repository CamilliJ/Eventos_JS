// Botões
var btnSomar= document.querySelector("#btnsomar");

// Inputs


btnSomar.addEventListener('submit', somar)

function somar(){
    var valor1 =  document.getElementById("num1").value;
    var valor2 =  document.getElementById("num2").value;

    console.log(valor1)
    console.log(valor2)
}

//btnSomar.onclick = function(){
    //alert
    // var valor1 =  parseInt(document.getElementById("num1").value);
    // var valor2 =  parseInt(document.getElementById("num2").value);
    // var resposta =  parseInt(document.getElementById("text-respost").value);
    // soma = valor1 + valor2; 
    
    // resposta.innerHTML = soma;

   
    
//}

// Exercicio 2

const vermelho = document.getElementById ('vermelho');
const verde = document.getElementById ('verde');
const azul = document.getElementById ('azul');
const amarelo = document.getElementById ('amarelo');

const vermelho2 = document.getElementById ('hover-vermelho');
const verde2 = document.getElementById ('hover-verde');
const azul2 = document.getElementById ('hover-azul');
const amarelo2 = document.getElementById ('hover-amarelo');


// criar as funções para execução

function vermelhoativo(){
    document.getElementById("corpo-modal").style.backgroundColor = "red";
}

function verdeativo(){
    document.getElementById("corpo-modal").style.backgroundColor = "green";
}

function azulativo(){
    document.getElementById("corpo-modal").style.backgroundColor = "blue";
}

function amareloativo(){
    document.getElementById("corpo-modal").style.backgroundColor = "yellow";
}


vermelho.addEventListener('click', vermelhoativo);
verde.addEventListener('click', verdeativo);
azul.addEventListener('click', azulativo);
amarelo.addEventListener('click', amareloativo);

vermelho2.addEventListener('mouseover', vermelhoativo);
verde2.addEventListener('mouseover', verdeativo);
azul2.addEventListener('mouseover', azulativo);
amarelo2.addEventListener('mouseover', amareloativo);
