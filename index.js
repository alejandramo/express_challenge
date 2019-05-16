const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.all('/hello', (req, res) => res.send('Hello World!'))
app.all('/bye', (req, res) => res.send('Bye Bye!'))
app.use('/assets', express.static(path.join(__dirname, 'assets')))

/*
// **esto se agregó en la parte 2 de la práctica**
app.get('/tamal', (req, res) =>{
    res.status(418).send({sabor:'verde'});
}

app.post('/tostada', (req, res) =>{
    res.status(210).send({salsas:'de la que pica'});
}

app.patch('/tacos', (req, res) =>{
    res.status(409);
}
// **esto se agregó en la parte 2 de la práctica**
*/


//PARTE 3
app.all('*', (req,res,next) => {
    console.log('El usuario 98892 pidió 5 tacos', req.path)
    next()
})

app.get('/tuorden', (req, res) => {
    res.send("tu orden está hecha");
})
app.get('/tuorden', (req, res) => {
    res.send("envía tu orden");
})

app.get('/listo', (req, res) => {
    res.send("listo, tu pedido se enviará a____")
})

//termina PARTE 3






app.listen(port, () => console.log(`Example app listening on port ${port}!`))