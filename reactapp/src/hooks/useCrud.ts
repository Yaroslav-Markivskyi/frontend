import { useState, useEffect } from "react";
import { apiService } from "../api/apiService";
import { tokenService } from "../utils/auth/tokenService";


export const useCrud = (endpoint: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const accessToken = tokenService.getAccessToken();
  const [refreshTokenUpdated, setRefreshTokenUpdated] = useState<boolean>(false);


  const getAuthHeaders = (): HeadersInit => {  
      return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
  };


  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await apiService.get(endpoint, getAuthHeaders());
      setData(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  const createItem = async (item: any) => {
    try {
      const newItem = await apiService.post(endpoint, item,  getAuthHeaders());
      setData((prev) => [...prev, newItem]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    }
  };

  const updateItem = async (id: string, item: any) => {
    try {
      const updatedItem = await apiService.put(`${endpoint}/${id}`, item, getAuthHeaders());
      setData((prev) => prev.map((d) => (d.id === id ? updatedItem : d)));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    }
  };

  const deleteItem = async (id: string) => {
    try {
      await apiService.delete(`${endpoint}/${id}`, getAuthHeaders());
      setData((prev) => prev.filter((d) => d.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint, accessToken]);

  return { data, loading, error, fetchData, createItem, updateItem, deleteItem };
};
