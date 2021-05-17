//ruta: Host + '/api/auth'  
// CRUD
const express = require('express');
const { Router } = express;
const router = Router();
const { userLogin, userRegister, userRenewToken } = require('../controllers/auth.controller');
const { routeLoginValidationsMW, routeRegisterValidationsMW } = require('../middlewares/auth-fields.validation');
const { jwtValidationMW } = require('../middlewares/jwt-validation');


router.post(
    '/new', //path
    [...routeRegisterValidationsMW],// middlewares validations array
    userRegister // controller
)
router.post('/', routeLoginValidationsMW, userLogin)
router.get('/renew-token',jwtValidationMW, userRenewToken)

module.exports = router