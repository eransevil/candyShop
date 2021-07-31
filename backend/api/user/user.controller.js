const express = require('express')
const userService = require('./user.service.js')

const router = express.Router()


router.post('/login', async (req, res) =>{
    const { username, password } = req.body
    try {
        const user = await userService.login(username, password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        res.status(401).send({ err: 'Failed to Login' })
    
}
})
 
 router.post ('/signup', async (req, res)=> {
    try {
        const { username, password, fullName } = req.body
        // Never log passwords
        const account = await userService.signup(username, password, fullName)
        const user = await userService.login(username, password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        res.status(500).send({ err: 'Failed to signup' })
    }
})


router.post('/logout', async (req, res) => {
    try {
        console.log('req.session before', req.session)
        req.session.destroy()
        console.log('req.session after:', req.session )
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        res.status(500).send({ err: 'Failed to logout' })
    }
})



module.exports = router