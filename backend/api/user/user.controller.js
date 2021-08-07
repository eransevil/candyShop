const express = require('express')
const userService = require('./user.service.js')

const router = express.Router()


router.post('/login', async (req, res) =>{
    console.log('req.body', req.body)
    const { userName, password } = req.body
    try {
        const user = await userService.login(userName, password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        res.status(401).send({ err: 'Failed to Login' })
    
}
})
 
 router.post ('/signup', async (req, res)=> {
     console.log('req.body', req.body)
    try {
        const { userName, password, email } = req.body
        // Never log passwords
        const account = await userService.signup(userName, password, email)
        const user = await userService.login(userName, password)
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