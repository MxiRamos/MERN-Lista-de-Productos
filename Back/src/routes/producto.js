const express = require('express')
const productosSchema = require('../models/producto')
const router = express.Router()

//Obtener productos
router.get('/productos', (req, res) => {
    productosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Obtener un producto
router.get('/productos/:id', (req, res) => {
    const { id } = req.params
    productosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Crear producto
router.post('/productos', (req, res) => {
    const producto = productosSchema(req.body)
    producto
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Actualizar producto
router.put('/productos/:id', (req, res) => {
    const { id } = req.params
    const { name, category, ubication, price } = req.body
    productosSchema
        .updateOne({ _id:id }, {$set: {name, category, ubication, price}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//Eliminar producto
router.delete('/productos/:id', (req, res) => {
    const { id } = req.params
    productosSchema
        .deleteOne({ _id:id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router
