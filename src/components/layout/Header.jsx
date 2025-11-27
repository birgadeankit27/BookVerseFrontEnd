// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const { user, logout } = useAuth();
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="w-full shadow-sm bg-indigo-950 text-indigo-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
        
//         {/* Logo */}
//         <Link to="/" className="text-xl font-bold text-purple-300">
//           BookVerse
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-6 text-base">
//           <Link to="/" className="hover:text-purple-300">Home</Link>
//           <Link to="/books" className="hover:text-purple-300">Books</Link>
//           <Link to="/cart" className="hover:text-purple-300">Cart</Link>

//           {user ? (
//             <div className="flex items-center gap-3">
//               <span className="font-medium">Hi, {user.username}</span>
//               <button
//                 onClick={logout}
//                 className="px-3 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="px-3 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="px-3 py-1.5 border border-purple-400 text-purple-300 rounded-md hover:bg-purple-300 hover:text-indigo-900 text-sm"
//               >
//                 Register
//               </Link>
//               {user?.roles?.includes("ROLE_ADMIN") && (
//   <Link to="/admin/dashboard" className="hover:text-purple-400">
//     Admin
//   </Link>
// )}
//             </>
//           )}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-purple-300" onClick={() => setOpen(!open)}>
//           {open ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-indigo-900 px-4 pb-3">
//           <nav className="flex flex-col gap-3 text-base">
//             <Link to="/" onClick={() => setOpen(false)} className="hover:text-purple-300">Home</Link>
//             <Link to="/books" onClick={() => setOpen(false)} className="hover:text-purple-300">Books</Link>
//             <Link to="/cart" onClick={() => setOpen(false)} className="hover:text-purple-300">Cart</Link>

//             {user ? (
//               <>
//                 <span className="font-medium">Hi, {user.username}</span>
//                 <button
//                   onClick={() => { logout(); setOpen(false); }}
//                   className="px-3 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 w-fit text-sm"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   onClick={() => setOpen(false)}
//                   className="px-3 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 w-fit text-sm"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   onClick={() => setOpen(false)}
//                   className="px-3 py-1.5 border border-purple-400 text-purple-300 rounded-md hover:bg-purple-300 hover:text-indigo-900 w-fit text-sm"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-indigo-950 text-indigo-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-purple-300">
          BookVerse
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-base">
          <Link to="/" className="hover:text-purple-300">Home</Link>
          <Link to="/books" className="hover:text-purple-300">Books</Link>
          <Link to="/cart" className="hover:text-purple-300">Cart</Link>

          {/* 🔥 Admin Link Must Be Inside Logged-in Block */}
          {user ? (
            <div className="flex items-center gap-4">
              {user.roles?.includes("ROLE_ADMIN") && (
                <Link to="/admin/dashboard" className="hover:text-purple-300 font-medium">
                  Admin
                </Link>
              )}

              <span className="font-medium">Hi, {user.username}</span>
              <button
                onClick={logout}
                className="px-3 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-3 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-3 py-1.5 border border-purple-400 text-purple-300 rounded-md hover:bg-purple-300 hover:text-indigo-900 text-sm"
              >
                Register
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-purple-300" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-indigo-900 px-4 pb-3">
          <nav className="flex flex-col gap-3 text-base">
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-purple-300">Home</Link>
            <Link to="/books" onClick={() => setOpen(false)} className="hover:text-purple-300">Books</Link>
            <Link to="/cart" onClick={() => setOpen(false)} className="hover:text-purple-300">Cart</Link>

            {user && user.roles?.includes("ROLE_ADMIN") && (
              <Link
                to="/admin/dashboard"
                onClick={() => setOpen(false)}
                className="hover:text-purple-300"
              >
                Admin
              </Link>
            )}

            {user ? (
              <>
                <span className="font-medium">Hi, {user.username}</span>
                <button
                  onClick={() => { logout(); setOpen(false); }}
                  className="px-3 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 w-fit text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="px-3 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 w-fit text-sm"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="px-3 py-1.5 border border-purple-400 text-purple-300 rounded-md hover:bg-purple-300 hover:text-indigo-900 w-fit text-sm"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
