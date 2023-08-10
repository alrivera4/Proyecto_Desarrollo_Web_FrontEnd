// PrivateRoute.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function PrivateRoute({ children }) {

  return <>{children}</>;
}

export default PrivateRoute;
