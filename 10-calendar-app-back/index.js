// Importar express
const express = require('express')

//  crear express server
const app = express();

// verbo GET
app.get('/', (req, res) => {
    console.log("Consulta get")
    res.json({ ok: true })
})

// Escuchar peticiones
app.listen(4000, () => {
    console.log("Node express corriendo en puerto 4000")
})
