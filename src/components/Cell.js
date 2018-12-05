import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {

  getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getImageURL = function() {
    let url = '/images/gaming-pattern.png';
    if (this.props.screenshots !== undefined && this.props.screenshots.length > 0) {
      const screenshotIndex = this.getRandomInt(0, this.props.screenshots.length-1);
      url = this.props.screenshots[screenshotIndex].url;
    } else if (this.props.cover !== undefined) {
      url = this.props.cover.url;
    }
    return url;
  }

  render() {

  	const imageURL = this.getImageURL();
    // style={{backgroundImage: 'url(' + imageURL + ')'}}>

    return (
      <div className="cell" tabIndex="1">
      	<div className="cover">
      	</div>
        <div className="overlay">
          <span className="title" title={this.props.name}>          <a href={this.props.url}>
{this.props.name}</a></span>
        </div>
      </div>
    );
  }
}

export default Cell;
