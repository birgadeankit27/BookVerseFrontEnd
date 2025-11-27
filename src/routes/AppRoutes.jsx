
import { Routes, Route } from "react-router-dom";

// ✅ Added ProtectedRoute for authentication-based routing
import ProtectedRoute from "../components/common/ProtectedRoute";

import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import BooksPage from "../pages/BooksPage";
import BookDetailPage from "../pages/BookDetailPage";

import OrdersPage from "../pages/OrdersPage"; // 👈 make sure this path is correct

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

      {/* ✅ Orders page route */}
      <Route path="/orders" element={<OrdersPage />} />

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
