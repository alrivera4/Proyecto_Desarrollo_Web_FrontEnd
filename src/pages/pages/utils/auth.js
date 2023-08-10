// Funciones para manejar el token en una cookie o almacenamiento local
export default function setTokenInStorage(token) {
  localStorage.setItem('token', token);
}

// Función para eliminar el token JWT del almacenamiento local
export function removeTokenFromStorage() {
  localStorage.removeItem('token');
}

// Get the token from localStorage
// utils/auth.js
// utils/auth.js
export function getTokenFromStorage() {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  console.log('Token from storage:', token);
  
  return token;
}

 


// Eliminar Token del Almacenamiento Local al Cerrar Sesion

/* window.addEventListener('storage', event => {
  if (!event || !event.key === 'token') return
  const currentUrl = window.location.href
  console.log(`El usuario cerro sesión y se eliminó ${event.newValue} 
    de su almacenamiento`)
  try {
    sessionStorage.removeItem('user')
    alertify.success(`${currentUrl}`)
  } catch (error) {
    console.warn('[Error] No es posible eliminar user desde Session Storage:', error)
  }
}) */
