import React, { Component } from 'react';
import Tags from './Tags';
import './Cell.css';

class Cell extends Component {

  getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getImage = function() {
    let img = {
      url: '/images/gaming-pattern.png',
      width: 240,
      height: 240
    };
    if (this.props.screenshots !== undefined && this.props.screenshots.length > 0) {
      const screenshotIndex = this.getRandomInt(0, this.props.screenshots.length-1);
      img = this.props.screenshots[screenshotIndex];
      img.width = 569
      img.height = 320 
    } else if (this.props.artwork !== undefined && this.props.artwork.length > 0) {
      const artworkIndex = this.getRandomInt(0, this.props.artwork.length-1);
      img = this.props.artwork[artworkIndex];
      img.width = 569
      img.height = 320 
    } else if (this.props.cover !== undefined) {
      img = this.props.cover;
      if (img.height >= 264) {
        img.height = 264 
      }
      if (img.height >= 374) {
        img.height = 374 
      }
    }
    return img
  }

  renderTags = function(tags) {
    if (tags !== undefined) {
      return <Tags tags={tags} />;
    }
  }

  render() {
    const linkTitle = this.props.name + ' @ IGDB.com';
  	const image = this.getImage();
    return (
      <div className="cell" tabIndex="1" style={{width: image.width, height: image.height}}>
      	<div className="cover" style={{backgroundImage: 'url(' + image.url + ')'}}>
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
