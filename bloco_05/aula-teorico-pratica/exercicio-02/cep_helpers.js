import axios from 'axios';

export const numAleartorios = () => {
    let numeros = []
    const min = Math.ceil(29000000)
    const max = Math.floor(29099999)

    for (let i = 0; numeros.length < 20; i++) {
        let num = Math.floor(Math.random() * (max - min + 1) + min)
        if(numeros.every(numero => numero != num)){
            numeros.push(num)   
        }
    }

    return numeros 
}

export const searchCep = async (cep) => {
    try{
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

        return response.data
    } catch(error) {
        console.log(error.response);
    }
}