import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/logo3.png" alt="PetConnect 로고" className="logo-image" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/">홈</Link></li>
        <li><Link to="/pets">애완동물</Link></li>
        <li><Link to="/board">게시판</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>

      {user ? (
        <div className="user-section">
          <span className="username">{user}님</span>
          <button className="login-button" onClick={onLogout}>로그아웃</button>
        </div>
      ) : (
        <button className="login-button" onClick={() => navigate('/login')}>로그인</button>
      )}
    </nav>
  );
};

export default NavBar;