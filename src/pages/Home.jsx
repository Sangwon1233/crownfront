import React from "react";
import UploadBox from "../components/UploadBox.jsx"
import Header from "../components/layout/Header/Header.jsx";
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
          {/* Naver */}
          <a
            href="https://www.naver.com/"
            title="N 아이콘 제작자: Freepik - Flaticon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/8142/8142645.png"
              alt="Naver"
              className="share-icon"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            title="Instagram 아이콘 제작자: Laisa Islam Ani - Flaticon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
              alt="Instagram"
              className="share-icon"
            />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/"
            title="Twitter 아이콘 제작자: Fathema Khanom - Flaticon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png"
              alt="Twitter"
              className="share-icon"
            />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            title="Facebook 아이콘 제작자: Freepik - Flaticon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
              alt="Facebook"
              className="share-icon"
            />
          </a>

          {/* KakaoTalk */}
          <a
            href="https://www.kakaocorp.com/service/KakaoTalk"
            title="KakaoTalk 아이콘 제작자: Fathema Khanom - Flaticon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3669/3669973.png"
              alt="KakaoTalk"
              className="share-icon"
            />
          </a>
        </div>

        <button className="copy-link-button">
          링크 복사하기
        </button>
      </div>
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