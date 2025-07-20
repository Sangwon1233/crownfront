import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Header.css';
import torchVideo from '../../../assets/torchEdit.mp4';

const Header = ({ 
  pageTitle = "손금으로 보는 운세 분석", 
  pageDescription = "AI 기술로 손금을 분석하여 정확한 운세를 제공합니다. 사주, 띠별 운세, 오늘의 운세까지 한번에 확인하세요.",
  pageKeywords = "손금, 운세, 사주, 띠별운세, AI손금분석, 오늘의운세, 무료운세",
  currentPath = "/"
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // 메뉴 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.hamburger-menu') && !event.target.closest('.dropdown-menu')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // 키보드 접근성
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
    }
  };

  const canonicalUrl = `https://yoursite.com${currentPath}`;

  return (
    <>
      <Helmet>
        {/* 기본 메타 태그 */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="author" content="운세분석 서비스" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="ko" />
        <meta name="revisit-after" content="1 days" />
        
        {/* 캐노니컬 URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph 메타 태그 (Facebook, 카카오톡 등) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="손금 운세 분석" />
        <meta property="og:image" content="https://yoursite.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="손금 운세 분석 서비스" />
        <meta property="og:locale" content="ko_KR" />
        
        {/* Twitter Card 메타 태그 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://yoursite.com/twitter-image.jpg" />
        <meta name="twitter:image:alt" content="손금 운세 분석 서비스" />
        
        {/* 모바일 최적화 */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* 브랜딩 */}
        <meta name="theme-color" content="#667eea" />
        <meta name="msapplication-TileColor" content="#667eea" />
        
        {/* 구조화된 데이터 (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "손금 운세 분석",
            "url": "https://yoursite.com",
            "description": pageDescription,
            "inLanguage": "ko",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://yoursite.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      <header className="hero-header relative z-20" role="banner">
        {/* 비디오 배경 */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="header-video absolute top-0 left-0 w-full h-full object-cover z-10"
          aria-hidden="true"
          preload="metadata"
        >
          <source src={torchVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 햄버거 메뉴 버튼 */}
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          onKeyDown={handleKeyPress}
          aria-label="메뉴 열기/닫기"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          type="button"
        >
          <span className="bar" aria-hidden="true"></span>
          <span className="bar" aria-hidden="true"></span>
          <span className="bar" aria-hidden="true"></span>
          <span className="sr-only">메뉴</span>
        </button>

        {/* 드롭다운 네비게이션 */}
        {menuOpen && (
          <nav className="dropdown-menu" id="main-navigation" role="navigation" aria-label="주 메뉴">
            <ul role="list">
              <li role="listitem">
                <a 
                  href="/" 
                  aria-label="홈페이지로 이동"
                  className={currentPath === '/' ? 'current-page' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  홈
                </a>
              </li>
              <li role="listitem">
                <a 
                  href="/today" 
                  aria-label="오늘의 운세 보기"
                  className={currentPath === '/today' ? 'current-page' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  오늘의 운세
                </a>
              </li>
              <li role="listitem">
                <a 
                  href="/hand" 
                  aria-label="손금 분석하기"
                  className={currentPath === '/hand' ? 'current-page' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  손금 분석
                </a>
              </li>
              <li role="listitem">
                <a 
                  href="/animal" 
                  aria-label="띠별 운세 보기"
                  className={currentPath === '/animal' ? 'current-page' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  띠별 운세
                </a>
              </li>
            </ul>
          </nav>
        )}

        {/* 스크린 리더용 숨김 텍스트 */}
        <h1 className="sr-only">{pageTitle}</h1>
      </header>
    </>
  );
};

export default Header;