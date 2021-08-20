const express = require('express')
const userService = require('./user.service.js')

const router = express.Router()


router.post('/login', async (req, res) =>{
    const { userName, password } = req.body
    try {
        const user = await userService.login(userName, password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        res.status(401).send({ err: 'Failed to Login' })
    
}
})

router.post('/submitCart' , async(req,res) =>{
    const {userName} = req.body
    _saveLogToFile(userName , ' pay for the candies')
    res.json('done')
})
 
 router.post ('/signup', async (req, res)=> {
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
        const {userName} = req.body 
        _saveLogToFile(userName , ' loggedOut')
        req.session.destroy()
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        res.status(500).send({ err: 'Failed to logout' })
    }
})
const path = ('../log/log.txt')
function _saveLogToFile(user, action) {
    return new Promise((resolve, reject) => {
        const fs = require('fs')
        const data =  user + ' ' +  action + ' at: ' +  new Date().toLocaleString() + '||' +'\n'  
        fs.appendFileSync('api/log/log.txt',data , "UTF-8",{'flags': 'a+'} , (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
}

module.exports = router