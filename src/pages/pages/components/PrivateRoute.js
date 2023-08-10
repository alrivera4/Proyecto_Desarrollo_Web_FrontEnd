// PrivateRoute.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTokenFromStorage } from '../utils';

function PrivateRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = getTokenFromStorage();
    if (!token) {
      router.push('/pages/landing'); // Redirige a la página de inicio de sesión si no hay token
    }
  }, [router]);

  return <>{children}</>;
}

export default PrivateRoute;
