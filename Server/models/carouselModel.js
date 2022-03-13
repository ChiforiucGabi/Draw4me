const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    pret: {
        type: String,
        required: true
    }
})

mongoose.model("poze", orderSchema)