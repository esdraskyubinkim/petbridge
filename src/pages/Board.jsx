import React, { useState, useEffect, useRef } from 'react';
import './PageStyle.css';

const Board = ({ user }) => {
  const [chat, setChat] = useState('');
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(user || '익명');
  const [image, setImage] = useState(null); // 이미지 파일 상태
  const chatEndRef = useRef(null);

  // 유저 정보 가져오기
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("유저 파싱 오류", e);
        setCurrentUser('익명');
      }
    }
  }, []);

  // 채팅 기록 가져오기
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.error("채팅 파싱 오류", e);
        setMessages([]);
      }
    }
  }, []);

  // 메시지 변경 시 저장 + 스크롤 이동
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // base64 저장
      };
      reader.readAsDataURL(file);
    } else {
      alert("이미지 파일만 첨부할 수 있어요.");
    }
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chat.trim() && !image) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMsg = {
      user: currentUser,
      text: chat,
      image: image || null,
      time,
    };

    setMessages((prevMessages) => [...prevMessages, newMsg]);
    setChat('');
    setImage(null); // 이미지 초기화
  };

  return (
    <div className="page-content">
      <h2>💬 게시판 (채팅 포함)</h2>
      <div className="chat-box">
        {messages.length === 0 ? (
          <p style={{ color: '#888', textAlign: 'center' }}>아직 메시지가 없어요. 첫 메시지를 남겨보세요!</p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className="chat-message">
              <strong>{msg.user}</strong>{' '}
              <span style={{ color: '#888', fontSize: '0.85em' }}>[{msg.time}]</span>
              <div>{msg.text}</div>
              {msg.image && (
                <img
                  src={msg.image}
                  alt="첨부 이미지"
                  style={{ maxWidth: '200px', marginTop: '8px', borderRadius: '8px' }}
                />
              )}
            </div>
          ))
        )}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleChatSubmit} className="chat-form" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <input
          type="text"
          placeholder="메시지를 입력하세요..."
          value={chat}
          onChange={(e) => setChat(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">전송</button>
      </form>
    </div>
  );
};

export default Board;