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