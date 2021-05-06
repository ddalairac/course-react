const userLogin = (req, res) => {
    console.log("post login")
    res.json({ ok: true, msg: 'login' })
}
const userRegister = (req, res) => {
    console.log("post create")
    res.json({ ok: true, msg: 'register' })
}
const userRenewToken = (req, res) => {
    console.log("post renew token")
    res.json({ ok: true, msg: 'renew token' })
}


module.exports = {
    userLogin, userRegister, userRenewToken
}