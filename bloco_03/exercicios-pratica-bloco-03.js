/*
//01
const calculaNotas = (valor, nota) => {
    let qtdeNotas = 0
    qtdeNotas = parseInt(valor/nota)
    console.log(`${qtdeNotas} nota(s) de R$${nota},00`)
}

const mostraNotas = (valor) => {
    if(valor >= 100) {
        calculaNotas(valor, 100)
        valor = valor%100
    }
    if(valor >= 50) {
        calculaNotas(valor, 50)
        valor = valor%50
    }
    if(valor >= 20) {
        calculaNotas(valor, 20)
        valor = valor%20
    }
    if(valor >= 10) {
        calculaNotas(valor, 10)
        valor = valor%10
    }
    if(valor >= 5) {
        calculaNotas(valor, 5)
        valor = valor%5
    }
    if(valor >= 2) {
        calculaNotas(valor, 2)
        valor = valor%2
    }
    if(valor >= 1) {
        calculaNotas(valor, 1)
        valor = valor%1
    }
}
mostraNotas(576)

//02
const calculaCLT = (salarioCLT) => {
    let beneficio = 700
    let fgts = 1.08
    let ferias = (salarioCLT/3) / 12
    let decimoTerceiro = salarioCLT / 12
    let salario = (salarioCLT * fgts) + beneficio + ferias + decimoTerceiro

    return salario.toFixed(2)
}

let salarioCLT = calculaCLT(2500)
let salarioPJ = 3500

if(salarioCLT > salarioPJ) {
    console.log("Você deve aceitar a proposta CLT")
} else {
    console.log("Você deve aceitar a proposta PJ")
}

//03
const arrayNomes = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
let names = ''

const mostraNomes = (nomes) => {
    for(let i = 0 ; i < nomes.length ; i++) {
        if(i == nomes.length -1) {
            names += `${nomes[i]}.`
        } else {
            names += `${nomes[i]}, `
        }
    }
    
    return names
}

console.log(mostraNomes(arrayNomes))

//04
const tabuada = (value, multiplier) => {
    let result = 0
    for (let i = 1; i <= multiplier ; i++) {
        result = value * i
        console.log(`${value} X ${i} = ${result}`)
    }
}
tabuada(2, 15)


*/
//05
let values = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

const positives = (numbers) => {
    let positiveNumbers = []
    let count = 0
    for (let i = 0; i < numbers.length; i++) {
        
        if(numbers[i] < 0) {
            numbers[i] = [] //checar exercico de descriptografia
        } else {
            count++
        }
    }

    console.log(`Existem ${count} números positivos`)
    console.log(`Os números positivos são: ${numbers}.`)
}
positives(values)


