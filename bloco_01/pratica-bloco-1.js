/*
//01
console.log("Meu nome é Vinícius Vasques e sou graduando em Analise e Desenvolvimento de Sistemas.")

//02
const otterwise = "Otter" + "wise"
console.log(otterwise)

//03
const name = "Vinícius"
const lastName = "Vasques"
console.log(name + " " + lastName)

//04
console.log(42*-3.14)

//05
const valor1 = 8
const valor2 = -2
const resultado = valor1 + valor2
console.log(resultado) 

//06
const salarioFixo = 3000
const totalVendido = 350000
const taxaComissao = 0.05
const comissao = totalVendido * taxaComissao
console.log(salarioFixo + comissao)

//07
let valor1 = 3
let valor2 = 12
let container

console.log ("Valor 1: " + valor1)
console.log ("Valor 2: " + valor2)

container = valor1
valor1 = valor2
valor2 = container

console.log("Valor 1: " + valor1)
console.log("Valor 2: " + valor2)

//08
const distanciaPercorrida = 240
const velocidadeMedia = 80
const consumoCombustivel = 20
const consumoMedio = distanciaPercorrida / consumoCombustivel
const tempoDeViagem = distanciaPercorrida / velocidadeMedia
console.log("Média de consumo: " + consumoMedio + " km/l")
console.log("Tempo de viagem: " + tempoDeViagem + " horas")

//09
let name = "Vinicius"
let age = 21

if (age >= 18) {
    console.log(name + ' é maior de idade')
}
else {
    console.log(name + ' é menor de idade')
}

//10
let numberOne = 4
let numberTwo = 4

if (numberOne > numberTwo) {
    console.log(numberOne + ' é maior do que ' + numberTwo)
}
else if (numberOne < numberTwo) {
    console.log(numberTwo + ' é maior do que ' + numberOne)
}
else {
    console.log(numberTwo + ' é igual a ' + numberOne)
}

//11
let lado1 = 2
let lado2 = 1
let lado3 = 5

if (lado1 == lado2 && lado2 == lado3) {
    console.log('Triangulo equilátero')
}
else if (lado1 == lado2 && lado1 != lado3 ) {
    console.log('Triangulo isóceles')
}
else if (lado1 != lado2 && lado1 == lado3) {
    console.log('Triangulo isóceles')
}
else if (lado1 != lado2 && lado2 == lado3) {
    console.log('Triangulo isóceles')
}
else {
    console.log('Triangulo escaleno')
}

//12
let fullName = 'Francisco da Silva'
let servidor = true
let professor = false   

if (servidor && professor) {
    console.log('Parabéns ' + fullName + '! você tem acesso a nossa linha de crédito especial')
}
else if (servidor) {
    console.log(fullName + ', você tem acesso a nossa linha de crédito para servidores')
}
else{
    console.log(fullName + ' infelizmente você não tem uma linha de crédito disponível')
}

//13
let number = 3

if ((number % 2) > 0) {
    console.log('Ímpar')
}
else {
    console.log('Par')
}

//14
let numberOne = 30
let numberTwo = 12
let numberThree = 7

if(numberOne < numberTwo && numberOne < numberThree) {
    console.log(numberOne + " É o menor número")
}
else if(numberTwo < numberOne && numberTwo < numberThree) {
    console.log(numberTwo + ' É o menor número')
}
else if(numberThree < numberOne && numberThree < numberTwo) {
    console.log(numberThree + ' É o menor número')
}
else {
    console.log ('Todos os números são iguais')
}

//15
let numberOne = 3
let numberTwo = 2
let numberThree = 1

if(numberOne <= numberTwo && numberOne <= numberThree) {
    if(numberTwo <= numberThree){
        console.log(numberOne, numberTwo, numberThree)
    }
    else {
        console.log(numberOne, numberThree, numberTwo)
    }
}

else if (numberTwo <= numberOne && numberTwo <= numberThree) {
    if(numberOne <= numberThree) {
        console.log(numberTwo, numberOne, numberThree)
    }
    else{
        console.log(numberTwo, numberThree, numberOne)
    }
}

else if (numberThree <= numberOne && numberThree <= numberTwo) {
    if(numberOne <= numberTwo) {
        console.log(numberThree, numberOne, numberTwo)
    }
    else {
        console.log(numberThree, numberTwo, numberOne)
    }
}

//16
let numberOne = 4
let numberTwo = 2

if (numberOne >= numberTwo && (numberOne % numberTwo) == 0) {
    console.log('Sao multiplos')
}
else if (numberTwo >= numberOne && (numberTwo % numberOne) == 0) {
    console.log('Sao multiplos')
}
else {
    console.log('Nao sao multiplos')
}

//17
let inicio = 22
let fim = 23
let duracao

if (inicio > fim) {
    duracao = 24 - (inicio - fim)
    console.log('O jogo durou: ' + duracao + ' horas')
}
else if (inicio < fim) {
    duracao = fim - inicio
    console.log('O jogo durou: ' + duracao + ' horas')
}

else {
    console.log ('O jogo durou 24 horas')
}

//18
let valueOne = 1
let valueTwo = 2
let valueThree = 3

console.log (valueOne, valueTwo, valueThree)

let aux1
aux1 = valueTwo

valueTwo = valueThree
valueThree = valueOne
valueOne = aux1

console.log (valueOne, valueTwo, valueThree)


*/

//19



