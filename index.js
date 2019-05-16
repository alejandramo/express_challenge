const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');

const app = express()
const port = 3000

const privateKey = 'eshoradecomer'


app.use(bodyParser.json())
app.use(cookieParser())
app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.post('/auth/signin', (req, res) => {
    if(!(req.body.user && req.body.pass)) {
        res.status(400).send('se necesita usuario y contraseña')
    }
    // si el usuario está en la base de datos
    jwt.sign({ user: req.body.user, theme: 'black' }, privateKey, function(err, token) {
        if(err) {
          res.send(500).end();
        } else {
          res.status(200).send({token: token})
        }
    });
}) 

app.use((req, res, next) => {
    jwt.verify(req.headers.authorization, privateKey, function(err, decoded) {
        if(err) {
             res.status(500).end('aqui')
        } else {
            console.log(decoded)
            // checar ese usuario en la base datos a ver si existe
            next()
        }
    });
})

app.get('/ordenar', (req,res) => {
    res.send('Bienvenid@, ahora puedes continuar con tu pedido');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))