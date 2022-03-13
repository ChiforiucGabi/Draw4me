const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    pret: {
        type: String,
        required: true
    }
})

mongoose.model("tabsPhoto", orderSchema)