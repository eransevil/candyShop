const gUser = require('../../data/user.json')

function login(userName, password) {
        const user = gUser.find(user => user.userName === userName && user.password === password)
    if (user){
        const {userName, isAdmin, email} = user
        const userToReturn = {userName, isAdmin, email}
        _saveLogToFile (userName,  'logged in')
        return Promise.resolve(userToReturn)
    } 
    return Promise.reject('no such userName or password')
}

function signup(userName, password, email) {
    const user = {userName, password, email}
    _saveLogToFile (userName,  'signup in')
    gUser.push(user)
    return _saveUserToFile()
}


module.exports = {
    login,
    signup,
}


function _saveUserToFile() {
    return new Promise((resolve, reject) => {
        const fs = require('fs')
        fs.writeFile('data/user.json', JSON.stringify(gUser, null, 2), (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
}

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

