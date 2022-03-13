const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const orderSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dateDue: {
        type: String,
        required: false
    },
    themes: {
        type: String,
        required: false
    },
    style: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: true
    },
    sendBy: {
        type: ObjectId,
        ref: "User"
    }
})

mongoose.model("form", orderSchema)