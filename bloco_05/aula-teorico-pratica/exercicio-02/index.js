/*
criar um codigo que retorne 20 ceps diferentes para uma lista e joga pra um arquivo json os dados logradouro, bairro, localidade e cep retornados pela api. Escreva o arquivos apenas com ceps validos e que tenham retorno da api
dica: ceps validos vão de 29000000 a 29099999.
dica: gerar numeros dentro de uma faixa específica de valores que corresponda aos ceps validos (pesquisa como)
dica: procurar sobre o comando promiseAll. ele só termina quando resolve todo um conjunto de promessas

note: modularizar o codigo 
*/

import { searchCep, numAleartorios } from "./cep_helpers.js"
import { saveToJSON } from "./write_json.js"

const main = async () => {
    let listaCep = []
    let cepsAleatorios = numAleartorios()

    listaCep = await Promise.all(searchCep(cepsAleatorios))

    console.log(listaCep);
    
    // console.log(cepValidos);
    // saveToJSON(listaCep, 'cep_list.json')
}

main()