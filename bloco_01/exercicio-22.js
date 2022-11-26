function calculaNotas(valor, cedula) {
    let qtdeNotas = parseInt(valor/cedula, 10)
    
    console.log(qtdeNotas + " nota (s) de R$: " + cedula + ",00")
}

function mostraNotas(valor) {
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











