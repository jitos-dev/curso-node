require('dotenv').config()
require('colors')
const express = require('express')
const { env } = require('process')
const app = express()

const PORT = process.env.EXPRESS_PORT || 3000

// Para servir contenido estático utilizamos los midelwares
// Si lo hacemos así la ruta raíz no hace falta ponerla porque ya coge el index.html por defecto
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.send('Hola mundo')
// })

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo desde hola mundo')
})

/**
 * __dirname hace referencia a la ruta absoluta de donde nos encontramos
 */
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`.green);    
})