import {input} from "console-input"
import axios from "axios"
import fs from "fs"
import { parse } from "path"
import { serialize } from "v8"

const cepInput = () => input("Digite um CEP:")

const searchCep = async (cep) => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

        return response.data
    } catch(error) {
        console.log(error.message);
    }
}

// searchCep(cepInput())

const saveToJSON = (data, fileName) => {
    const parsedJSON = JSON.stringify(data)
    fs.writeFileSync(fileName, parsedJSON)
}

const main = async() => {
    try {
        const cep = cepInput()
        const cepRetornado = await searchCep(cep)
        saveToJSON(cepRetornado, 'cep.json')
    } catch(error){
        console.log(error.message);
    }
}
main()