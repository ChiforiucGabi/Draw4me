const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require("./requireLogin")
const Tabs = mongoose.model("tabsPhoto")


router.get('/allTabs', (req, res) => {
    Tabs.find()
        .then(tabs => {
            res.json({ tabs })
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/saveTabImg', requireLogin, (req, res) => {
    const { title, category, link, pret } = req.body

    if (!link || !pret || !title || !category) {
        return res.status(422).json({ error: "Please add all the fields" })
    }

    const tabImg = new Tabs({
        title,
        category,
        link,
        pret
    })

    tabImg.save().then(result => {
        res.json({ tabImg: result })
    })
        .catch(err => {
            console.log(err)
        })
})
module.exports = router