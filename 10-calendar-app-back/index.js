// Importar express
const express = require('express');

//Variables de entorno
require('dotenv').config();
// ? es lo mismo que
//// const dotenv = require('dotenv');
//// dotenv.config()
//// console.log("variables de entorno: ",process.env)

//  crear express server
const app = express();

// directorio publico
app.use(express.static('public'))


// Rutas
app.use('/api/auth', require('./routes/auth.router'));







// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log("Node express corriendo en puerto "+process.env.port)
})
