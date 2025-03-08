import { apiService } from "../../api/apiService";
import { tokenService } from "../../utils/auth/tokenService";

const POSTS_ENDPOINT = "posts/";

const getAuthHeaders = (): HeadersInit => {
  const accessToken = tokenService.getAccessToken();
  return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
};

const postService = {
  getPosts: () => apiService.get(POSTS_ENDPOINT, getAuthHeaders()),
  getPost: (id: string) => apiService.get(`${POSTS_ENDPOINT}${id}/`, getAuthHeaders()),
  createPost: (data: FormData) => 
    apiService.post(POSTS_ENDPOINT, data, {
      ...getAuthHeaders(),
    }),
  
  updatePost: (id: string, data: FormData) => 
    apiService.put(`${POSTS_ENDPOINT}${id}/`, data, {
      ...getAuthHeaders(),
      "Content-Type": "multipart/form-data",
    }),
  deletePost: (id: string) => apiService.delete(`${POSTS_ENDPOINT}${id}/`, getAuthHeaders()),
};

export default postService;
