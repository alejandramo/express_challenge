const express = require('express')
const path = require('path')

//se agrega en la PARTE4
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// PARTE 5: agregar jsonwebtoken
const jwt = require('jsonwebtoken');

//parte 4
//ESTO ES DE LA 1ª
const app = express()
const port = 3000
//parte 1
//PARTE 5: AGREGAR CONSTANTE private key
const privateKey = 'eshoradecomer'


/*
//se agrega en la PARTE4
let orden = [];

app.use(bodyParser.json())
app.use(cookieParser())
app.use('/assets', express.static(path.join(__dirname, 'assets')))
*/

/*
//CREO que esto era parte 1
app.all('/hello', (req, res) => res.send('Hello World!'))
app.all('/bye', (req, res) => res.send('Bye Bye!'))
app.use('/assets', express.static(path.join(__dirname, 'assets')))
*/

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

/*
//PARTE 3
//middleware
app.all('*', (req,res,next) => {
    console.log('El usuario 98892 pidió: ', req.path)
    next()
})

/*
app.get('/tuorden', (req, res) => {
    res.send("tu orden está hecha");
})
app.get('/tuorden', (req, res) => {
    res.send("envía tu orden");
})
//ejemplo de funciones en las que sólo se ejecuta la segunda
*/

/*
app.get('/listo', (req, res) => {
    res.send("listo, tu pedido se enviará a____")
})

//termina PARTE 3
*/

/*
// similar al último app get de la parte 3
app.get('/listo', (req, res) => {
    res.status(200).send("data:orden") // aquí revisar si puede llamarse orden o debe ser "solicitud"
})
*/

/*
//PARTE4 
// crear un get que mande la solicitud y un put que la coloque en nuestro BE 
app.get('/solicitud', (req, res) => {
    console.log(req.cookies);
    res.send("listo, tu pedido se enviará a____")
})

app.post('/solicitud', (req, res) => {
    console.log(req.body)
    res.send(req.body);

    if(req.body.orden && req.body.pago){
        solicitud.push(req.body);
        res.status(201).send('espera tu entrega');
    }else{
        res.status(400).send({EROR: "necesitas revisar tu pedido"})
    }
})
*/


//PARTE FINAL: usuaro y pswd
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


  jwt.verify(req.headers.authorization, privateKey, function(err, decoded) {
    if(err) {
      res.status(500).end('aqui')
    } else {
      console.log(decoded)
      // checar ese usuario en la base datos a ver si existe
      next()
    }
  });

  app.get('taquito', (req,res) => {
      res.send('Bienvenid@, ahora puedes continuar con tu pedido');
  })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))