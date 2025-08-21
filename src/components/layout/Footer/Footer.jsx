import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={styles.footer} role="contentinfo" aria-label="사이트 정보">
      {/* 메인 서비스 정보 섹션 */}
      <div style={styles.section}>
        <h4 style={styles.title}>관상은 과학이다</h4>
        <p style={styles.description}>
          인공지능 기반 관상 분석 서비스로 얼굴 특징을 통한 성격 분석을 제공합니다. 
          GPT, Gemini AI 모델을 활용하여 정확하고 재미있는 관상 해석을 경험해보세요.
        </p>
        <div style={styles.keywords}>
          <span style={styles.tag}>#관상분석</span>
          <span style={styles.tag}>#AI관상</span>
          <span style={styles.tag}>#얼굴분석</span>
          <span style={styles.tag}>#성격테스트</span>
          <span style={styles.tag}>#관상학</span>
        </div>
        <p style={styles.copyright}>
          © {currentYear} 관상은 과학이다. All rights reserved.
        </p>
      </div>

      {/* 네비게이션 섹션 */}
      <div style={styles.section}>
        <h5 style={styles.subtitle}>주요 서비스</h5>
        <nav aria-label="Footer navigation">
          <ul style={styles.list}>
            <li><a href="/" style={styles.link} title="관상 분석 홈페이지">홈</a></li>
            <li><a href="/about" style={styles.link} title="AI 관상 분석 서비스 소개">서비스 소개</a></li>
            <li><a href="/upload" style={styles.link} title="얼굴 사진 업로드하여 관상 분석">사진 업로드</a></li>
            <li><a href="/analysis" style={styles.link} title="관상 분석 결과 보기">분석 결과</a></li>
            <li><a href="/guide" style={styles.link} title="관상 분석 사용 가이드">이용 가이드</a></li>
          </ul>
        </nav>
      </div>

      {/* 정보 및 정책 섹션 */}
      <div style={styles.section}>
        <h5 style={styles.subtitle}>정보</h5>
        <ul style={styles.list}>
          <li><a href="/privacy" style={styles.link} title="개인정보 처리방침">개인정보 처리방침</a></li>
          <li><a href="/terms" style={styles.link} title="서비스 이용약관">이용약관</a></li>
          <li><a href="/faq" style={styles.link} title="자주 묻는 질문">FAQ</a></li>
          <li><a href="/blog" style={styles.link} title="관상학 관련 블로그">관상학 블로그</a></li>
          <li><a href="/accuracy" style={styles.link} title="AI 분석 정확도 정보">분석 정확도</a></li>
        </ul>
      </div>

      {/* 연락처 및 소셜 섹션 */}
      <div style={styles.section}>
        <h5 style={styles.subtitle}>문의 및 지원</h5>
        <div style={styles.contactInfo}>
          <p>
            <strong>이메일:</strong> 
            <a href="tkddnjs8097@gmail.com" style={styles.link}>
              tkddnjs8097@gmail.com
            </a>
          </p>
          <div>
            <h4 className="mb-2 font-semibold underline">GitHub</h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://github.com/Sangwon1233/crownfront"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white hover:underline break-words"
                  title="관상은 과학이다 Frontend 저장소"
                >
                  <GitHubIcon />
                  crownfront
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sangwon1233/crownback"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white hover:underline break-words"
                  title="관상은 과학이다 Backend 저장소"
                >
                  <GitHubIcon />
                  crownback
                </a>
              </li>
            </ul>
          </div>
          <p style={styles.support}>
            💡 궁금한 점이 있으시면 언제든 문의해주세요!
          </p>
        </div>
        
        {/* 소셜 미디어 링크
        <div style={styles.socialSection}>
          <h6 style={styles.socialTitle}>팔로우하기</h6>
          <div style={styles.socialLinks}>
            <a 
              href="https://instagram.com/gwansang_science" 
              style={styles.socialLink}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="인스타그램 팔로우"
              title="관상은 과학이다 인스타그램"
            >
              📷 Instagram
            </a>
            <a 
              href="https://blog.naver.com/gwansang_science" 
              style={styles.socialLink}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="네이버 블로그 방문"
              title="관상학 전문 블로그"
            >
              📝 Blog
            </a>
            <a 
              href="https://youtube.com/@gwansang-science" 
              style={styles.socialLink}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="유튜브 구독"
              title="관상 분석 영상 컨텐츠"
            >
              📺 YouTube
            </a>
          </div>
        </div> */}
      </div>

      {/* 하단 법적 정보 */}
      <div style={styles.bottomSection}>
        <div style={styles.legalInfo}>
          <p style={styles.disclaimer}>
            ⚠️ <strong>면책조항:</strong> 본 서비스의 관상 분석 결과는 AI 기반 추론으로 
            재미와 참고 목적으로만 사용되어야 하며, 실제 성격이나 운세를 보장하지 않습니다.
          </p>
          <p style={styles.techInfo}>
            🤖 <strong>사용 기술:</strong> React, Node.js, OpenAI GPT, Google Gemini, 
            Computer Vision API 등 최신 AI 기술로 구현되었습니다.
          </p>
          <p style={styles.dataInfo}>
            🔒 <strong>데이터 보안:</strong> 업로드된 이미지는 분석 후 즉시 삭제되며, 
            개인정보는 안전하게 보호됩니다.
          </p>
        </div>
        
        {/* 지역화 및 언어 */}
        <div style={styles.localization}>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    color: '#ecf0f1',
    padding: '60px 20px 20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    fontSize: '0.9rem',
    borderTop: '4px solid #3498db',
    lineHeight: '1.6',
    fontFamily: '"Noto Sans KR", -apple-system, BlinkMacSystemFont, sans-serif',
  },
  section: {
    minWidth: '250px',
    marginBottom: '30px',
    flex: '1 1 250px',
    maxWidth: '350px',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#3498db',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
  subtitle: {
    fontWeight: 'bold',
    marginBottom: '12px',
    fontSize: '1.1rem',
    color: '#e74c3c',
    borderBottom: '2px solid #e74c3c',
    paddingBottom: '5px',
    display: 'inline-block',
  },
  description: {
    marginBottom: '15px',
    lineHeight: '1.7',
    color: '#bdc3c7',
  },
  keywords: {
    marginBottom: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  tag: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '500',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    lineHeight: '2',
  },
  link: {
    color: '#ecf0f1',
    textDecoration: 'none',
    transition: 'color 0.3s ease, text-decoration 0.3s ease',
    borderBottom: '1px solid transparent',
  },
  contactInfo: {
    lineHeight: '2',
  },
  socialSection: {
    marginTop: '20px',
    paddingTop: '15px',
    borderTop: '1px solid #34495e',
  },
  socialTitle: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#f39c12',
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  socialLink: {
    color: '#f39c12',
    textDecoration: 'none',
    fontSize: '0.85rem',
    transition: 'color 0.3s ease',
  },
  bottomSection: {
    width: '100%',
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '2px solid #34495e',
  },
  legalInfo: {
    marginBottom: '15px',
  },
  disclaimer: {
    fontSize: '0.8rem',
    color: '#f39c12',
    marginBottom: '8px',
    fontWeight: '500',
  },
  techInfo: {
    fontSize: '0.8rem',
    color: '#2ecc71',
    marginBottom: '8px',
  },
  dataInfo: {
    fontSize: '0.8rem',
    color: '#9b59b6',
    marginBottom: '8px',
  },
  localization: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.8rem',
    color: '#95a5a6',
    flexWrap: 'wrap',
    gap: '10px',
  },
  location: {
    fontWeight: '500',
  },
  language: {
    fontStyle: 'italic',
  },
  copyright: {
    fontSize: '0.85rem',
    color: '#95a5a6',
    fontWeight: '400',
  },
  support: {
    color: '#2ecc71',
    fontWeight: '500',
    marginTop: '10px',
  }
};

export default Footer;