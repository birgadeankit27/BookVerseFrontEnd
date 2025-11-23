import React, { useState } from "react";
import authApi from "../api/authApi";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const data = await authApi.login({ email, password });

    // Backend returns: accessToken, refreshToken, id, email, name, roles
    if (data.accessToken) {
      const user = {
        id: data.id,
        email: data.email,
        name: data.name,
        roles: data.roles
      };

      login(user, data.accessToken); // save to context & localStorage
    } else {
      setError("Login failed: No token received");
    }
  } catch (err) {
    setError(err.response?.data?.message || "Invalid credentials");
    setLoading(false);
  }
};


//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block mb-1 font-medium">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1 font-medium">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
return (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-300">
    <div className="bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-md border border-white/50">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Login
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 mb-4 rounded-lg border border-red-300">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Email Input */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 bg-white rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2.5 rounded-lg shadow-md hover:bg-indigo-700 active:scale-[.98] transition-all duration-200 font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>
    </div>
  </div>
);
}
export default LoginPage;
