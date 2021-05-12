// Importar express
const express = require('express');
const { dbConnection } = require('./db/config');

//Variables de entorno
require('dotenv').config();
// ? es lo mismo que
//// const dotenv = require('dotenv');
//// dotenv.config()
//// console.log("variables de entorno: ",process.env)

//  crear express server
const app = express();

// DB connection
dbConnection();

// Directorio publico
app.use(express.static('public'))

// Lectura y parseo del body
app.use(express.json())

// Rutas
app.use('/api/auth', require('./routes/auth.router'));
// TODO: CRUD eventos






// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log("Node express corriendo en puerto "+process.env.port)
})
