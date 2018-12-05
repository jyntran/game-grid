import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <ul>
        	<li><a href="/">Completed</a></li>
        	<li><a href="/">Backlog</a></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
