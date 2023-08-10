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

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const router = express.Router()

// Configurar Next.js
nextApp.prepare().then(() => {
  const app = express()

  app.use(express.json())
  app.use(cors())

  // Conexión a MongoDB
  mongoose.connect('mongodb://localhost:27017/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const UserSchema = new mongoose.Schema({
    username: String,
    password: String
  })
  const UserModel = mongoose.model('User', UserSchema)

  // Conexión a PostgreSQL
  const sequelize = new Sequelize('proyectopost', 'postgres', '123123', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    define: {
      timestamps: false // Deshabilitar los campos createdAt y updatedAt
    }
  })

  const Usuario = sequelize.define('usuarios', {
    numeroidentificacion: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    tipoidentificacion: {
      type: DataTypes.STRING
    },
    correo: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    nombres: {
      type: DataTypes.STRING
    },
    apellidos: {
      type: DataTypes.STRING
    }
  })

  // Sincronizar el modelo con la base de datos
  ;(async () => {
    try {
      await sequelize.authenticate()
      console.log('Conexión a PostgreSQL exitosa.')
      await sequelize.sync()
      console.log('Tablas creadas en PostgreSQL.')
    } catch (error) {
      console.error('Error al conectar o sincronizar con PostgreSQL:', error)
    }
  })()

  // Configura Express para servir los archivos estáticos generados por Next.js
  app.use('/_next', express.static(path.join(__dirname, '.next')))

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
  /*  app.all('*', (req, res) => {
    return handle(req, res)
  }) */

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

  // Exportar el modelo Usuario para que esté disponible en otros archivos
  module.exports = {
    Usuario: Usuario,
    sequelize: sequelize
  }
})
