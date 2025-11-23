// Centralized routing (React Router placeholder)
// Example:
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "../pages/HomePage.jsx";
// export default function AppRoutes() { ... }
// routes/AppRoutes.jsx
// routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";

// ✅ Added ProtectedRoute for authentication-based routing
import ProtectedRoute from "../components/common/ProtectedRoute";

import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import BooksPage from "../pages/BooksPage";
import BookDetailPage from "../pages/BookDetailPage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route path="/books" element={<BooksPage/>} />

          <Route path="/books/:id" element={<BookDetailPage />} />

      {/* ✅ Protected route added — only logged-in users can access Cart */}
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <div>Cart Page</div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
