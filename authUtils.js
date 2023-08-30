// authUtils.js
const { Sequelize, DataTypes } = require('sequelize')
const jwt = require('jsonwebtoken')

const sequelize = new Sequelize('proyectopost', 'postgres', '123123', {
  host: 'postgresql_container',
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

function generateToken(numeroidentificacion) {
  const payload = { sub: numeroidentificacion };
  
  return jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' });
}

// Función para almacenar el token en el almacenamiento local


// Middleware para validar el token JWT
function authenticateToken(req, res, next) {
  // Obtener el token del encabezado 'Authorization'
  const authHeader = req.headers['authorization']
  console.log(req.headers)
  const token = authHeader && authHeader.split(' ')[1]
  console.log(token)
  if (!token || token == null || token == 'null') {
    return res.sendStatus(401) // No se proporcionó token, denegar acceso
  }

  // Verificar el token y continuar si es válido
  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) {
      console.error('Error verifying token:', err) // Log del error

      return res.sendStatus(403) // Token inválido, denegar acceso
    }

    // Token válido, se puede acceder al recurso protegido
    console.log('User from token:', user) // Log del usuario decodificado desde el token
    req.user = user // Guardar el usuario en el objeto req para futuras referencias
    next() // Continuar con la siguiente función o middleware
  })
}


/*   // Middleware para validar el token JWT
  function authenticateToken(req, res, next) {
    const token = req.header("Authorization")?.split(" ")[1];
    console.log(token+"xd2");
    if (!token) {
      return res.sendStatus(401);
    }

    jwt.verify(token, "your-secret-key", (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  }

 */

module.exports = {
  Usuario: Usuario,
  generateToken: generateToken,
  authenticateToken: authenticateToken
}
