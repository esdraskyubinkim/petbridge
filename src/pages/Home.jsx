import React from 'react';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
  return (
    <div className="page-content">
      <ImageSlider />
      <p>현재 입양이된 애완동물들!</p>
    </div>
  );
};

export default Home;