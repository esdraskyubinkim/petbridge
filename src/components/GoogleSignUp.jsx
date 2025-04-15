import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const GoogleSignUp = () => {
  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User:", user);
      alert(`${user.displayName} 님 환영합니다!`);
      // 여기서 DB 저장하거나 바로 로그인 처리 가능
    } catch (error) {
      console.error("Google Sign-Up Error:", error);
    }
  };

  return (
    <button onClick={handleGoogleSignUp} style={{ backgroundColor: '#DB4437', color: 'white', padding: '10px 16px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
      Google 계정으로 회원가입
    </button>
  );
};

export default GoogleSignUp;