// Botões
var btnSomar= document.querySelector("#btnsomar");

// Inputs


btnSomar.addEventListener('submit', somar)

function somar(){
    var valor1 =  parseInt(document.getElementById("num1").value);
    var valor2 =  parseInt(document.getElementById("num2").value);

    var resposta = document.getElementById('resposta');
    let r = valor1 + valor2
    resposta.innerHTML = "A soma é " + r

    document.getElementById('resposta').style.textAlign = 'center'
    document.getElementById('resposta').style.fontSize = '24px'
    document.getElementById('resposta').style.marginTop = '30px'
    document.getElementById('resposta').style.fontWeight = 'bold'


}



// Exercicio 2

const vermelho = document.getElementById ('vermelho');
const verde = document.getElementById ('verde');
const azul = document.getElementById ('azul');
const amarelo = document.getElementById ('amarelo');


function vermelhoativo(){
    document.getElementById("corpo-modal2").style.backgroundColor = "red";
    console.log("oi")
}

function verdeativo(){
    document.getElementById("corpo-modal2").style.backgroundColor = "green";
}

function azulativo(){
    document.getElementById("corpo-modal2").style.backgroundColor = "blue";
}

function amareloativo(){
    document.getElementById("corpo-modal2").style.backgroundColor = "yellow";
}

function branco(){
    document.getElementById("corpo-modal2").style.backgroundColor = "white";
}

function vermelhoativo3(){
    document.getElementById("corpo-modal3").style.backgroundColor = "red";
    console.log("oi")
}

function verdeativo3(){
    document.getElementById("corpo-modal3").style.backgroundColor = "green";
}

function azulativo3(){
    document.getElementById("corpo-modal3").style.backgroundColor = "blue";
}

function amareloativo3(){
    document.getElementById("corpo-modal3").style.backgroundColor = "yellow";
}

function branco3(){
    document.getElementById("corpo-modal3").style.backgroundColor = "white";
}

vermelho.addEventListener('click', vermelhoativo);
verde.addEventListener('click', verdeativo);
azul.addEventListener('click', azulativo);
amarelo.addEventListener('click', amareloativo);


// Exercício 3

const hoververmelho = document.getElementById ('hover-vermelho');
const hoververde = document.getElementById ('hover-verde');
const hoverazul = document.getElementById ('hover-azul');
const hoveramarelo = document.getElementById ('hover-amarelo');


hoververmelho.addEventListener('mouseenter', vermelhoativo3);
hoververde.addEventListener('mouseenter', verdeativo3);
hoverazul.addEventListener('mouseenter', azulativo3);
hoveramarelo.addEventListener('mouseenter', amareloativo3);

hoververmelho.addEventListener('mouseleave', branco3);
hoververde.addEventListener('mouseleave', branco3);
hoverazul.addEventListener('mouseleave', branco3);
hoveramarelo.addEventListener('mouseleave', branco3);


// Exercício 4

var cor = document.getElementById('exampleFormControlSelect1');


cor.addEventListener('change', mudarCorzinha )

function mudarCorzinha(){
    document.getElementById("modal4").style.backgroundColor = cor.value;
}




// Exercicio 5

function mostrar(){
    document.getElementById('paragrafo').style.display = 'block'
    document.getElementById('paragrafo').style.fontSize = '14px'
}

function ocultar(){
    document.getElementById('paragrafo').style.display = 'none'
}