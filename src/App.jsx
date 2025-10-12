import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axiosInstance from "./api/axiosInstance"; // ✅ Import your axios instance

export default function App() {
  useEffect(() => {
    // ✅ Test API connection on load
    const testApiConnection = async () => {
      try {
        const response = await axiosInstance.get("/books");
        console.log("✅ API Connected! Response:", response.data);
      } catch (error) {
        console.error("❌ API Connection failed:", error);
      }
    };

    testApiConnection();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to My Vite + React + MUI App 🚀
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
}
