const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require("./requireLogin")
const Poze = mongoose.model("poze")


router.get('/allImg', (req, res) => {
    Poze.find()
        .then(poze => {
            res.json({ poze })
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/createpost', requireLogin, (req, res) => {
    const { link, pret} = req.body

    if (!link || !pret ) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    req.user.password = undefined

    const post = new Poze({
        link,
        pret
    })

    post.save().then(result => {
        res.json({ post: result })
    })
        .catch(err => {
            console.log(err)
        })
})
module.exports = router