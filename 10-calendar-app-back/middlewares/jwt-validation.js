const { request, response } = require('express');
const jwt = require('jsonwebtoken');

function jwtValidationMW(req = response, res = response, next) {
    // es un estandar comenzar coin (x-) los header custom
    const token = req.header('x-token')
    // //console.log(token)
    if (!jwt) {
        return res.status(401).json({
            ok: false,
            errors: 'No hay token en el request'
        });
    }

    try {
        let secret = process.env.SECRET_JWT
        let payload = jwt.verify(token, secret)
        // //console.log("jwt.verify payload: ", payload)

        // agregar al request los atributos, para poder usarlos en el controller
        req.user = { uid: payload.uid, name: payload.name, email: payload.email }
        // req.uid = payload.uid
        // req.name = payload.name
        // req.email = payload.email

    } catch (error) {
        return res.status(401).json({
            ok: false,
            errors: 'Token no válido'
        });
    }

    next();
}

module.exports = {
    jwtValidationMW
}