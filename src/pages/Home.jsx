import React from "react";
import UploadBox from "../components/UploadBox.jsx"
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>관상 분석</h1>
      <UploadBox /> {/* Self-closing tag */}
      {/* Add the Hashtags section */}
      <div className="hashtags">
          <span>#Hashtags #Follow #Like</span>
          <span>#관상 MBTI #얼굴 MBTI #관상은 과학</span>
      </div>
      {/* Add the Share section */}
      <div className="share-section">
        <div className="share-text">공유하기</div>
        <div className="share-icons">
          {/* Replace with actual social media icons or SVGs */}
          <img src="/path/to/naver_icon.png" alt="Naver" className="share-icon" />
          <img src="/path/to/instagram_icon.png" alt="Instagram" className="share-icon" />
          <img src="/path/to/twitter_icon.png" alt="Twitter" className="share-icon" />
          <img src="/path/to/facebook_icon.png" alt="Facebook" className="share-icon" />
          <img src="/path/to/kakao_talk_icon.png" alt="KakaoTalk" className="share-icon" />
        </div>
        <button className="copy-link-button">
          링크 복사하기
        </button>
      </div>
      {/* Add the Disclaimer text */}
      <div className="disclaimer-text">
        * 사진은 시스템에 절대 저장되지 않습니다.<br/>
        * 현실 반영되어 각도, 배경에 따라 결과가 다르게 나타날 수 있습니다.<br/>
        * 결과 공유를 통해 정확도를 확인해보세요.
      </div>
    </div>
  );
};

export default Home;