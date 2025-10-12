import axiosInstance from "./axiosInstance";

const userApi = {
  getAllUsers: async () => {
    const response = await axiosInstance.get("/users");
    return response.data;
  },

  getUserById: async (userId) => {
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data;
  },

  updateUser: async (userId, userData) => {
    const response = await axiosInstance.put(`/users/${userId}`, userData);
    return response.data;
  },

  deleteUser: async (userId) => {
    const response = await axiosInstance.delete(`/users/${userId}`);
    return response.data;
  },
};

export default userApi;
