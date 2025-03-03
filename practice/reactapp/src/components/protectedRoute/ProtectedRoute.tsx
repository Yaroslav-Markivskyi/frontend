import { Navigate, Outlet } from "react-router-dom";
import { tokenService } from "../../utils/auth/tokenService";

const ProtectedRoute = () => {
  
  const accessToken = tokenService.getAccessToken();
  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

