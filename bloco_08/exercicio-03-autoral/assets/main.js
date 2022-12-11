const soma = (numberOne, numberTwo) => numberOne+numberTwo
const subtracao = (numberOne, numberTwo) => numberOne-numberTwo
const multiplicacao = (numberOne, numberTwo) => numberOne*numberTwo
const divisao = (numberOne, numberTwo) => numberOne/numberTwo

const print = (value) => {
    const body = document.querySelector("body")
    const resultado = document.createElement("p")
    resultado.innerText = `Resultado: ${value}`
    body.appendChild(resultado)
}

window.onload = () =>{
    const inputOne = document.querySelector("#numberOne")
    const inputTwo = document.querySelector("#numberTwo")
    const operacao = document.querySelector("#operacao")
    const button = document.querySelector("#button")
    
    button.addEventListener("click", (e) => {
        e.preventDefault()
        
        let numberOne = parseInt(inputOne.value)
        let numberTwo = parseInt(inputTwo.value)
        let result = 0

        if(operacao.value == 1) {
            result = soma(numberOne, numberTwo)
        }
        else if(operacao.value == 2) {
            result = subtracao(numberOne, numberTwo)
        }
        else if(operacao.value == 3) {
            result = multiplicacao(numberOne, numberTwo)
        }
        else if(operacao.value == 4) {
            result = divisao(numberOne, numberTwo)
        }
        
        print(result)

    })

}

