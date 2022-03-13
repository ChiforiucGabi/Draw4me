const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require("./requireLogin")
const Form = mongoose.model("form")

router.get('/allorders', (req, res) => {
    Form.find()
        .then(form => {
            res.json({ form })
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/saveForm', requireLogin, (req, res) => {
    const { firstName, lastName, email, themes, dateDue,  style, background, size, budget, file, message } = req.body

    if (!firstName || !lastName || !email || !themes|| !dateDue || !style || !background || !size || !budget || !message ) {
        return res.status(422).json({ error: "Please add all the fields" })
    }

    req.user.password = undefined

    const post = new Form({
        firstName,
        lastName,
        email,
        themes,
        dateDue,
        style,
        background,
        size,
        budget,
        file,
        message,
        savedBy: req.user
    })

    post.save().then(result => {
        res.json({ post: result })
    })
        .catch(err => {
            console.log(err)
        })
})
module.exports = router