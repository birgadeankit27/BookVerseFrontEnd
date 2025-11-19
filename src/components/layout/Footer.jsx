import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-indigo-200 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-purple-300">BookVerse</h2>
          <p className="mt-2 text-indigo-300 text-sm">
            © {new Date().getFullYear()} BookVerse — All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-purple-200">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/about" className="hover:text-purple-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-purple-300">Contact</a></li>
            <li><a href="/terms" className="hover:text-purple-300">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-purple-200">Follow Us</h3>
          <div className="flex items-center gap-3 mt-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
              <a
                key={i}
                className="p-2.5 bg-indigo-800 rounded-full hover:bg-purple-400 hover:text-indigo-950 transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="mt-8 border-t border-indigo-800 pt-3 text-center text-xs text-indigo-400">
        Crafted with ❤️ for BookVerse
      </div>
    </footer>
  );
}
