import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.section}>
        <h4 style={styles.title}>관상은 과학이다</h4>
        <p>관상 기반 성격 분석 서비스</p>
        <p>© 2025 관상은 과학이다 팀. All rights reserved.</p>
      </div>

      <div style={styles.section}>
        <h5 style={styles.subtitle}>메뉴</h5>
        <ul style={styles.list}>
          <li><a href="/">홈</a></li>
          <li><a href="/about">서비스 소개</a></li>
          <li><a href="/upload">사진 업로드</a></li>
          <li><a href="/policy">개인정보 처리방침</a></li>
        </ul>
      </div>

      <div style={styles.section}>
        <h5 style={styles.subtitle}>문의</h5>
        <p>Email: test@example.com</p>
        <p>GitHub: github.com/gwansang-science</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f9f9f9',
    color: '#333',
    padding: '40px 20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    fontSize: '0.9rem',
    borderTop: '1px solid #ddd',
  },
  section: {
    minWidth: '200px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontWeight: 'bold',
    marginBottom: '6px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    lineHeight: '1.6',
  }
};

export default Footer;