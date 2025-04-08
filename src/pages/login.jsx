import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './common.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 사용자 정보 불러오기
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u) => u.username === username);

    if (!user) {
      alert('존재하지 않는 사용자입니다.');
      return;
    }

    if (user.password !== password) {
      alert('비밀번호가 틀렸습니다.');
      return;
    }

    // 로그인 상태 설정 및 로컬스토리지 저장
    onLogin(username); // App.js에 전달
    localStorage.setItem('user', JSON.stringify(username)); // 새로고침 시 유지
    navigate('/');
  };

  return (
    <div className="page-content">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="사용자 이름"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <div className="password-input">
          <input
            type="password"
            className="form-input"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="form-button">로그인</button>
      </form>

      <p className="link-text">
        아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
      </p>
    </div>
  );
};

export default Login;