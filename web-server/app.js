require('dotenv').config()
require('colors')
const express = require('express')
const hbs = require('hbs')


const app = express()
const PORT = process.env.EXPRESS_PORT || 3000

// Para utilizar Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials') // decimos donde van a estar los partials (templates)

// Para servir contenido estático utilizamos los midelwares
// Si lo hacemos así la ruta raíz no hace falta ponerla porque ya coge el index.html por defecto
app.use(express.static('template'))

// Creo la ruta base porque no quiero que el enlace /index.html funcione
app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/public/index.html')
    res.render('home', {
        name: 'Template personalizado',
        title: 'Handlebars | Home',
        by: 'Handlebars'
    }) // la extensión .hbs no hace falta ponerla
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Template personalizado',
        title: 'Handlebars | Generic',
        by: 'Handlebars'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Template personalizado',
        title: 'Handlebars | Elements',
        by: 'Handlebars'
    })
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