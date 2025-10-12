import axiosInstance from "./axiosInstance";

const paymentApi = {
  initiatePayment: async (paymentData) => {
    const response = await axiosInstance.post("/payments/initiate", paymentData);
    return response.data;
  },

  verifyPayment: async (verificationData) => {
    const response = await axiosInstance.post("/payments/verify", verificationData);
    return response.data;
  },

  getPaymentHistory: async (userId) => {
    const response = await axiosInstance.get(`/payments/user/${userId}`);
    return response.data;
  },
};

export default paymentApi;
