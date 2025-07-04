import React, { useState } from 'react';
import './Header.css';
import torchVideo from '../../../assets/torch.mp4';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="hero-header">
      <video autoPlay loop muted playsInline className="header-video">
        <source src={torchVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      {menuOpen && (
        <nav className="dropdown-menu">
          <ul>
            <li><a href="/">홈</a></li>
            <li><a href="/today">오늘의 운세</a></li>
            <li><a href="/hand">손금 분석</a></li>
            <li><a href="/animal">띠별 운세</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
