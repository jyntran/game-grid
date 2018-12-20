import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <ul>
          <li><NavLink exact to="/" activeClassName="activeLink">Playing</NavLink></li>
        	<li><NavLink exact to="/games/completed" activeClassName="activeLink">Completed</NavLink></li>
          <li><NavLink exact to="/games/wishlist" activeClassName="activeLink">Wishlist</NavLink></li>
          <li><NavLink exact to="/games/backlog" activeClassName="activeLink">Backlog</NavLink></li>
          <li><NavLink exact to="/games/pile-of-shame" activeClassName="activeLink">Pile of Shame</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
