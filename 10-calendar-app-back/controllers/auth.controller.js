// no es necesaria la importacion, pero me permite el autocompletado
const express = require('express');
const { request, response } = express;


const userLogin = (req = request, res = response) => {
    console.log("post login")
    res.json({ ok: true, msg: 'login' })
}
const userRegister = (req = request, res = response) => {
    console.log("req", req.body)
    console.log("post create")
    // res.json({ ok: true, msg: 'register',user:req.body })
    const {name,email,password} = req.body
    if(name.length < 5){
        return res.status(400).json({ ok: false, msg: 'el nombre debe tener mas de 4 caracteres' })
    } else {
        return res.status(201).json({ ok: true, msg: 'register',user:req.body })
    }
}
const userRenewToken = (req = request, res = response) => {
    console.log("post renew token")
    res.json({ ok: true, msg: 'renew token' })
}


module.exports = {
    userLogin, userRegister, userRenewToken
}