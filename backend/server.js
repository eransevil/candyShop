const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const cors = require('cors')
const path = require('path')

const candyRoutes = require ('./api/candy/candy.controller.js')
const userRoutes = require ('./api/user/user.controller.js')
const logRoutes = require ('./api/log/log.js')

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
    cookie: { secure: false },
    maxAge: 1*60*60*10000

 }))

 if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://127.0.0.1:3030', 'http://localhost:3030'],///////////////////////////////////////////////////////////////IFAT USED 3000
        credentials: true
    }
    app.use(cors(corsOptions))
}

 
app.use('/api/candy', candyRoutes)
app.use('/api/user', userRoutes)
app.use('/api/log', logRoutes)


app.listen(port, () => {
    console.log(`Backend ready at http://localhost:${port}`)
})