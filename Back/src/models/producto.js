const mongoose = require('mongoose')
const productosSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true
    },
    ubication: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    }
})

module.exports = mongoose.model('Productos', productosSchema)
