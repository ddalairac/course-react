
const express = require('express');
const { check } = require('express-validator');

const loginValidations = [ // middlewares validations
    check('email', 'email es obligatorio').not().isEmpty(),
    check('email', 'email invalido').isEmail(),
    check('password', 'password es obligatorio').not().isEmpty(),
    check('password', 'password, la cantidad minima de caracteres es 6').isLength({ min: 6 }),
]

const registerValidations = [ // middlewares validations
    check('name', 'name es obligatorio').not().isEmpty(), // express-validator
    ...loginValidations
]

module.exports = {
    loginValidations, registerValidations
}