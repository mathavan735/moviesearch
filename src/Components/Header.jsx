import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <nav className="header">
       
        <div className="logo">
          <h1>Maddymovies.com</h1>
        </div>
        <div className="profile">
          <img src="https://th.bing.com/th?id=OIP.s8Ahd5KAipv23DAIxHlbewHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Profile" />
          
        </div>
      </nav>
    );
  }
}

export default Header;