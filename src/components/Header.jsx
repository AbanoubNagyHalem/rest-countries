import React from 'react';
import { FaMoon } from 'react-icons/fa';

const Header = ({ mode, changeMode }) => {
  return (
    <div className={`header ${mode}`}>
      <div className="container">
        <h2>Where in the world?</h2>
        <div className='toggle-button' onClick={changeMode}>
          <FaMoon />
          <p className='m-0'>Dark Mode</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
