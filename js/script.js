const primeiroNumero = document.getElementById('primeiroNumero');
const segundoNumero = document.getElementById('segundoNumero');
const resultado = document.getElementById('resultado');

document.getElementById("btnSoma").onclick = function (){
    soma(); 
}
document.getElementById("btnSubtracao").onclick = function (){
    subtracao(); 
}
document.getElementById("btnMultiplicacao").onclick = function (){
    multiplicacao(); 
}
document.getElementById("btnDivisao").onclick = function (){
    divisao(); 
}
primeiroNumero.onchange = function () {
    numeroNulo();
};
segundoNumero.onchange = function () {
    numeroNulo();
};

function numeroNulo() {
    const inputs = [primeiroNumero, segundoNumero];
    for (let index = 0; index < inputs.length; index++) {
        const input = inputs[index];
        if (input.value == "") {
            input.style.borderColor = "red";
            enableDisableButton(true);
        }
        else {
            input.style.removeProperty('border');
            enableDisableButton(false);
        }
    }
}

function enableDisableButton(value) {
    const button = ["btnSoma", "btnSubtracao", "btnMultiplicacao", "btnDivisao"];
    for (let index = 0; index < button.length; index++) {
        const element = button[index];
        document.getElementById(element).disabled = value;
    }
}
function soma() {
    const resultadoSoma = parseInt(primeiroNumero.value) + parseInt(segundoNumero.value);
    resultado.innerHTML = `O resultado de ${primeiroNumero.value} + ${segundoNumero.value} = ${resultadoSoma}`;
}
function subtracao() {
    const resultadoSubtracao = parseInt(primeiroNumero.value) - parseInt(segundoNumero.value);
    resultado.innerHTML = `O resultado de ${primeiroNumero.value} - ${segundoNumero.value} = ${resultadoSubtracao}`;
}
function multiplicacao() {
    const resultadoMultiplicacao = parseInt(primeiroNumero.value) * parseInt(segundoNumero.value);
    resultado.innerHTML = `O resultado de ${primeiroNumero.value} * ${segundoNumero.value} = ${resultadoMultiplicacao}`;
}
function divisao() {
    if (parseInt(segundoNumero.value) === 0) {
        resultado.innerHTML = "Impossivel dividir por zero!!!";
        return;
    }
    const resultadoDivisao = parseInt(primeiroNumero.value) / parseInt(segundoNumero.value);
    resultado.innerHTML = `O resultado de ${primeiroNumero.value} / ${segundoNumero.value} = ${resultadoDivisao}`;
}

