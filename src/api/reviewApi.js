import axiosInstance from "./axiosInstance";

const reviewApi = {
  addReview: async (bookId, reviewData) => {
    const response = await axiosInstance.post(`/reviews/book/${bookId}`, reviewData);
    return response.data;
  },

  getReviewsByBook: async (bookId) => {
    const response = await axiosInstance.get(`/reviews/book/${bookId}`);
    return response.data;
  },

  deleteReview: async (reviewId) => {
    const response = await axiosInstance.delete(`/reviews/${reviewId}`);
    return response.data;
  },
};

export default reviewApi;
