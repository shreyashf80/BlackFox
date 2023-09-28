// Header.js
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header-main">
      <div className="headcontain">
        {/* <div className="megaMenu-container">
          <div className="head-left">
            <ul className="category-container">
              <li><a className='content-in' href="/">Home</a></li>
              <li><a className='content-in' href="/about">About</a></li>
              <li><a className='content-in' href="/service">Service</a></li>
              <li><a className='content-in' href="/blog">Blog</a></li>
              <li><a className='content-in' href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="head-right">
            <ul className="category-container">
              <li className="lang-lev1"><a className="lang-switch" href="/SP">sp</a></li>
              <li className="lang-lev1"><a className="lang-switch" href="/EN">en</a></li>
            </ul>
          </div>
        </div> */}
        <div className="logo-container">
          <a href='#'>
            <img
              className='logo-main'
              src='./assets/goldfox.png'
              alt="red-fox"
              width="100"
              height="180"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
