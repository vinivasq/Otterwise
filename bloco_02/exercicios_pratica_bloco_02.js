/*
//01
let values = [] 

for(let i = 1 ; i <= 25 ; i++) {
    values[i] = i
    console.log(values[i])
}

//02
let values = []

for(i = 1 ; i <= 200 ; i ++) {
    values[i] = i
}

for (i = 10 ; i <= values.length ; i += 10) {
    console.log(values[i])

}

//03
let values = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
let nomes = ''

for(i=0 ; i < values.length ; i++) {
    if (i == values.length - 1) {
        nomes += values[i]
    }
    else {
        nomes += values[i] + ', '
    }
}

console.log(nomes)

//04
let number = 9

for (let i = 1; i <= 10; i++) {
    console.log(number + ' x ' + i + ' = ' + number * i)
}

//05
let values = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]
for (let i = 0; i < values.length; i++) {
    if(values[i] > 0) {
        console.log(values[i])
    }
}

//06

let values = [-5,0,-3,-4,12]
let pares = 0
let impares = 0
let positivos = 0
let negativos = 0

for (let i = 0; i < values.length; i++) {

    if(values[i] > 0) {
        positivos ++
    }
    else if (values[i] < 0) {
        negativos ++
    }
    
    if(values[i]%2 == 0) {
        pares++
    }
    else{
        impares++
    }
    
}

console.log(pares + ' valor(es) par(s)')
console.log(impares + ' valor(es) impar(es)')
console.log(positivos + ' valor(es) positivo(s)')
console.log(negativos + ' valor(es) negativo(s)')

//07 não entendi

//08
let values = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]

for (let i = 0; i < values.length; i++) {
    values[i] *= 10
}

console.log(values)

//09
let number = 10
let result = 0

for (let i = 0; i <= number; i++) {
    result += i
}

console.log(result)

//10
let notes = [6, 8, 7]
let sum = 0

for(i = 0 ; i < notes.length ; i++) {
    sum += notes[i]
}

console.log(sum/notes.length)

//11
let namesArray = ['Juliana', 'Pedro', 'Regina', 'João', 'Patrícia', 'Gabriel', 'Carlos', 'Carla']

let name = 'Carla'
let found = false

for (let i = 0; i < namesArray.length; i++) {
    if(namesArray[i] == name) {
        found = true
    }
}

if(found) {
    console.log('O nome ' + name + ' existe no Array')
}
else {
    console.log(name + ' Não existe no Array')
}

//12
let values = [1,2,1,4,-5,6,7,8,-20,10]
let smallerValue = 0
let position = 0

for (let i = 0; i < values.length; i++) {
    if (values[i] > values[i+1] ) {
        smallerValue = values[i+1]
        position = (i+1)
    }    
}

console.log('Menor valor: ' + smallerValue)
console.log('Posição: ' + position)

// liste os projetos ativos de um usuario
let user = {
    name : "Vinicius",
    projects: [
        {
            name: "projeto 1",
            start: "02/09/2022",
            active: true
        },
        {
            name: "projeto 2",
            start: "22/09/2022",
            active: false
        },
        {
            name: "projeto 3",
            start: "05/10/2022",
            active: true
        },
        {
            name: "projeto 4",
            start: "12/10/2022",
            active: false
        },
        {
            name: "projeto 5",
            start: "09/11/2022",
            active: true
        },
    ],
}

for (let i=0 ; i < user.projects.length ; i++) {
    if(user.projects[i].active){
        console.log(user.projects[i].name)
    } 
    
}

//13
let object = {
    name: "juca",
    projects: [
        {
            name: "Projeto 1",
            start: "01/02/2021"
        },
        {
            name: "Projeto 2",
            start: "03/03/2021"
        }
    ]
}

console.log(object.name)
console.log(object.projects[1])
console.log(object.projects[0].name)

//14
let myUser = {
    name: "Vinicius Vasques",
    age: 21,
    email: "vinivasq@hotmail.com",
}

console.log(myUser)

//15
let estudantes = [
    {
        nome: "Marcos",
        notas: [10, 7, 2]
    },
    {
        nome: "Michele",
        notas: [10, 10, 10]
    },
    {
        nome: "Pedro",
        notas: [3, 10, 9]
    },
    {
        nome: "Andressa",
        notas: [6, 6, 8]
    },
    {
        nome: "Cristiana",
        notas: [7, 9, 2]
    }
]

function calculaMedia(notas) {
    let sum = 0
    
    for (let i = 0; i < notas.length; i++) {
        sum += notas[i]
    }

    let media = sum/notas.length

    return media.toFixed(2)
}

for(let i = 0 ; i < estudantes.length ; i++) {
    if(calculaMedia(estudantes[i].notas) >= 7) {
        console.log(estudantes[i].nome)
    }
}

//16
let user = {
    name: "Marília",
    age: 26,
    job: "Dev"
}

console.log("O valor da propriedade name é " + user.name)
console.log("O valor da propriedade age é " + user.age)
console.log("O valor da propriedade job é " + user.job)

//17
let users = [
    { name: 'Marília', age: 26, job: 'Dev' },
    { name: 'Juca', age: 21, job: 'RH' },
    { name: 'Flávia', age: 30, job: 'Financeiro' },
    { name: 'Sérgio', age: 24, job: 'Dev' },
]

let isDev = ""

for (let i = 0; i < users.length; i++) {
    if(users[i].job == "Dev") {
        isDev += users[i].name + " é dev. "
    }
    else {
        isDev += users[i].name + " não é dev. "
    } 
}

console.log(isDev)

//18
let items = [
    { nome: 'maçã', quantidade: 2, valor: 0.5},
    { nome: 'alface', quantidade: 1, valor: 1.73},
    { nome: 'Água 5L', quantidade: 2, valor: 5.99},
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
]

let sum = 0

for (let i = 0; i < items.length; i++) {
    sum += items[i].quantidade * items[i].valor
    sum.toFixed(2)
}

console.log("R$: " + sum)


*/

// for(let i = 0 ; i < encodedStrings.length ; i++) {
//     encodedString = encodedStrings[i]
//     let decodedArray =[]

//     for (let i = 0; i < encodedString.length; i++) {
//         console.log(encodedString)
//     }
// }

//19
function decodeString (encodedString) {
    let encodedArray = []
    let decodedString = []

    for (let i = 0; i < encodedString.length; i++) {
        encodedArray[i] = Array(encodedString[i])    
        if(encodedArray[i] == '1') {
            encodedArray[i] = 'i'
        }
        else if (encodedArray[i] == '3') {
            encodedArray[i] = 'e'
        }
        else if (encodedArray[i] == '4') {
            encodedArray[i] = 'a'
        }
        else if (encodedArray[i] == '5') {
            encodedArray[i] = 's'
        }
        else if (encodedArray[i] == '0') {
            encodedArray[i] = 'o'
        }
        else if (encodedArray[i] == ' ') {
            encodedArray[i] = ''
        }
        decodedString += encodedArray[i]
    }

    return decodedString
}

let encodedStrings = ['  h3ll0 w0rld', '  w3b d3v3l0p3r  ', '0tterw1s3', 'j4v4scr1pt ']
let decodedStrings = []

for (let i = 0; i < encodedStrings.length; i++) {
    decodedStrings[i] = decodeString(encodedStrings[i])
}

console.log(decodedStrings)


