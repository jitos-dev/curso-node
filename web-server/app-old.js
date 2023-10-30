const http = require('http')

http.createServer((req, res) => {
    res.write('Hola mundo')
    res.end()
})
.listen(3000)

console.log('Servidor corriendo en el puerto 3000');