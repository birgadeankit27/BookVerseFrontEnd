import axios from "axios";

// Get base URL from environment
const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api";

// Create Axios instance
const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: attach token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or sessionStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: optional for 401 handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("Unauthorized! Token might be invalid or expired.");
      // Optionally redirect to login or remove token
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
