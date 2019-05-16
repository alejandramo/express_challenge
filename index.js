const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.all('/hello', (req, res) => res.send('Hello World!'))
app.all('/bye', (req, res) => res.send('Bye Bye!'))
app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/tamal', (req, res) =>{
    res.status(418).send({sabor:'verde'})
}

app.post('/tostada', (req, res) =>{
    res.status(210).send({salsas:'de la que pica'})
}

app.patch('/tacos', (req, res) =>{
    res.status(409)
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))