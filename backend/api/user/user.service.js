const gUser = require('../../data/user.json')


function login(username, password) {
        const user = gUser.find(user => user.username === username && user.password === password)
    if (user){
        const {username, isAdmin, fullName} = user
        const userToReturn = {username, isAdmin, fullName}
        return Promise.resolve(userToReturn)
    } 
    return Promise.reject('no such username or password')
}

function signup(username, password, fullName) {
    console.log(username, password, fullName)
    const user = {username, password, fullName}
    gUser.push(user)
    return _saveuserToFile()
}


module.exports = {
    login,
    signup,
}


function _saveuserToFile() {
    return new Promise((resolve, reject) => {
        const fs = require('fs')
        fs.writeFile('data/user.json', JSON.stringify(gUser, null, 2), (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
}