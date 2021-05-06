//ruta: Host + '/api/auth'  
// CRUD
const express = require('express');
const { Router } = express;
const router = Router();

const { userLogin, userRegister, userRenewToken } = require('../controllers/auth.controller');

// verbo GET
router.post('/', userLogin)
router.post('/new', userRegister)
router.get('/renew-token', userRenewToken)

module.exports = router