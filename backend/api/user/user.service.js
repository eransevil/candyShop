const gUser = require('../../data/user.json')


function login(userName, password) {
        const user = gUser.find(user => user.userName === userName && user.password === password)
    if (user){
        const {userName, isAdmin, email} = user
        const userToReturn = {userName, isAdmin, email}
        return Promise.resolve(userToReturn)
    } 
    return Promise.reject('no such userName or password')
}

function signup(userName, password, email) {
    console.log(userName, password, email)
    const user = {userName, password, email}
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