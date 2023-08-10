// PrivateRoute.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTokenFromStorage } from '../utils';

function PrivateRoute({ children }) {

  return <>{children}</>;
}

export default PrivateRoute;
