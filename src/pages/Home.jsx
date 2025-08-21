import React from "react";
import UploadBox from "../components/UploadBox.jsx"
import Header from "../components/layout/Header/Header.jsx";
import CopyLinkButton from '../components/CopyLinkButton';
import '../styles/Home.css';import backgroundImage from '../assets/background.jpg';

const Home = () => {
  return (
    <div  className="home-container bg-cover bg-center min-h-screen"
     style={{ backgroundImage: `url(${backgroundImage})` }}>
      <br>
      </br>      <h1>관상 분석</h1>
      {/* 사용 방법 안내 섹션 */}
<div className="guide-section bg-white bg-opacity-90 rounded-xl shadow p-6 mt-8 mx-auto max-w-2xl">
  <h2 className="text-xl font-bold mb-4 flex items-center">
    <span className="mr-2">📖</span> 사용 방법
  </h2>
  <ol className="list-decimal list-inside text-gray-800 space-y-2 text-sm leading-relaxed">
    <li>
      <strong>이미지 업로드:</strong> 정면을 향한 선명한 얼굴 사진을 업로드하세요 
      <span className="text-gray-600"> (2MB 이하, JPG/PNG 형식)</span>
    </li>
    <li>
      <strong>AI 모델 선택:</strong> GPT(OpenAI) 또는 Gemini(Google) 중 원하는 분석 모델을 선택하세요
    </li>
    <li>
      <strong>분석 유형 선택:</strong>
      <ul className="list-disc list-inside ml-5 space-y-1 mt-1">
        <li><strong>측정값 분석:</strong> 얼굴의 수치적 특징을 분석합니다</li>
        <li><strong>얼굴 라인 표시:</strong> 얼굴의 주요 특징점에 선을 그어 표시합니다</li>
        <li><strong>관상 해석:</strong> AI가 관상학적 관점에서 성격과 운세를 해석합니다</li>
      </ul>
    </li>
    <li>
      <strong>결과 확인:</strong> 분석 결과와 함께 표시된 이미지를 확인하세요
    </li>
  </ol>
</div>
      <UploadBox /> {/* Self-closing tag */}
      Add the Hashtags section
      <div className="hashtags">
        <span>#Hashtags #Follow #Like</span>
        <span>#관상 MBTI #얼굴 MBTI #관상은 과학</span>
      </div>
      {/* Add the Share section */}
      
      {/* 공유하기 섹션 비활성화 */}
      {false && (
        <div className="share-section">
          <div className="share-text">공유하기</div>
          <div className="share-icons">
            <a href="https://www.naver.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/8142/8142645.png" alt="Naver" className="share-icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" alt="Instagram" className="share-icon" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png" alt="Twitter" className="share-icon" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" className="share-icon" />
            </a>
            <a href="https://www.kakaocorp.com/service/KakaoTalk" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/3669/3669973.png" alt="KakaoTalk" className="share-icon" />
            </a>
          </div>
          <CopyLinkButton />
        </div>
      )}
      {/* Add the Disclaimer text */}
      <div className="disclaimer-text">
        * 사진은 시스템에 절대 저장되지 않습니다.<br />
        * 현실 반영되어 각도, 배경에 따라 결과가 다르게 나타날 수 있습니다.<br />
        * 결과 공유를 통해 정확도를 확인해보세요.
      </div>
    </div>
  );
};

export default Home;