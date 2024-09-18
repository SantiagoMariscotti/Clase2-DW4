// import express from "express";
// import bodyParser from "body-parser"

// const app = express();
// const puerto = 3000

// app.use(bodyParser.json())

// let data =[
//     {id: 1 , name:"Julián" },
//     {id: 2 , name:"Ernesto" },
//     {id: 3 , name:"Emilia" }
// ]

// app.get("/", (req, res) =>{  // "  "/"  " = Hace el get en home
//     res.send("Hola!")

// }
// )

// app.get('/api/objects', (req, res) => { //En la url tengo que poner "http://localhost:3000/api/objects"
//     res.json(data)
// })

// app.listen(puerto, () =>{
//     console.log(`Corriendo el puerto ${puerto}`)

// }
// ) 

import express from 'express';

const app = express();
const puerto = 3000;

//Ruta Principal
app.get('/', (req, res) => {
res.send('¡Hola, mundo con Express! ');
});

//Iniciar el servidor
app.listen(puerto, () => {
console.log(`Servidor en funcionamiento en el puerto ${puerto}`);
});