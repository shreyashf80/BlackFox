// HomePage.js
import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';

import './homePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThin, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="banner-container">
        <img
          className="banner-image"
          src="./assets/dev-banner.jpg"
          alt="motion-auto"
        />
        <div className="banner-text">
          <div className="cta-container">
            <h1>People, Process and Technology Experts</h1>
          </div>

          <div className="ctaInfo-container">
            <p>Process Workflow, Labor Outsourcing, and Robotic Process Automation (RPA) Solutions</p>
          </div>
        </div>

        <div className='ctadownarrow-container'>
          <a href='#'>
          <FontAwesomeIcon className='fa-down-base fa-arrow-down' icon={faArrowDown} />
          </a>
        </div>

      </div>
      <div className='team-section-main'>
        <div className='our-team'>
          <div className='team-there'>
            <img src='./assets/planing.jpg' alt="planning" />
          </div>
          <div className='team-there'>
            <img src='./assets/team-work.jpg' alt="team-work" />
          </div>
          <div className='team-there'>
            <img src='./assets/discussion.jpg' alt="discussion" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
