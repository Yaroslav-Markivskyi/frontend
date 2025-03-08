import { Route } from 'react-router-dom';
import UnProtectedRoutes from './unProtectedRouters';
import ProtectedRoutes from './protectedRouters';

export default function AppRoutes() {
  return (
    <>
      <UnProtectedRoutes />
      <ProtectedRoutes />
    </>
  );
}
