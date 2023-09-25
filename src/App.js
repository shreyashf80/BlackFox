import React from 'react';
import HomePage from './components/HomePage/homePage'; // Correct import


import './App.css'; // Import your global CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


const App = () => {
  return (
    <div className="App">
      <HomePage/> 
    </div>
  );
}

export default App;
