import React from 'react';
import Header from '../components/header/MainHeader';
import Footer from '../components/footer/FooterHome';
import Main from './Main';
import './StartScreen.css';
import CategoryBanner from '../components/categoryBanner/CategoryBanner'

function StartScreen() {
  return (
    <div className="app">
      <CategoryBanner>

      </CategoryBanner>
    </div>
  );
}

export default StartScreen;
