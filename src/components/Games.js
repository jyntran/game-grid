import React, { Component } from 'react';
import Cloud from './Cloud';

class Games extends Component {

  render() {
    return (
      <div id="main">
      <Cloud
        tags={this.props.tags}
      />
      </div>
    )
  }
}

export default Games;
