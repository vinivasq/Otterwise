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
    acc += item.valor * item.quantidade
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

//12
let user = {
    nome: 'analu dos santos baptista', 
    cpf: '14776213931', 
    telefone: '8328008258'
}

const formataNome = user.nome[0].toUpperCase() + user.nome.slice(1, 10) + user.nome[10].toUpperCase() + user.nome.slice(11, 17) + user.nome[17].toUpperCase() + user.nome.slice(18, user.nome.length)


const formataCPF = user.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, (cpf, value1, value2, value3, value4) => {
    return `${value1}.${value2}.${value3}-${value4}`
})

const formataTelefone = user.telefone.replace(/(\d{2})(\d{4})(\d{4})/, (telefone, value1, value2, value3) => {
    return `(${value1}) ${value2}-${value3}`
})

console.log(formataNome)
console.log(formataCPF)
console.log(formataTelefone)

//13
let funcionarios = [
    { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
    { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
    { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
    { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
    { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
    { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
    { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
]

let funcionariosOrdenado = (ordem, filtro) => {
    let arrayOrdenada = []
    
    if (filtro == 'senioridade') {
        funcionarios.forEach((funcionario) => {
           funcionario.senioridade = funcionario.senioridade.replace(/senior/g, 4)
           funcionario.senioridade = funcionario.senioridade.replace(/pleno/g, 3)
           funcionario.senioridade = funcionario.senioridade.replace(/junior/g, 2)
           funcionario.senioridade = funcionario.senioridade.replace(/estagio/g, 1)
        })
    }
    
    arrayOrdenada = funcionarios.sort((a, b) => a[filtro] - b[filtro])
    
    if(ordem == 'crescente'){
        arrayOrdenada
    } else if(ordem == 'decrescente') {
        arrayOrdenada.reverse()
    }

    if(filtro == 'senioridade'){
        funcionarios.forEach((funcionario) => { 
            console.log('ta aqui ');
            funcionario.senioridade = funcionario.senioridade.replace(/4/g, 'senior')
            funcionario.senioridade = funcionario.senioridade.replace(/3/g, 'pleno')
            funcionario.senioridade = funcionario.senioridade.replace(/2/g, 'junior')
            funcionario.senioridade = funcionario.senioridade.replace(/1/g, 'estagio')
        })
    }

    return arrayOrdenada
} 

console.log(funcionariosOrdenado('crescente', 'senioridade'))

//14
const employees = [
    { id: 1, name: 'Carlos', age: 35, active: false, birth_date: '13/05/1986',
    contract_date: '20/07/2015', job: 'front-end', type: 'clt' },
    { id: 2, name: 'Matheus', age: 30, active: true, birth_date: '03/07/1991',
    contract_date: '01/03/2020', job: 'front-end', type: 'clt'},
    { id: 3, name: 'Pamela', age: 23, active: true, birth_date: '20/09/1998',
    contract_date: '19/06/2021', job: 'back-end', type: 'pj'},
    { id: 4, name: 'Fabiana', age: 32, active: false, birth_date: '08/12/1989',
    contract_date: '13/04/2018', job: 'front-end', type: 'pj'},
    { id: 5, name: 'João', age: 37, active: true, birth_date: '08/12/1984', contract_date: '03/08/2014', job: 'front-end', type: 'clt'},
    { id: 6, name: 'Miguel', age: 29, active: true, birth_date: '08/12/1992',
    contract_date: '26/02/2015', job: 'fullstack', type: 'clt'},
    { id: 7, name: 'Francine', age: 27, active: false, birth_date: '27/01/1994',
    contract_date: '23/05/2019', job: 'designer', type: 'pj'},
    { id: 8, name: 'Matheus', age: 31, active: true, birth_date: '10/11/1990',
    contract_date: '18/09/2017', job: 'marketing', type: 'clt'},
    { id: 9, name: 'Gabriel', age: 28, active: true, birth_date: '08/12/1993',
    contract_date: '14/11/2020', job: 'financeiro', type: 'clt'}
]

const filterId = (id) => console.log(employees.find(employee => employee.id == id))
// filterId(8)

const filterActives = () => employees.filter(employee => employee.active)

const filterCLT = () => console.log(employees.filter(employee => employee.type == 'clt'));

const addSalaryBase = () => employees.forEach(employee => {
    employee.salary_base = '3000'
    console.log(employee)
})

const filterTypes = () => {
    let employeesPJ = employees.filter(employee => employee.type == 'pj')
    let employeesCLT = employees.filter(employee => employee.type == 'clt')

    console.log(employeesPJ)
    console.log(employeesCLT)
}

const orderActivesByAge = (order) => {
    let actives = filterActives()
    let ordenedActives = actives.sort((a, b) => a.age - b.age)

    if(order == 'crescente') {
        console.log(ordenedActives); 
    } else if (order == 'decrescente') {
        console.log(ordenedActives.reverse()); 
    }
}
// orderActivesByAge('decrescente')

//15

const exemplares = [
    { cod: "8568014003",
    nome: "mais esperto que o diabo",
    autor: "Napoleon Hill",
    valor: 24.6,
    quantidadeVendido: 17675,},
    {cod: "8550801488",
    nome: "pai rico, pai pobre",
    autor: "Robert T. Kiyosaki",
    valor: 42.71,
    quantidadeVendido: 8992,},
    { cod: "8547001085",
    nome: "antifragil",
    autor: "Nassim Nicholas Taleb",
    valor: 70.99,
    quantidadeVendido: 1700,},
    {cod: "8595080801",
    nome: "o investidor inteligente",
    autor: "Benjamin Graham",
    valor: 36.3,
    quantidadeVendido: 8445, },
    { cod: "8539004119",
    nome: "o poder do hábito",
    autor: "Charles Duhigg",
    valor: 48.9,
    quantidadeVendido: 14581, },
    { cod: "8543102146",
    nome: "essencialismo",
    autor: "Greg Mckeown",
    valor: 36.43,
    quantidadeVendido: 9730, },
    { cod: "9788539003839",
    nome: "rápido e devagar",
    autor: "Daniel Kahneman",
    valor: 50.93,
    quantidadeVendido: 5703, },
    { cod: "8551003429",
    nome: "princípios",
    autor: "Ray Dalio",
    valor: 89.9,
    quantidadeVendido: 3707, },
    { cod: "855717358X",
    nome: "gestão de alta performance",
    autor: "Andrew S. Grove",
    valor: 34.94,
    quantidadeVendido: 442, },
    { cod: "8550805246",
    nome: "empresas feitas para vencer",
    autor: "Jim Collins",
    valor: 44.2,
    quantidadeVendido: 824, },
    { cod: "855080455X",
    nome: "avalie o que importa",
    autor: "John Doerr",
    valor: 40.9,
    quantidadeVendido: 797, },
]

const autorMaisVendido = exemplares.sort((a, b) => b.quantidadeVendido - a.quantidadeVendido)[0].autor
// console.log(autorMaisVendido)

const filtrarAbaixoValor = (valor) => exemplares.filter(exemplar => exemplar.valor <= valor)
// console.log(filtrarAbaixoValor(50));

const filtrarAcimaValor = (valor) => exemplares.filter(exemplar => exemplar.valor >= valor)
// console.log(filtrarAcimaValor(50));

const pesquisaPorLivro = (pesquisa) => exemplares.find(exemplar => exemplar.nome == pesquisa)
// console.log(pesquisaPorLivro('antifragil'))

const pesquisaPorAutor = (pesquisa) => exemplares.filter(exemplar => exemplar.autor == pesquisa)
// console.log(pesquisaPorAutor('Ray Dalio'));

const listaEstoque = String(exemplares.map(exemplar => {
    let lista = ''
    lista += ` ${exemplar.nome}`

    return lista
})).trim()
// console.log(listaEstoque)

const topLivrosVendidos = (filtro) => {
    let livrosMaisVendidos = exemplares.sort((a, b) => b.quantidadeVendido - a.quantidadeVendido)

    return livrosMaisVendidos.slice(0, filtro)
}
// console.log(topLivrosVendidos(5))

const aumentaPreco = (taxa) => exemplares.forEach(exemplar => exemplar.valor*=taxa)
// aumentaPreco(1.1)

*/
