import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/layout/Header/Header'; // Header 컴포넌트 임포트
import Footer from './components/layout/Footer/Footer'; // Footer 컴포넌트 임포트
import backgroundImage from './assets/backimage.jpg';


import './App.css'; // 전역 CSS 파일을 임포트

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header/>
        <div className="content-wrapper bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
