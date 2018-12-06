import React, { Component } from 'react';
import Tags from './Tags';
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

  getCellWidth = function() {
    const num = 240;
    return num + 'px';
  }

  getCellHeight = function() {
    return this.getCellWidth();
  }

  renderTags = function(tags) {
    if (tags !== undefined) {
      return <Tags tags={tags} />;
    }
  }

  render() {

    const cellWidth = this.getCellWidth();
    const cellHeight = this.getCellHeight();

    const linkTitle = this.props.name + ' @ IGDB.com';
  	const imageURL = this.getImageURL();
    // style={{backgroundImage: 'url(' + imageURL + ')'}}>

    return (
      <div className="cell" tabIndex="1" style={{width: cellWidth, height: cellHeight}}>
      	<div className="cover" style={{backgroundImage: 'url(' + imageURL + ')'}}>
      	</div>
        <div className="overlay">
          {this.renderTags(this.props.tags)}
          <span className="title">
          <a href={this.props.url} title={linkTitle} target="_blank" rel="noopener noreferrer">
{this.props.name}</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Cell;
