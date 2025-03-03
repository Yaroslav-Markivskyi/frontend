import { Navigate, Outlet } from "react-router-dom";
import { tokenService } from "../../utils/auth/tokenService";

const UnProtectedRoute = () => {
  
  const accessToken = tokenService.getAccessToken();
  return accessToken ? <Navigate to="/" /> : <Outlet />;
};

export default UnProtectedRoute;

