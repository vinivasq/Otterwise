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
//função de finalização de compra (valorTotal, formaPagamento)
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
// filtros(estoque, "150")

adicionaCarrinho(estoque, '4159484', 2)
adicionaCarrinho(estoque, '8786675', 1)
console.log(valorCarrinho(carrinhoDeCompra))

finalizaCompra(carrinhoDeCompra, valorCarrinho, 'credito', 12) 