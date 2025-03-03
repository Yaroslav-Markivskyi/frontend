const API_URL = "http://localhost:8000/api";

export const apiService = {
  get: async (endpoint: string, headers: HeadersInit = {}) => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      headers,
    });
    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
  },

  post: async (endpoint: string, data: any, headers: HeadersInit = {}) => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create data");
    return response.json();
  },

  put: async (endpoint: string, data: any, headers: HeadersInit = {}) => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update data");
    return response.json();
  },

  delete: async (endpoint: string, headers: HeadersInit = {}) => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: "DELETE",
      headers,
    });
    if (!response.ok) throw new Error("Failed to delete data");
    return response.json();
  },
};
