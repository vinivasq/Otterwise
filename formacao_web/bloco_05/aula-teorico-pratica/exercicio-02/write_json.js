import fs from 'fs'

export const saveToJSON = async (data, fileName) => {
        const jsonToString = JSON.stringify(data)
    fs.writeFileSync(fileName, jsonToString)
}

// saveToJSON(96045460, 'cep_list.json')