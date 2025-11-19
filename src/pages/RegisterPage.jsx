import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../api/authApi";
import { Button } from "../components/common/Button";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
        phone: formData.phone || null,
        role: "CUSTOMER",
      };

      await authApi.register(payload);

      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Registration failed.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600 p-6">

      {/* CARD */}
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Sign Up
        </h2>

        {/* Error */}
        {error && (
          <p className="text-red-600 bg-red-100 p-3 rounded mb-4 text-center text-sm">
            {error}
          </p>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div className="relative">
            <span className="absolute left-4 top-3 text-purple-600 text-xl">
              👤
            </span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 pl-12 rounded-full bg-gray-100 border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <span className="absolute left-4 top-3 text-purple-600 text-xl">
              📧
            </span>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 pl-12 rounded-full bg-gray-100 border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <span className="absolute left-4 top-3 text-purple-600 text-xl">
              🔒
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
              className="w-full p-3 pl-12 rounded-full bg-gray-100 border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <span className="absolute left-4 top-3 text-purple-600 text-xl">
              📱
            </span>
            <input
              type="text"
              name="phone"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 pl-12 rounded-full bg-gray-100 border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          {/* Button */}
          <Button
            variant="primary"
            type="submit"
            disabled={loading}
            className="w-full py-3"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>

        {/* Bottom Link */}
        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-purple-600 font-semibold cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
