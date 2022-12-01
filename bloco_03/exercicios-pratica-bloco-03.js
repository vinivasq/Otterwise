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

//05
const positivos = (numbers) => {
    let count = 0
    console.log(`Os números positivos são:`)
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 0) {
            console.log(numbers[i])
            count++
        }
    }
    console.log(`Existem ${count} números positivos`)
}

const negativos = (numbers) => {
    let count = 0
    console.log(`Os números negativos são:`)
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] < 0) {
            console.log(numbers[i])
            count++
        }
    }
    console.log(`Existem ${count} números negativos.`)
}

const pares = (numbers) => {
    let count = 0
    console.log(`Os números pares são:`)
    for (let i = 0; i < numbers.length; i++) {
        if((numbers[i]%2) == 0) {
            console.log(numbers[i])
            count++
        }
    }
    console.log(`Existem ${count} números pares`)
}

const impares = (numbers) => {
    let count = 0
    console.log(`Os números ímpares são:`)
    for (let i = 0; i < numbers.length; i++) {
        if((numbers[i]%2) != 0) {
            console.log(numbers[i])
            count++
        }
    }
    console.log(`Existem ${count} números ímpares`)
}

let values = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]
const contadores = [positivos, negativos, pares, impares]

contadores[0](values)

//06
const multiplica = (values, multiplier) => {
    let result = []
    for (let i = 0; i < values.length; i++) {
        result[i] = values[i] * multiplier        
    }

    return result
}

let values = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
console.log(multiplica(values, 2))

//07
const calculaMedia = (values) => {
    let sum = 0
    for (let i = 0; i < values.length; i++) {
        sum += values[i]
    }
    
    let media = sum/values.length
    
    return media
}

let values = [6, 8, 7, 9]
console.log(calculaMedia(values))

//08
let values = [1,2,3,4,-5,6,7,8,9,10]

const encontraMaiorEMenor = (values) => {
    let maiorValor = 0
    let posMaiorValor = 0
    let menorValor = 0
    let posMenorValor = 0
    
    for (let i = 0; i < values.length; i++) {
        if(values[i] < values[i+1]) {
            maiorValor = values[i+1]
            posMaiorValor = i+1
        }
        else if (values[i] > values[i+1]) {
            menorValor = values[i+1]
            posMenorValor = i+1
        }
    }
    console.log(`O maior valor é ${maiorValor} e está na posição ${posMaiorValor}`)
    console.log(`O menor valor é ${menorValor} e está na posição ${posMenorValor}`)
}

encontraMaiorEMenor(values)

//09
let items = [
    { nome: 'maçã', quantidade: 2, valor: 0.5},
    { nome: 'alface', quantidade: 1, valor: 1.73},
    { nome: 'Água 5L', quantidade: 2, valor: 5.99},
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
]

const valorTotal = (items) => {
    let totalValue = 0

    for(let i = 0; i < items.length; i++) {
        totalValue += items[i].quantidade * items[i].valor
    }

    return totalValue
}

console.log(`O valor total dos itens é: R$ ${valorTotal(items)}`)

//10
const converteSenioridade = (array, atributo) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i][atributo] == 'senior'){
            array[i][atributo] = 4
        }
        else if (array[i][atributo] == 'pleno') {
            array[i][atributo] = 3
        }
        else if (array[i][atributo] == 'junior') {
            array[i][atributo] = 2
        }
        else if (array[i][atributo] == 'estagio') {
            array[i][atributo] = 1
        }
    }
}

const reverteSenioridade = (array, atributo) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i][atributo] == 4 ){
            array[i][atributo] = 'senior'
        }
        else if (array[i][atributo] == 3 ) {
            array[i][atributo] = 'pleno'
        }
        else if (array[i][atributo] == 2 ) {
            array[i][atributo] = 'junior'
        }
        else if (array[i][atributo] == 1 ) {
            array[i][atributo] = 'estagio'
        }
    }
}

const ordena = (array, ordem, atributo) => {
    if(atributo == 'senioridade') {converteSenioridade(array, atributo)}
    
    for (let index = 0; index < array.length; index++) {
        let aux
        if (ordem == "decrescente") {
            for (let i = 0; i < array.length - 1; i++) {
                if(array[i][atributo] < array[i+1][atributo]) {
                    aux = array[i]
                    array[i] = array[i+1]
                    array[i+1] = aux
                }
            }
        }
        else if (ordem == "crescente") {
            for (let i = 0; i < array.length - 1 ; i++) {
                if(array[i][atributo] > array[i+1][atributo]){
                    aux = array[i]
                    array[i] = array[i+1]
                    array[i+1] = aux
                }
            }  
        }
    }
    
    if(atributo == 'senioridade') {reverteSenioridade(array, atributo)}

    console.log(array)
}

let objects = [
    { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
    { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
    { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
    { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
    { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
    { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
    { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
]

ordena(objects, "crescente", 'senioridade')


*/


