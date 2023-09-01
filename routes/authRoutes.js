const express = require('express')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const { generateToken, authenticateToken } = require('../authUtils.js')
const { Sequelize, DataTypes } = require('sequelize')
const jwt = require('jsonwebtoken')
const { Client } = require('pg');


const router = express.Router()

// Conexión a PostgreSQL sin especificar una base de datos
const sequelize = new Sequelize('postgres', 'postgres', '123123', {
  host: 'postgresql_container', // Cambia esto a tu host de PostgreSQL
  port: 5432,
  dialect: 'postgres',
  define: {
    timestamps: false, // Deshabilitar los campos createdAt y updatedAt
  },
});

// Crear la base de datos
const client = new Client({
  user: 'postgres',
  host: 'postgresql_container', // Cambia esto a tu host de PostgreSQL
  database: 'postgres',
  password: '123123',
  port: 5432,
});

client.connect()
  .then(() => {
    return client.query('CREATE DATABASE proyectopost');
  })
  .then(() => {
    client.end(); // Cerrar la conexión

    // Conexión a la base de datos recién creada
    const db = new Sequelize('proyectopost', 'postgres', '123123', {
      host: 'postgresql_container',
      port: 5432,
      dialect: 'postgres',
      define: {
        timestamps: false,
      },
    });
  })
  .catch((error) => {
    console.error('Error al crear la base de datos:', error);
  });

  // Definición del modelo de Usuario
const Usuario = sequelize.define('usuarios', {
  numeroidentificacion: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  tipoidentificacion: {
    type: DataTypes.STRING,
  },
  correo: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  nombres: {
    type: DataTypes.STRING,
  },
  apellidos: {
    type: DataTypes.STRING,
  },
});

// Sincronizar el modelo con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Base de datos y tabla creadas exitosamente.');
  })
  .catch((error) => {
    console.error('Error al crear la base de datos y tabla:', error);
  });

// Ruta de registro de usuarios
router.post(
  '/register',
  body('numeroidentificacion').notEmpty().withMessage('El número de identificación es requerido.'),
  body('tipoidentificacion').notEmpty().withMessage('El tipo de identificación es requerido.'),
  body('correo').notEmpty().withMessage('El correo es requerido.').isEmail().withMessage('El correo debe ser válido.'),
  body('password')
    .notEmpty()
    .withMessage('La contraseña es requerida.')
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres.'),
  body('nombres').notEmpty().withMessage('Los nombres son requeridos.'),
  body('apellidos').notEmpty().withMessage('Los apellidos son requeridos.'),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { numeroidentificacion, tipoidentificacion, correo, password, nombres, apellidos } = req.body

    try {
      // Verificar si el usuario ya está registrado en la base de datos
      const existingUser = await Usuario.findOne({
        where: { numeroidentificacion: numeroidentificacion }
      })
      if (existingUser) {
        return res.status(409).json({ error: 'El usuario ya está registrado' })
      }

      // Encriptar la contraseña antes de almacenarla en la base de datos
      const saltRounds = 10
      const hashedPassword = await bcrypt.hash(password, saltRounds)

      // Insertar el nuevo usuario en la base de datos
      await Usuario.create({
        numeroidentificacion: numeroidentificacion,
        tipoidentificacion: tipoidentificacion,
        correo: correo,
        password: hashedPassword,
        nombres: nombres,
        apellidos: apellidos
      })

      // Si todo fue exitoso, responder con un mensaje de éxito
      res.status(201).json({ message: 'Usuario registrado exitosamente' })
    } catch (error) {
      console.error('Error en el servidor:', error)
      res.status(500).json({ error: 'Error en el servidor...' })
    }
  }
)

router.post(
  '/login',
  body('numeroidentificacion').notEmpty().withMessage('El número de identificación es requerido.'),
  body('password').notEmpty().withMessage('La contraseña es requerida.'),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { numeroidentificacion, password } = req.body

    try {
      // Buscar al usuario en la base de datos PostgreSQL por su número de identificación
      const user = await Usuario.findOne({
        where: { numeroidentificacion: numeroidentificacion }
      })

      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' })
      }

      // Verificar la contraseña con bcrypt
      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Contraseña incorrecta' })
      }

      // Generar el token JWT y enviarlo como respuesta
      const token = generateToken({
        sub: user.id,
        numeroidentificacion: user.numeroidentificacion
      })
      res.json({ token })
      
      // Set the token as a cookie in the response

    } catch (error) {
      console.error('Error en el servidor:', error)
    }
  }
)

// // // Ruta protegida (requiere un token válido)
// router.get("/pages/dashboard", authenticateToken, async (req, res) => {
//   try {
//     // Aquí puedes acceder a la información del usuario autenticado en req.user
//     // Por ejemplo, si req.user contiene el ID del usuario, puedes buscar los datos del usuario en la base de datos por su ID
//     const userId = req.user.sub;

//     // Realizar la consulta a la base de datos para obtener los datos del usuario por su ID
//     // Por ejemplo, si estás usando Sequelize:
//     // const user = await Usuario.findByPk(userId);

//     // En este ejemplo, simplemente devolveremos datos de ejemplo del usuario
//     res.json({
//       id: userId,
//       numeroidentificacion: "0123456789",
//       tipoidentificacion: "cedula",
//       correo: "usuario@example.com",
//       nombres: "Nombre Ejemplo",
//       apellidos: "Apellido Ejemplo",
//     });
//   } catch (error) {
//     console.error("Error en el servidor:", error);
//     res.status(500).json({ error: "Error en el servidor" });
//   }
// });

router.get('/panel', (req, res) => {
  return nextApp.render(req, res, '/pages/dashboard')
})

// Ruta protegida (requiere un token válido)
router.get('/autenticacion', authenticateToken, (req, res) => {
  // Si el token es válido, el middleware authenticateToken agregará el usuario al objeto req
  // Puedes acceder al usuario autenticado utilizando req.user
  // Aquí puedes devolver la información del perfil del usuario autenticado
  // Por ejemplo, puedes obtener los datos del usuario desde la base de datos y devolverlos en la respuesta

  const usuarioAutenticado = req.user

  res.json({ usuario: usuarioAutenticado })
})

// Ruta protegida para la página dashboard (requiere un token válido)
/* router.get('/dashboard', authenticateToken, (req, res) => {
  // Aquí puedes enviar la página `dashboard` como respuesta
  res.json({ message: 'Bienvenido a la página dashboard. Usuario autenticado correctamente.' })
})
 */

module.exports = router
