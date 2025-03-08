import { apiService } from "../../api/apiService";
import { tokenService } from "../../utils/auth/tokenService";

const PROFILE_ENDPOINT = "users/user/";

const getAuthHeaders = (): HeadersInit => {
    const accessToken = tokenService.getAccessToken();
    return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
  };
  
const profileService = {
    getProfile: () => apiService.get(PROFILE_ENDPOINT, getAuthHeaders()),
    updateProfile: (data: any) => apiService.put(PROFILE_ENDPOINT, data, getAuthHeaders()),
  };

export default profileService;
