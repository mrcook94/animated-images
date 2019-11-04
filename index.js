const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

//view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.use('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('connect with port 3000');
})