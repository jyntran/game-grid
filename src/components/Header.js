import React, { Component } from 'react';
import Navigation from './Navigation';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navigation></Navigation>
        <div className="brand">
          <h1>bliptych</h1>
        </div>
      </div>
    );
  }
}

export default Header;
