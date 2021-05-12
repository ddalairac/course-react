//ruta: Host + '/api/auth'  
// CRUD
const express = require('express');
const { Router } = express;
const router = Router();

const { userLogin, userRegister, userRenewToken } = require('../controllers/auth.controller');
const { loginValidations, registerValidations } = require('../validations/auth.validation');

// verbo GET
router.post('/', loginValidations, userLogin)
router.post(
    '/new', //path
    [...registerValidations],// middlewares validations array
    userRegister // controller
)
router.get('/renew-token', userRenewToken)

module.exports = router