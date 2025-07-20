import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header/Header'; // Header 컴포넌트 임포트
import Footer from './components/layout/Footer/Footer'; // Footer 컴포넌트 임포트


import './App.css'; // 전역 CSS 파일을 임포트

function App() {
  return (
    <Router>
          <HelmetProvider>

      <div className="app-wrapper">
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      <Footer/>
      </div>
          </HelmetProvider>
    </Router>
  );
}

export default App;
