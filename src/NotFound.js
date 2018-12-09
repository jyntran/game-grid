import React, { Component } from 'react';
import Header from './components/Header';

class NotFound extends Component {
  render() {
    return (
      <div className="App">
      	<Header></Header>
        404: not found
      </div>
    );
  }
}

export default NotFound;
