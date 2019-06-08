const express = require('express');
const consola = require('consola');
const cors = require('cors');
const { Nuxt, Builder } = require('nuxt');

// Importar las Rutas

const mongoose = require('mongoose');
const categories = require('./routes/categories');
const products = require('./routes/products');
const users = require('./routes/users');
const pays = require('./routes/pays');

// Inicializacion de Express
const app = express();

// Settings 
// const host = process.env.HOST || '127.0.0.1'
// const port = process.env.PORT || 3000
mongoose.connect('mongodb://localhost/ventas')
  .then(() => console.log('Conectado a la Base de Datos...'))
  .catch(err => console.error('Error de coneccion a los Datos...'));



// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
/////////////// Rutas Middlewares ///////////////

app.use('/server/api/categories', categories);
app.use('/server/api/products', products);
app.use('/server/api/users', users);
app.use('/server/api/pays', pays);

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
