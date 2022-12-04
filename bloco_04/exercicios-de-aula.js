// lenvado em consideração um array com os seguintes nomes (criar um array cheio de nomes), retorne um novo array com o seguinte padrão (id0 name joão, id1 name pedro, id3 gabriel...)

// let nomes = ["João", "Pedro", "Gabriel", "Mari"]

// let newNomes = nomes.map((element, index) => {
//     return {
//         id: index,
//         name: element
//     }
// })

// console.log(newNomes)


// levando em consideração o array de usuarios abaixo (imprima na tela o nome de todos ativos) (imprima na tela quantos nao estao ativos) (se existe algum ativo) (ordenado por id em ordem crescente)

let users = [
    {
        id: 3,
        name: 'João',
        active: false
    },
    {
        id: 2,
        name: 'Gabriel',
        active: false
    },
    {
        id: 1,
        name: 'Mari',
        active: true
    },
    {
        id: 0,
        name: 'Miguel',
        active: false
    }
]

// users.filter(element => element.active).forEach(element => console.log(element.name))

const inactiveUsers = users.filter((element) => !element.active).length

// console.log(`Existem ${inactiveUsers} usuario(s) instivo(s)`)

// console.log(users.some(element => element.active) ? "Existem usuarios ativos" : "Não existem usuarios ativos")

console.log(users.sort((element, nextElement) => element.id - nextElement.id))