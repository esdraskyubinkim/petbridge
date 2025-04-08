import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PetCategory.css';

const PetCategory = () => {
  const navigate = useNavigate();

  return (
    <div className="pet-category-container">
      <h2>애완동물 카테고리</h2>
      <div className="category-list">
        <button onClick={() => navigate('/pet/abandoned')}>유기동물들</button>
        <button onClick={() => navigate('/pet/fish')}>물고기</button>
        <button onClick={() => navigate('/pet/reptile')}>파충류</button>
      </div>
    </div>
  );
};

export default PetCategory;