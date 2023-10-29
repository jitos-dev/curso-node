const fs = require('fs')

const urlData = './db/data.json'

const readFile = () => {
    if (!fs.existsSync(urlData)) {
        return []
    }

    const data = fs.readFileSync(urlData, {encoding: 'utf-8'})

    return JSON.parse(data)
}

const writeFile = (data) => {
    const strData = JSON.stringify(data)
    fs.writeFileSync(urlData, strData)
}

module.exports = { readFile, writeFile }