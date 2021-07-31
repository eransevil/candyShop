const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const cors = require('cors')

const candyRoutes = require ('./api/candy/candy.controller.js')
const userRoutes = require ('./api/user/user.controller.js')

const app = express()
const port = process.env.PORT || 3030 
 
// Express App Configuration:
// Tell express to serve static files from the public folder
app.use(cors()); 
app.use(express.static('public'))
app.use(cookieParser());
app.use(bodyParser.json())
app.use(session({
    secret: 'hta',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
 }))
 
app.use('/api/candy', candyRoutes)
app.use('/api/user', userRoutes)


app.listen(port, () => {
    console.log(`Backend ready at http://localhost:${port}`)
})