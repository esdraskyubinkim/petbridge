import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const isValidPassword = (pw) => {
    return pw.length >= 8 && /[A-Za-z]/.test(pw) && /[0-9]/.test(pw);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!isValidPassword(password)) {
      alert('비밀번호는 최소 8자 이상이며, 숫자와 영문자를 포함해야 합니다.');
      return;
    }

    if (password !== confirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u) => u.username === username)) {
      alert('이미 존재하는 사용자입니다.');
      return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('회원가입 성공! 로그인 해주세요.');
    navigate('/login');
  };

  return (
    <div className={styles.pageContent}>
      <h2 className={styles.title}>회원가입</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          className={styles.InputField}
          placeholder="사용자 이름"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required  
        />

        <input
          type="password"
          className={styles.InputField}
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          className={styles.InputField}
          placeholder="비밀번호 확인"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <button type="submit" className={styles.loginButton} >가입하기</button>
      </form>
    </div>
  );
};

export default Signup;
