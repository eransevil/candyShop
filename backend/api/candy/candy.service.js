const gCandy = require('../../data/candy.json')

function query(filterBy ={}) {
    // const regex = new RegExp(filterBy.name, 'i')
    // var candysForDisplay = gCandy.filter(candy => {
    //     return regex.test(candy.name)
    //         && (JSON.stringify(candy.inStock) === filterBy.inStock || filterBy.inStock === 'all' || !filterBy)

    // })
    return Promise.resolve(gCandy);
}


function getById(candyId) {
    const candy = gCandy.find(candy => candy._id.toString() === candyId.toString())
    return Promise.resolve(candy)
}


function save(candy) {
    if (candy._id) {
        const idx = gCandy.findIndex(t => t._id.toString() === candy._id.toString())
        if (idx < 0) return Promise.reject('No such candy in DB', candy._id)
        gCandy.splice(idx, 1, candy)

    } else {
        candy._id = _makeId()
            candy.inStock = true
        gCandy.unshift(candy)
    }
    return _savecandysToFile()
        .then(() => candy)
}

function remove(candyId) {
    const idx = gCandy.findIndex(candy => candy._id.toString() === candyId.toString())
    if (idx === -1) return Promise.reject('No Such candy')
    gCandy.splice(idx, 1)
    return _savecandysToFile();
}




module.exports = {
    query,
    getById,
    save,
    remove
}

function _savecandysToFile() {
    return new Promise((resolve, reject) => {
        const fs = require('fs')
        fs.writeFile('data/candy.json', JSON.stringify(gCandy, null, 2), (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
}



function _makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}
