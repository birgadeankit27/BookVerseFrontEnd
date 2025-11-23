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
    const response = await axiosInstance.get(`/books/${bookId}`);
    return response.data;
  },

  addBook: async (bookData) => {
    const response = await axiosInstance.post("/books", bookData);
    return response.data;
  },

  updateBook: async (bookId, bookData) => {
    const response = await axiosInstance.put(`/books/${bookId}`, bookData);
    return response.data;
  },

  deleteBook: async (bookId) => {
    const response = await axiosInstance.delete(`/books/${bookId}`);
    return response.data;
  },
};

export default bookApi;
