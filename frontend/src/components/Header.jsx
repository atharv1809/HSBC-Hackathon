import React from 'react';
import '../styles/Header.css';

const Header = () => {
  const username = 'HSBC';

  const handleLogout = () => {
    console.log('Log Out');
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1>Dashboard</h1>
      </div>
      <div className="header-right">
        <span>Welcome, {username}!</span>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
