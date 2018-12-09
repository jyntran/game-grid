import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <ul>
          <li><NavLink to="/playing" activeClassName="activeLink">Playing</NavLink></li>
        	<li><NavLink to="/completed" activeClassName="activeLink">Completed</NavLink></li>
        	<li><NavLink to="/pile-of-shame" activeClassName="activeLink">Pile of Shame</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
