import axiosInstance from "./axiosInstance";

const addressApi = {
  getAddressesByUser: async (userId) => {
    const response = await axiosInstance.get(`/addresses/user/${userId}`);
    return response.data;
  },

  addAddress: async (userId, addressData) => {
    const response = await axiosInstance.post(`/addresses/user/${userId}`, addressData);
    return response.data;
  },

  updateAddress: async (addressId, addressData) => {
    const response = await axiosInstance.put(`/addresses/${addressId}`, addressData);
    return response.data;
  },

  deleteAddress: async (addressId) => {
    const response = await axiosInstance.delete(`/addresses/${addressId}`);
    return response.data;
  },
};

export default addressApi;
