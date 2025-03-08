import { apiService } from "../../api/apiService";
import { tokenService } from "../../utils/auth/tokenService";

const POSTS_ENDPOINT = "orders";

const getAuthHeaders = (): HeadersInit => {
    const accessToken = tokenService.getAccessToken();
    return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
  };


const historyService = {
    getCustomerHistory: () => apiService.get(`${POSTS_ENDPOINT}/customer/`, getAuthHeaders()),
    getSellerHistory: () => apiService.get(`${POSTS_ENDPOINT}/seller/`, getAuthHeaders()),
};

export default historyService;