// Centralized routing (React Router placeholder)
// Example:
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "../pages/HomePage.jsx";
// export default function AppRoutes() { ... }
// routes/AppRoutes.jsx
// routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import BooksPage from "../pages/BooksPage";
import BookDetailPage from "../pages/BookDetailPage";
// If AdminRoute is inside routes folder:
import AdminRoute from "./AdminRoute";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import AdminBooksPage from "../pages/admin/AdminBooksPage";
import AdminOrdersPage from "../pages/admin/AdminOrdersPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/books" element={<BooksPage/>} />
          <Route path="/books/:id" element={<BookDetailPage />} />
      <Route path="/cart" element={<div>Cart Page</div>} />

      {/* Admin Protected Routes */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminDashboardPage />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/manage-books"
        element={
          <AdminRoute>
            <AdminBooksPage />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/manage-orders"
        element={
          <AdminRoute>
            <AdminOrdersPage />
          </AdminRoute>
        }
      />
      
    </Routes>
  );
}
