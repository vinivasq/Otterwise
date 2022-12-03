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
const encontraValor = (values, tamanho) => {
    if(tamanho == 'maior') {
        let maiorValor = 0
        let posMaiorValor = 0
        for (let i = 0; i < values.length; i++) {
            if(values[i] > maiorValor) {
                maiorValor = values[i]
                posMaiorValor = i
            }        
        }
        console.log(`O maior valor é ${maiorValor} e está na posição ${posMaiorValor}`)
    }
    
    else if (tamanho == 'menor') {
        let menorValor = 0
        let posMenorValor = 0
        for (let i = 0; i < values.length; i++) {
            if (values[i] < menorValor) {
                menorValor = values[i]
                posMenorValor = i
            }
        }
        console.log(`O menor valor é ${menorValor} e está na posição ${posMenorValor}`)    
    }
}

let values = [80,-15,3,-20,-5,6,11,8,-90,10]
encontraValor(values, 'menor')

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

//11
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

const autorMaisVendido = (exemplares) => {
    let maisVendido = 0
    
    for (let i = 0; i < exemplares.length; i++) {
        if(exemplares[i].quantidadeVendido > maisVendido) {
            maisVendido = exemplares[i]
        }
    }

    return console.log(maisVendido.autor)
}

const filtraValorAbaixo = (exemplares, valor) => {
    for (let i = 0; i < exemplares.length; i++) {
        if(exemplares[i].valor <= valor) {
            console.log(exemplares[i])
        }
    }
}

const filtraValorAcima = (exemplares, valor) => {
    for (let i = 0; i < exemplares.length; i++) {
        if(exemplares[i].valor >= valor) {
            console.log(exemplares[i])
        }
    }
}

const pesquisaPorNome = (exemplares, nome) => {
    for (let i = 0; i < exemplares.length; i++) {
        if(exemplares[i].nome == nome){
            console.log(exemplares[i])
        }        
    }
}

const pesquisaPorAutor = (exemplares, autor) => {
    for (let i = 0; i < exemplares.length; i++) {
        if(exemplares[i].autor == autor) {
            console.log(exemplares[i])
        }        
    }
}

const pesquisaPorCodigo = (exemplares, codigo) => {
    for (let i = 0; i < exemplares.length; i++) {
        if(exemplares[i].cod == codigo) {
            console.log(exemplares[i])
        }
    }
}

const listaEstoque = (exemplares) => {
    let lista = ''
    for (let i = 0; i < exemplares.length; i++) {
        if(i == exemplares.length -1) {
            lista += `${exemplares[i].nome}.`
        } else {
            lista += `${exemplares[i].nome}, `
        }
    }

    return console.log(lista)
}

const topLivrosVendidos = (exemplares, filtro) => {
    
    for (let index = 0; index < exemplares.length; index++) {
        let aux
        for (let i = 0; i < exemplares.length - 1; i++) {
            if(exemplares[i].quantidadeVendido < exemplares[i+1].quantidadeVendido){
                aux = exemplares[i]
                exemplares[i] = exemplares[i+1]
                exemplares[i+1] = aux
            }            
        }     
       
    }

    for (let v = 0; v < filtro; v++) {
        console.log(exemplares[v])
                
    }
}

const aumentaPreco = (exemplares, taxa) => {
    for (let i = 0; i < exemplares.length; i++) {
        exemplares[i].valor *= taxa        
    }

    console.log(exemplares)
}

let menuDePesquisa = [autorMaisVendido, filtraValorAbaixo, filtraValorAcima, pesquisaPorNome, pesquisaPorAutor, pesquisaPorCodigo, listaEstoque, topLivrosVendidos, aumentaPreco]

menuDePesquisa[0](exemplares)

// autorMaisVendido(exemplares)
// filtraValorAbaixo(exemplares, 35)
// filtraValorAcima(exemplares, 50)
// pesquisaPorNome(exemplares, "princípios")
// pesquisaPorAutor(exemplares, 'Ray Dalio')
// pesquisaPorCodigo(exemplares, '8550801488')
// listaEstoque(exemplares)
// topLivrosVendidos(exemplares, 3)
// aumentaPreco(exemplares, 1.1)

//12
let values = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]

const multiplicaPorDez = (valor) => valor*10

const dividePorCinco = (valor) =>  valor/5

const operacao = (valores, funcao) => {
    let result = []
    for (let i = 0; i < valores.length; i++) {
        result[i] = funcao(valores[i])
    }

    return result
}

console.log(operacao(values, multiplicaPorDez))
console.log(operacao(values, dividePorCinco))

//13
const filtros = (estoque, filtro) => {
    for (let i = 0; i < estoque.length; i++) {
        if(estoque[i]['name'] == filtro) {
            console.log(estoque[i])
        }
        else if (estoque[i]['cod'] == filtro) {
            console.log(estoque[i])
        }
        else if(estoque[i]['category'] == filtro) {
            console.log(estoque[i])
        }
        else if(estoque[i]['price'] <= filtro) {
            console.log(estoque[i])
        }
    }
}

const ordenaEstoque = (estoque, ordem, campo) => {
    if (ordem == 'crescente') {
        for (let index = 0; index < estoque.length; index++) {
            let aux
            for (let i = 0; i < estoque.length; i++) {
                if(estoque[index][campo] < estoque[i][campo]) {
                    aux = estoque[index]
                    estoque[index] = estoque[i]
                    estoque[i] = aux
                }
            }
        }
    }
    else if (ordem == 'decrescente') {
        for (let index = 0; index < estoque.length; index++) {
            let aux
            for (let i = 0; i < estoque.length; i++) {
                if(estoque[index][campo] > estoque[i][campo]) {
                    aux = estoque[index]
                    estoque[index] = estoque[i]
                    estoque[i] = aux
                }
            }
        }
    }
    console.log(estoque)
}

const adicionaCarrinho = (estoque, codigo, quantidade) => {
//checa se existe
//checa se possui estoque 
//adiciona ao carrinho de compras


    for (let index = 0; index < estoque.length; index++) {  
        if(estoque[index]['cod'] == codigo){
            item = estoque[index]
        }
    }
    
    for (quantidade ; quantidade <= item['stock'] && quantidade > 0; quantidade--) {
        carrinhoDeCompra.push(item)
        item['stock']--
    }
}

const valorCarrinho = (carrinho) => {
//função que exibe valor total do carrinho
    let valor = 0
    for (let i = 0; i < carrinho.length; i++) {
        valor += carrinho[i]['price']        
    }

    return valor
}

const finalizaCompra = (carrinhoDeCompra, valorCarrinho, formaPagamento, parcelas) => {
//boleto desconto de 10%
//debito desconto de 15%
//opção credito recebe quantidade de parcelas (max 12)
//cada parcela acrescente 3% de juros
//mostrar o valor da parcela e o total atualizado
//mostrar no final um relatório com as compras, forma de pagamento
//e valor total (com numero de parcelas em caso de crédito)

    let valorTotal = valorCarrinho(carrinhoDeCompra)
    let juros = 1
    let desconto = 0

    const validaPagamento = (valorTotal, formaPagamento, parcelas) => {
        if(formaPagamento == 'boleto'){
            desconto = (valorTotal * 1.1) - valorTotal
            valorTotal -= desconto
            return valorTotal.toFixed(2)
        }
        else if(formaPagamento == 'debito'){
            desconto = (valorTotal * 1.15) - valorTotal
            valorTotal -= desconto
            return valorTotal.toFixed(2)
        }
        else if(formaPagamento == 'credito' && parcelas >= 1 && parcelas <= 12) {
            for (let i = 1; i <= parcelas; i++) {
                juros += 0.03                
            }
            valorTotal *= juros
            const valorParcela = valorTotal/parcelas.toFixed(2)

            return `${parcelas}x de ${valorParcela.toFixed(2)} = ${valorTotal.toFixed(2)}`
        }
        else {
            return 'Forma de pagamento inválida'
        }
    }

    const itensComprados = (carrinho) => {
        let itens = ''
        for (let i = 0; i < carrinho.length; i++) {
            if(i == carrinho.length - 1) {
                itens += `${carrinho[i]['name']}.`
            }
            else {
                itens += `${carrinho[i]['name']}, `
            }
        }
        return itens
    }

    const relatorioPagamento = (formaPagamento) => {
        if(formaPagamento == 'credito'){
            return `${formaPagamento} em ${parcelas}x`
        }
        else {
            return `${formaPagamento}`
        }
    }
    
    const relatorio = `
    Os itens comprados foram: ${itensComprados(carrinhoDeCompra)}
    Forma de pagamento: ${relatorioPagamento(formaPagamento)}
    O valor total dos itens é: ${validaPagamento(valorTotal, formaPagamento, parcelas)}
    `

    console.log(relatorio)
}

let estoque = [
    {
        cod: "1589901",
        name: "Camiseta Polo Azul",
        stock: 55,
        price: 79.90,
        category: "Camisetas"
    },
    {
        cod: "7473522",
        name: "Camiseta Simples Preta",
        stock: 87,
        price: 45.90,
        category: "Camisetas"
    },
    {
        cod: "7471493",
        name: "Camiseta Simples Branca",
        stock: 72,
        price: 45.90,
        category: "Camisetas"
    },
    {
        cod: "4159484",
        name: "Camiseta Polo Branca",
        stock: 9,
        price: 79.90,
        category: "Camisetas"
    },
    {
        cod: "8786675",
        name: "Calça Jeans Preta",
        stock: 26,
        price: 120.00,
        category: "Calças"
    },
    {
        cod: "3874156",
        name: "Bermuda Preta",
        stock: 10,
        price: 89.90,
        category: "Bermudas"
    },
    {
        cod: "4213737",
        name: "Calça de Moletom",
        stock: 12,
        price: 105.90,
        category: "Calças"
    },
]

let carrinhoDeCompra = []
let item = {}

// ordenaEstoque(estoque, 'decrescente', 'name')
// filtros(estoque, "100")

adicionaCarrinho(estoque, '4159484', 2)
adicionaCarrinho(estoque, '8786675', 1)
console.log(valorCarrinho(carrinhoDeCompra))

finalizaCompra(carrinhoDeCompra, valorCarrinho, 'credito', 12) 

*/
