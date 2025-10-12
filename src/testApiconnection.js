import axiosInstance from "./api/axiosInstance";

export async function testApiConnection() {
  try {
    const response = await axiosInstance.get("/books");
    console.log("✅ API Connected! Response:", response.data);
  } catch (error) {
    console.error("❌ API Connection failed:", error);
  }
}
