function somar(a, b) {
    return console.log("A soma entre " + a + " e " + b + " é " + (a+b) + ".")
}

function subtrair(a, b) {
    return console.log("A subtração entre " + a + " e " + b + " é " + (a-b) + ".")
}

function multiplicar(a, b) {
    return console.log("A multplicação entre " + a + " e " + b + " é " + (a*b) + ".")
}

function dividir(a, b) {
    return a == 0 || b == 0 ? console.log("Não se pode dividir por zero ou dividir zero") : console.log("A divisão entre " + a + " e " + b + " é " + (a/b) + ".")
}

let numeroA = Math.round(Math.random() * 1000)
let numeroB = Math.round(Math.random() * 1000)

// SOMA
function somando() {
    return somar(numeroA, numeroB)
}

// SUBTRAÇÃO
function subtraindo() {
    return subtrair(numeroA, numeroB)
}

// MULTIPLICAÇAO
function multiplicando() {
    multiplicar(numeroA, numeroB)
}

// DIVISÃO
function dividindo() {
    dividir(numeroA, numeroB)
}