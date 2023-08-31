const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const { Sequelize, DataTypes } = require('sequelize')
const authRoutes = require('./routes/authRoutes.js')
const cors = require('cors')
const next = require('next')
const path = require('path')
const axios = require('axios')
const { authenticateToken } = require('./authUtils.js')
const { Client } = require('pg');

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const router = express.Router()

// Configurar Next.js
nextApp.prepare().then(() => {
  const app = express()
  app.use(express.static('public'));

  app.use(express.json())
  app.use(cors())



  // Conexión a MongoDB
  mongoose.connect('mongodb://mongodb_container:27017//db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  app.use(express.static('public'));

  app.use('/', authRoutes)

  // Rutas de autenticación (en un archivo separado para mantener la organización)

  app.use((err, req, res, next) => {
    if (err.name === 'TokenExpiredError') {
      // Token expirado, devolver un mensaje de error JSON
      return res.status(401).json({ error: 'Token expired' })
    } else {
      // Otro error en la verificación del token, devolver un mensaje de error JSON
      return res.status(403).json({ error: 'Token verification failed' })
    }
  })

  // Configura Express para manejar todas las rutas y redirigir a la página de inicio de Next.js
  app.all('*', (req, res) => {
    return handle(req, res)
  })

  app.get('*', (req, res) => {
    return nextApp.getRequestHandler()(req, res)
  })

  // Configura Express para manejar todas las rutas y redirigir a la página de inicio de Next.js
  /*   app.all('*', (req, res) => {
    return handle(req, res)
  }) */

  const port = 4000
  app.listen(port, () => {
    console.log(`Servidor Express en ejecución en el puerto ${port}`)
  })

})
