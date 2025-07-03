import React from 'react';
import './Header.css'; 
import torchVideo from '../../../assets/torch.mp4';

const Header = () => {
    return (
        <header className="hero-header">
            <video autoPlay loop muted playsInline className="header-video">
                <source src={torchVideo} type="video/mp4" />
                {/* 비디오 포맷 호환성을 위해 WebM도 추가할 수 있습니다. */}
                {/* <source src={torchVideoWebM} type="video/webm" /> */}
                Your browser does not support the video tag.
            </video>
            {/* <div className="header-content">
            </div> */}
        </header>
    );
};

export default Header;