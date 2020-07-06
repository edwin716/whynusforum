import React from 'react';
import logo from './logo.jpg';
import './styles.css';

const Logo = () => {
  return (
    <div className="logoContainer">
      <img src={logo} className="logo" alt="logo" />
  
    </div>
  );
};

export default Logo;
