const express = require("express")
const cors = require('cors')
const path = require('path')
<<<<<<< HEAD
=======
const swaggerUi = require('swagger-ui-express')
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
require('dotenv').config()

const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const postRouter = require('./posts/posts.router')
const followRouter = require('./follows/follows.router')

<<<<<<< HEAD
const upload = require('./middlewares/multer.midleware')
const db = require('./utils/database')
const initModels = require('./models/initModels')
=======
const upload = require('./middlewares/multer.middleware')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const swaggerDoc = require('../swagger.json')

>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
const app = express()

const PORT = process.env.PORT || 3000

//? Validar la conexión 

db.authenticate()
    .then(() => console.log('Database Authenticated!'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced!'))
    .catch(err => console.log(err))
<<<<<<< HEAD
    
=======

>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
initModels()

app.use(express.json())
app.use(cors())

const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} | ${req.path}`)
    next()
}
app.use(loggerMiddleware)

app.get('/', (req, res) => {
    res.json({
        message: 'Server OK', 
        myMessage: req.message,
        myPort: process.env.PORT,
        queries: req.query
    })
})   

app.get('/api/v1/uploads/:fileName', (req, res) => { 
    // const fileName = req.params.fileName
   try {
    res.status(200).sendFile( path.resolve('./public') + '/' + req.params.fileName ) 
   } catch (error) {
    res.status(404).json({message: error.message})
   } 
})

app.post('/api/v1/add-file', upload.single('my-image'), (req, res) => {
    res.status(200).json({message: req.file})
})

app.get('/api/v1/uploads/:fileName', (req, res) => {
    //const fileName = req.params.fileName
    res.status(200).sendFile(path.resolve('public/') + '/' + req.params.fileName)
})


app.post('/api/v1/add-file', upload.single('my-image') ,(req, res) => {

    res.status(200).json({message: req.file})
})

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/posts', postRouter)
app.use('/api/v1', followRouter)
<<<<<<< HEAD

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})
=======

app.use('*', (req, res) => {
    res.status(404).json({message: 'Not Found'})
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})

module.exports = app
>>>>>>> 85831c0cef4485b25eb78ac0e6b30a376f953458
