const jwt = require('jsonwebtoken');

const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

function setJWT(uid, name, email) {
    return new Promise((resolve, rejected) => {
        let payload = { uid, name, email }
        let secret = process.env.SECRET_JWT
        let options = {
            expiresIn: '2h'
        }

        jwt.sign(payload, secret, options, (err, token) => {
            if (err) {
                console.log('jwt error: ', err)
                rejected('No se pudo generar el token')
            }
            resolve(token)
        })
    })
}

module.exports = {
    setJWT
}


