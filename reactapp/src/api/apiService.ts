import { useState } from "react";
import { tokenService } from "../utils/auth/tokenService";

const API_URL = "http://localhost:8000/api";

const getHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

const refreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) {
    throw new Error("Unauthorized");
  }
  const data = new FormData();
  data.append("refreshToken", refreshToken);
  fetch(`${API_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
    body: data,
  }).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        tokenService.setTokens(data.access, data.refresh);
      }
      );
    } else {
      throw new Error("Unauthorized");
    }
  });
}



const isError = (response: Response) => {
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

};


export const apiService = {
  get: async (endpoint: string, headers: HeadersInit = {}) => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      headers: {...getHeaders(), ...headers},
    });
    isError(response);
    return response.json();
  },

  post: async (endpoint: string, data: FormData, headers: HeadersInit = {}) => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: "POST",
      headers: {...getHeaders(), ...headers},
      body: data,
    });
    isError(response);
    return response.json();
  },

  put: async (endpoint: string, data: FormData, headers: HeadersInit = {}) => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: "PUT",
      headers: {...getHeaders(), ...headers},
      body: data,
    });
    isError(response);
    return response.json();
  },

  delete: async (endpoint: string, headers: HeadersInit = {}) => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: "DELETE",
      headers: {...getHeaders(), ...headers},
    });
    isError(response);
    return response.json();
  },
};
