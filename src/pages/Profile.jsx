import React from 'react';
import './PageStyle.css';

const Profile = ({ currentUser }) => {
  return (
    <div className="page-content">
      <h2>프로필</h2>
      <p><strong>사용자명:</strong> {currentUser}</p>
    </div>
  );
};

export default Profile;