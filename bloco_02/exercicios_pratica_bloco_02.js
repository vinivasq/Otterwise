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


*/














