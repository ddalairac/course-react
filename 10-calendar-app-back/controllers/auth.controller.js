// no es necesaria la importacion, pero me permite el autocompletado
const express = require('express');
const UserModel = require('../models/User.model');
const { request, response } = express;
const bcrypt = require('bcryptjs');
const { setJWT } = require('../helpers/jwt');

const userLogin = async (req = request, res = response) => {
    console.log("post login")
    const { email, password } = req.body;
    try {
        // check user
        const validUser = await UserModel.findOne({ email })
        if (!validUser) {
            return res.status(400).json({
                ok: false,
                error: 'Usuario no válido'
            });
        }

        // check password
        const validPassword = await bcrypt.compareSync(password, validUser.password)
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                error: 'Password no válido'
            });
        }

        //  Generate JWT
        const token = await setJWT(validUser.id, validUser.name, validUser.email);

        return res.status(200).json({
            ok: true,
            msg: 'login exitoso',
            user: { uid: validUser.id, name: validUser.name, email: validUser.email },
            token: token
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            errors: {
                msg: 'error al guardar los datos, contacte al admin'
            }
        });
    }
}
const userRegister = async (req = request, res = response) => {
    console.log("post Register")

    // Validacion JS
    // // console.log("req", req.body)
    // // const { name, email, password } = req.body
    // // if (name.length < 5) {
    // //     return res.status(400).json({ ok: false, msg: 'el nombre debe tener mas de 4 caracteres' })
    // // } else {
    // //     return res.status(201).json({ ok: true, msg: 'register', user: req.body })
    // // }

    // Validacion usando express-validator (check() en las rutas)
    // // if (!errors.isEmpty()) {
    // //     return res.status(400).json({
    // //         ok: false,
    // //         errors: errors.mapped()
    // //     });
    // // }


    // Validacion de atributos usando custom Middleware (en auth.validations.js)
    const { email, password } = req.body;
    try {
        const checkUser = await UserModel.findOne({ email })
        // console.log("existe:",user)
        if (checkUser) {
            return res.status(400).json({
                ok: false,
                error: 'Ya existe un usuario creado con el email ' + email
            });
        }

        const newUser = new UserModel(req.body);

        // encriptar password
        const salt = bcrypt.genSaltSync();
        newUser.password = bcrypt.hashSync(newUser.password, salt);

        // guardar en DB
        await newUser.save();

        // Generate JWT
        const token = await setJWT(validUser.id, validUser.name, validUser.email);

        return res
            .status(201)
            .json({
                ok: true,
                msg: 'registro exitoso',
                user: { uid: newUser.id, name: newUser.name, email: newUser.email },
                token: token
            })

    } catch (error) {
        // console.log('error al guardar los datos', error)
        return res.status(500).json({
            ok: false,
            errors: {
                msg: 'error al guardar los datos, contacte al admin'
            }
        });
    }


}
const userRenewToken = (req = request, res = response) => {
    console.log("post renew token")
    res.json({ ok: true, msg: 'renew token' })
}


module.exports = {
    userLogin, userRegister, userRenewToken
}