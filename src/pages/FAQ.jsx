import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: '이 사이트는 어떤 사용자를 위한 사이트인가요?',
    answer: '이 사이트는 반려동물을 사랑하고, 함께 살아가는 모든 사람들을 위한 정보와 소통의 공간이에요!',
  },
  {
    question: '동물들을 입양할 때 논란이 있는 사이트와 연결되지는 않았을까요?',
    answer: '아닙니다! 저희는 실제 동물보호센터와 연결해서 전혀 문제가 없어요요!.',
  },
  {
    question: '커뮤니티에서는 어떤 이야기를 나눌 수 있나요?',
    answer: '반려동물과 함께한 소중한 순간, 궁금한 점, 유용한 꿀팁을 공유할 수 있습니다! 누구든 자유롭게 이야기를 나누는 따듯한 공간이에요!',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page-content">
      <h2>❓ 자주 묻는 질문</h2>
      <p style={{ textAlign: 'center', marginBottom: '24px' }}>
        궁금한 점이 있으신가요? 아래에서 확인해보세요!
      </p>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className="faq-icon">{openIndex === index ? '▲' : '▼'}</span>
            </button>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
