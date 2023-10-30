require('dotenv').config()
require('colors')
const express = require('express')
const { env } = require('process')
const app = express()

const PORT = process.env.EXPRESS_PORT

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.listen(PORT)
console.log(`Server running in port ${PORT}`.green);