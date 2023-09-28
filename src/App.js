import React, { useEffect, useState } from 'react';
import HomePage from './components/HomePage/homePage'; // Correct import


import './App.css'; // Import your global CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Loading from './components/Loading/Loading';
import Sidebar from './components/Sidebar/Sidebar';
const App = () => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
   
    const timeoutId = setTimeout(() => {
      setShowGif(false);
    }, 4000); 
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className="App">
    {showGif ? (
      <Loading/> 
      ) : (<div >
      <Sidebar/> 
      <HomePage/> 
      </div>
      )}
    </div>
  );
}

export default App;
