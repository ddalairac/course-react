//ruta: Host + '/api/auth'  
// CRUD
const express = require('express');
const { Router } = express;
const router = Router();

const { userLogin, userRegister, userRenewToken } = require('../controllers/auth.controller');
const { routeLoginValidationsMW, routeRegisterValidationsMW } = require('../middlewares/auth.validation');

// verbo GET
router.post('/', routeLoginValidationsMW, userLogin)
router.post(
    '/new', //path
    [...routeRegisterValidationsMW],// middlewares validations array
    userRegister // controller
)
router.get('/renew-token', userRenewToken)

module.exports = router