import axiosInstance from "./axiosInstance";

const orderApi = {
  createOrder: async (orderData) => {
    const response = await axiosInstance.post("/orders", orderData);
    return response.data;
  },

  getAllOrders: async () => {
    const response = await axiosInstance.get("/orders");
    return response.data;
  },

  getOrderById: async (orderId) => {
    const response = await axiosInstance.get(`/orders/${orderId}`);
    return response.data;
  },

  getMyOrders: async (userId) => {
    const response = await axiosInstance.get(`/orders/user/${userId}`);
    return response.data;
  },

  updateOrderStatus: async (orderId, status) => {
    const response = await axiosInstance.put(`/orders/${orderId}/status`, { status });
    return response.data;
  },

  cancelOrder: async (orderId) => {
    const response = await axiosInstance.delete(`/orders/${orderId}`);
    return response.data;
  },
};

export default orderApi;
