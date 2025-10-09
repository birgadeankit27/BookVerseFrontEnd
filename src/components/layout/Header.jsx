import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function Header() {
  const { user, login, logout } = useAuth();
  const { cartItems } = useCart();

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        background: '#f0f0f0',
      }}
    >
      {/* Left Links */}
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
      </div>

      {/* Right Side: Auth + Cart */}
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <span>🛒 Cart: {cartItems.length}</span>
        {user ? (
          <>
            <span>Hi {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button
            onClick={() =>
              login({ name: 'Demo User', email: 'demo@example.com' })
            }
          >
            Login as Demo
          </button>
        )}
      </div>
    </nav>
  );
}

export default Header;

