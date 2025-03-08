import { Route } from 'react-router-dom';
import Login from '../../pages/auth/Login';
import SignUp from '../../pages/auth/SignUp';
import UnProtectedRoute from '../../components/protectedRoute/UnprotectedRoute';

export default function UnProtectedRoutes() {
  return (
    <Route element={<UnProtectedRoute />}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  );
}
