const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())

app.listen(process.env.PORT, () => (console.log(`listening on http://localhost:${process.env.PORT}`)))