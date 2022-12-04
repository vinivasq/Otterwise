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

*/

let values = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]

let valuesPairs = values.filter(value => value%2 == 0)

console.log(valuesPairs);


