import axiosInstance from "./axiosInstance";

const cartApi = {
  getCartByUser: async (userId) => {
    const response = await axiosInstance.get(`/cart/${userId}`);
    return response.data;
  },

  addToCart: async (userId, bookId, quantity = 1) => {
    const response = await axiosInstance.post(`/cart/${userId}/add`, { bookId, quantity });
    return response.data;
  },

  updateCartItem: async (userId, cartItemId, quantity) => {
    const response = await axiosInstance.put(`/cart/${userId}/update/${cartItemId}`, { quantity });
    return response.data;
  },

  removeCartItem: async (userId, cartItemId) => {
    const response = await axiosInstance.delete(`/cart/${userId}/remove/${cartItemId}`);
    return response.data;
  },

  clearCart: async (userId) => {
    const response = await axiosInstance.delete(`/cart/${userId}/clear`);
    return response.data;
  },
};

export default cartApi;
