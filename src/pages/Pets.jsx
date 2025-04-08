import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Pets.css';
import './PageStyle.css';

const Pets = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const renderCategory = () => {
    switch (location.pathname) {
      case '/pet/abandoned':
        return (
          <div className="pet-content">
            <h2>유기동물 목록</h2>
            <p>유기동물 데이터를 여기에 표시할 수 있어요.</p>
          </div>
        );
      case '/pet/fish':
        return (
          <div className="pet-content">
            <h2>물고기 목록</h2>
            <p>물고기 데이터를 여기에 표시할 수 있어요.</p>
          </div>
        );
      case '/pet/reptile':
        return (
          <div className="pet-content">
            <h2>파충류 목록</h2>
            <p>파충류 데이터를 여기에 표시할 수 있어요.</p>
          </div>
        );
      default:
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
    }
  };

  return <div className="pets-page">{renderCategory()}</div>;
};

export default Pets;