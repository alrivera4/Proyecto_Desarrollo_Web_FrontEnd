// authUtils.js
const { Sequelize, DataTypes } = require('sequelize')
const jwt = require('jsonwebtoken')

const sequelize = new Sequelize('proyectopost', 'postgres', '123123', {
  host: 'postgres',
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

function generateToken(user) {
  const payload = { sub: user._id, username: user.username }

  return jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' })
} // Middleware para validar el token JWT
// Función para almacenar el token en el almacenamiento local

const setTokenInStorage = payload => {
  // Replace 'your-secret-key' with your actual secret key used to sign the token
  const token = jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' })
  localStorage.setItem('token', token)

  return token
}

const useTokenState = () => {
  const [token, setToken] = useState('')

  useEffect(() => {
    // Check if token is already present in local storage
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  const setTokenState = newToken => {
    setToken(newToken)
    localStorage.setItem('token', newToken)
  }

  return [token, setTokenState]
}

// Middleware para validar el token JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  console.log(req.headers);
  const token = authHeader && authHeader.split(' ')[1]
  console.log(token)
  if (!token) {
    return res.sendStatus(401)
  }

  // Replace 'your-secret-key' with the actual secret key used to sign the token
  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      console.error('Error verifying token:', err)

      return res.sendStatus(403)
    }

    console.log('User from token:', decoded) // Log the decoded user from the token
    req.user = decoded // Assign the decoded user to the request object
    next()
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
