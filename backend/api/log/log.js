const fs = require('fs')

const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    // console.log('gLogs', gLogs)
    const logs = readFIle("/log.txt");
    const logsArray = logs.split('||\n')

    res.json(logsArray)

})


const readFIle = path => {
    console.log('__dirname', __dirname)
    console.log('path', path)
    const logs = fs.readFileSync(__dirname + path, "utf8", (err, data) => {
        if (err) {
            console.log(err.stack, 'dasdasdasd');
            return;
        }
        return data
    });
    return logs
};

module.exports = router