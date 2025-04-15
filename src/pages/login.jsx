import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

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

    onLogin(username);
    localStorage.setItem('user', JSON.stringify(username));
    navigate('/');
  };

  return (
    <div className={styles.pageContent}>
      <h2 className={styles.title}>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.formInput}
          placeholder="사용자 이름"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <div className={styles.passwordInput}>
          <input
            type="password"
            className={styles.passwordInputField}
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* 나중에 토글 버튼 추가 가능 */}
        </div>

        <button type="submit" className={styles.loginButton}>
          로그인
        </button>
      </form>

      <p className={styles.linkText}>
        아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
      </p>
    </div>
  );
};

export default Login;
