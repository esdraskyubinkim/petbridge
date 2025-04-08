import React, { useState } from 'react';
import './PageStyle.css';

const ALLOWED_USERS = ['admin', '리온']; // 여기에 등록 가능한 사용자 추가

const PetRegister = ({ currentUser }) => {
  const [petName, setPetName] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`'${petName}' 등록 완료!`);
    setPetName('');
  };

  if (!ALLOWED_USERS.includes(currentUser)) {
    return (
      <div className="page-content">
        <h2>접근 불가</h2>
        <p>이 페이지에 접근할 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="page-content">
      <h2>반려동물 등록</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="반려동물 이름"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          required
        />
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
};

export default PetRegister;
