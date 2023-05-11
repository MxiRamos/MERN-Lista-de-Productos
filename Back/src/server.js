const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const productosRoutes = require('./routes/producto')

//Middlewares
app.use(express.json())
app.use('/api', productosRoutes)

//routes
app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.log(error))


//port
const PUERTO = process.env.PORT || 5000
app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
})



