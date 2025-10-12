import axiosInstance from "./axiosInstance";

const categoryApi = {
  getAllCategories: async () => {
    const response = await axiosInstance.get("/categories");
    return response.data;
  },

  getCategoryById: async (categoryId) => {
    const response = await axiosInstance.get(`/categories/${categoryId}`);
    return response.data;
  },

  addCategory: async (categoryData) => {
    const response = await axiosInstance.post("/categories", categoryData);
    return response.data;
  },

  updateCategory: async (categoryId, categoryData) => {
    const response = await axiosInstance.put(`/categories/${categoryId}`, categoryData);
    return response.data;
  },

  deleteCategory: async (categoryId) => {
    const response = await axiosInstance.delete(`/categories/${categoryId}`);
    return response.data;
  },
};

export default categoryApi;
