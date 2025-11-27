
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Book, ShoppingCart, LayoutDashboard,Users, Settings } from "lucide-react";

export default function AdminDashboardPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-indigo-100 p-6 space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <LayoutDashboard size={26} /> Admin Panel
        </h2>

        <nav className="space-y-4">
          <Link
            to="/admin/dashboard"
            className="block py-2 px-3 rounded hover:bg-indigo-700"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/manage-books"
            className="flex items-center gap-3 py-2 px-3 rounded hover:bg-indigo-700"
          >
            <Book size={20} /> Manage Books
          </Link>

          <Link
            to="/admin/manage-orders"
            className="flex items-center gap-3 py-2 px-3 rounded hover:bg-indigo-700"
          >
            <ShoppingCart size={20} /> Manage Orders
          </Link>
          
           <Link to="/admin/users" className="flex items-center gap-3 p-2 rounded hover:bg-indigo-800">
             <Users size={20} /> Users
           </Link>

           <Link to="/admin/settings" className="flex items-center gap-3 p-2 rounded hover:bg-indigo-800">
             <Settings size={20} /> Settings
           </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>

        <p className="text-gray-700 mb-8">
          Welcome, 👋<span className="font-semibold">{user?.name}</span>.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

          <Link
            to="/admin/manage-books"
            className="bg-white shadow-md p-6 rounded-xl flex justify-between items-center hover:shadow-lg transition cursor-pointer"
          >
            <div>
              <p className="text-gray-600">Manage</p>
              <h2 className="text-xl font-bold">Books</h2>
            </div>
            <Book className="text-indigo-700" size={40} />
          </Link>

          <Link
            to="/admin/manage-orders"
            className="bg-white shadow-md p-6 rounded-xl flex justify-between items-center hover:shadow-lg transition cursor-pointer"
          >
            <div>
              <p className="text-gray-600">Manage</p>
              <h2 className="text-xl font-bold">Orders</h2>
            </div>
            <ShoppingCart className="text-green-700" size={40} />
          </Link>

        </div>

      </main>
    </div>
  );
}
