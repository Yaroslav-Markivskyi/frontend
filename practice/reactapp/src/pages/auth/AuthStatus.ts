import { useNavigate } from "react-router-dom";
import { apiService } from "../../api/apiService";
import { tokenService } from "../../utils/auth/tokenService";

const AuthStatus = () => {
    const navigate = useNavigate();

    const loginUser = async (email: string, password: string) => {
        try {
            const response = await apiService.post("users/token/", { email, password });
            tokenService.setTokens(response.access, response.refresh);
            navigate("/");
        } catch (error) {
            return "Invalid email or password";
        }
    }
    return { loginUser };
};

export default AuthStatus;