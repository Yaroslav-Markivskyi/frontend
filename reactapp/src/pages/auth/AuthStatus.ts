import { useNavigate } from "react-router-dom";
import { apiService } from "../../api/apiService";
import { tokenService } from "../../utils/auth/tokenService";

const AuthStatus = () => {
    const navigate = useNavigate();

    const loginUser = async (email: string, password: string) => {
        const data = new FormData();
        data.append("email", email);
        data.append("password", password);
        try {
            const response = await apiService.post("users/token/", data);
            tokenService.setTokens(response.access, response.refresh);
            navigate("/");
        } catch (error) {
            return "Invalid email or password";
        }
    }
    return { loginUser };
};

export default AuthStatus;