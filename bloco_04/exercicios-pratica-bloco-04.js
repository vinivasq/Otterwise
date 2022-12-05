/*
//01
let names = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
console.log(names.join(', '))

//02

let values = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]
let value = 9

console.log(values.some(element => element == value) ? "O Valor foi encontrado no array" : "O valor não existe no array")

//03
let values = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

let positives = values.filter(element => element > 0)
let negatives = values.filter(element => element < 0)
let pairs = values.filter(element => element % 2 == 0)
let odds = values.filter(element => element % 2 != 0)

console.log(positives)
console.log(negatives)
console.log(pairs)
console.log(odds)

//04

let values = [6, 8, 7]
let media = values.reduce((acc, element) => acc + element)/values.length
console.log(media)

//05
let values = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]

let valuesPairs = values.map(element => {
    if(element % 2 == 0) {
        return element = "X"
    }
    return element
})

console.log(valuesPairs);

//06
let values = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
let multiplier = 2
let newValues = values.map(element => element*multiplier)
console.log(newValues);

//07
let students = [
    {
        nome: 'Vinicius' ,
        notas: [10, 7, 7, 9, 8]
    },
    {
        nome: 'Lucas' ,
        notas: [5, 7, 6, 9, 8]
    },
    {
        nome: 'Guilherme' ,
        notas: [10, 8, 8, 6, 7]
    },
    {
        nome: 'Tiago' ,
        notas: [0, 0, 0, 0, 0]
    },
    {
        nome: 'Gabriel' ,
        notas: [0, 0, 0, 0, 0]
    },
]
let zeroedStudents = students.filter(student => student.notas.every(nota => nota == 0)).map(student => student.nome)

console.log(zeroedStudents);

//08 
let names = ["Juliana", "Pedro", "Regina", "João", "Patrícia", "Gabriel", "Carlos", "Carla"]

let nameToFind = "Carla"

let findName = names.some(name => name == nameToFind) ? `O nome ${nameToFind} existe no Array` : `O nome ${nameToFind} não existe no array`

console.log(findName)

//09
let items = [ 
    { nome: 'maçã', quantidade: 2, valor: 0.5},
    { nome: 'alface', quantidade: 1, valor: 1.73},
    { nome: 'Água 5L', quantidade: 2, valor: 5.99},
    { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
]

let valorTotal = items.reduce((acc, item) => {
    acc += item.valor
    return acc
}, valor = 0).toFixed(2)

console.log(`R$: ${valorTotal}`)

//10
let valuesOne = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
let valuesTwo = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255 ]

let equals = valuesOne.filter(value => valuesTwo.find(element => element == value))
console.log(equals)

//11
let encodedStrings = ['  h3ll0 w0rld', '  w3b d3v3l0p3r  ', '0tterw1s3', 'j4v4scr1pt ']

let decodedStrings = encodedStrings.map(string => {

    string = string.replace(/ /g, '')
    string = string.replace(/1/g, 'i') 
    string = string.replace(/3/g, 'e') 
    string = string.replace(/4/g, 'a') 
    string = string.replace(/0/g, 'o')
    
    return string

})

console.log(decodedStrings)

*/
//12
let user = {
    nome: 'Analu dos santos baptista', 
    cpf: '14776213931', 
    telefone: '8328008258'
}