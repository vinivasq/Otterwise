//imprime cada nome em uma linha no console
// let names = "Maria, Paulo, Moisés, Joel, Ana"

// let result = names.split(', ')

// for (let i = 0; i < result.length; i++) console.log(result[i])

//OU replaceAll também atende esse problema, porem quebrar em elementos diferentes
//em uma array faz mais sentido em questão de usabilidade

// console.log(names.replaceAll(", ", "\n"))

// troque todas as virguals da string abaixo por ponto final.
// "Olá, mundo, meu, nome, é, Juca"

// let string = "Olá, mundo, meu, nome, é, Juca"
// console.log(string.replace(/,/g, "."))

//adicine um elemnto com o seu nome no final do array e mostre o array de forma reversa

let array = [{nome: 'Lucas'}, {nome: 'Guilherme'}]
array.push({nome: 'Vinicius'})
console.log(array.reverse())



