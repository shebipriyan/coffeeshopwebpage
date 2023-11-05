import React from 'react';
import './Menubar.css';

function Menubar() {
  return (
    <div className="menu-bar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Menubar;
