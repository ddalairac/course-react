
const express = require('express');
const { request, response } = express
const { check, validationResult } = require('express-validator');



// custom middlewares
const controllerAttrCountValidationMW = (req, res, next, max) => {
    // console.log("req", req.body)
    let count = Object.keys(req.body).length

    if(count > max){
        return res.status(400).json({
            ok: false,
            error: `Hay mas atributos de los necesarios en el request, deberian ser ${max} atributos y se enviaron ${count}`
        });
    }
    next(); //
}

const controllerResponseValidationsMW = (req, res = response, next) => {
    const errors = validationResult(req)
    // console.log('errors: ',errors)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    next(); // 
}

// Route validations middleware
const routeLoginValidationsMW = [ // middlewares validations
    check('email', 'email es obligatorio').not().isEmpty(),
    check('email', 'email invalido').isEmail(),
    check('password', 'password es obligatorio').not().isEmpty(),
    check('password', 'password, la cantidad minima de caracteres es 6').isLength({ min: 6 }),
    controllerResponseValidationsMW,
    ( req = response, res = response, next ) => { controllerAttrCountValidationMW(req, res, next, 2) }
]

const routeRegisterValidationsMW = [ // middlewares validations
    check('name', 'name es obligatorio').not().isEmpty(), // express-validator
    check('email', 'email es obligatorio').not().isEmpty(),
    check('email', 'email invalido').isEmail(),
    check('password', 'password es obligatorio').not().isEmpty(),
    check('password', 'password, la cantidad minima de caracteres es 6').isLength({ min: 6 }),
    controllerResponseValidationsMW,
    ( req = response, res = response, next ) => { controllerAttrCountValidationMW(req, res, next, 3) }
]



module.exports = {
    routeLoginValidationsMW, routeRegisterValidationsMW
}