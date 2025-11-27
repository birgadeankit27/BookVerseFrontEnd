 import axiosInstance from "./axiosInstance";

const bookApi = {

  getAllBooks: async () => {
    try {
      const response = await axiosInstance.get("/api/books/getAll");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch books:", error.response?.data || error.message);
      throw error;
    }
  },

  getBookById: async (bookId) => {
    const response = await axiosInstance.get(`/api/books/${bookId}`);
    return response.data;
  },

  addBook: async (bookData) => {
    const response = await axiosInstance.post("/api/books/add", bookData);
    return response.data;
  },

  updateBook: async (bookId, bookData) => {
    const response = await axiosInstance.put(`/api/books/${bookId}`, bookData);
    return response.data;
  },

  deleteBook: async (id) => {
  const res = await axiosInstance.delete(`/api/books/${id}`);
  return res.status; // return status instead of data
},

};

export default bookApi;
