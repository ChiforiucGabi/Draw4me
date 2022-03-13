const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const { MONGOURI } = require("./keys")

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log("connected to mongo")
})

mongoose.connection.on('error', (err) => {
    console.log("error connecting to mongo", err)
})

require("./models/userModel")

require("./models/orderModel")

require("./models/carouselModel")

require("./models/formModel")

require("./models/tabsImg")

app.use(express.json())

app.use(require('./auth'))

app.use(require('./getImgCarousel'))

app.use(require('./getTabsImg'))

app.use(require('./saveForm'))


app.get('/', (req,res)=>{
    console.log("Home")
    res.send("Hello word")
})

app.listen(PORT, () => {
    console.log("serv is running on", PORT)
})