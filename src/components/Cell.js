import React, { Component } from 'react';
import classNames from 'classnames';
import Tags from './Tags';
import './Cell.css';

class Cell extends Component {

  state = {
    image: {
      url: '/images/gaming-pattern.png',
    },
    isLoading: true
  }

  imgIndex = null;
  posX = '50%';
  poxY = '50%';
  width = '90px';
  height = '90px';

  constructor(props) {
    super(props)
    if (this.props.screenshots !== undefined && this.props.screenshots.length > 0) {
      this.imgIndex = this.getRandomInt(0, this.props.screenshots.length-1);
    } else if (this.props.artwork !== undefined && this.props.artwork.length > 0) {
      this.imgIndex = this.getRandomInt(0, this.props.artwork.length-1);
    }
  }

  componentDidMount() {
    this.setState({image: this.getImage()})
    let component = this
    var temp = new Image()
    temp.onload = function() {
      component.setState({isLoading: false})
    }
    temp.src = this.state.image.url
    if (temp.complete) {
      temp.onload()
    }
    this.getPosition();
    this.getSize();
  }

  getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getPosition = function() {
    this.posX = this.getRandomInt(5, 90) + '%';
    this.posY = '0%' //this.getRandomInt(5, 90) + '%';
  }

  getSize = function() {
    this.width = this.getRandomInt(33, 66) + 'px';
    this.height = this.width;
  }

  getImage = function() {
    let img = this.state.image
    if (this.props.screenshots !== undefined && this.props.screenshots.length > 0 && this.imgIndex) {
      img = this.props.screenshots[this.imgIndex];
      if (this.props.mode === 'thumbnail') {
        img.url = img.url.replace('t_original', 't_thumb')
        img.url = img.url.replace('t_screenshot_med', 't_thumb')
      } else if (this.props.mode === 'large') {
        img.url = img.url.replace('t_thumb', 't_screenshot_med')
        img.url = img.url.replace('t_original', 't_screenshot_med')
      }
    } else if (this.props.artwork !== undefined && this.props.artwork.length > 0 && this.imgIndex) {
      img = this.props.artwork[this.imgIndex];
      if (this.props.mode === 'thumbnail') {
        img.url = img.url.replace('t_screenshot_med', 't_thumb')
      } else if (this.props.mode === 'large') {
        img.url = img.url.replace('t_thumb', 't_screenshot_med')
        img.url = img.url.replace('t_original', 't_screenshot_med')
      }
    } else if (this.props.cover !== undefined) {
      img = this.props.cover;
      if (img.width >= 264) {
        img.width = 264 
      }
      if (img.height >= 374) {
        img.height = 374 
      }
      if (this.props.mode === 'thumbnail') {
        img.url = img.url.replace('t_cover_big', 't_thumb')
      } else {
        img.url = img.url.replace('t_thumb', 't_cover_big')
      }
    }
    return img
  }

  renderTags = function(tags) {
    if (tags !== undefined) {
      return <Tags tags={tags} />;
    }
  }

  renderOverlay = function() {
      const linkTitle = this.props.name + ' @ IGDB.com';
      return (
        <div className="overlay">
        {this.renderTags(this.props.tags.sort())}
        <span className="title">
        <a href={this.props.url} title={linkTitle} target="_blank" rel="noopener noreferrer">
  {this.props.name}</a>
        </span>
        </div>
      )
  }

  render() {
  	const image = this.state.image;
    const cellClass = classNames({
      cell: true,
      large: this.props.mode === 'large',
      thumbnail: this.props.mode === 'thumbnail',
      loading: this.state.isLoading
    })
    return (
      <div className="cell-container" tabIndex="1" style={{top: this.posY, left: this.posX}}>
        <div className={cellClass} style={{width: this.width, height: this.height}}>
          <div className="cell icon">
            <svg className="icon icon-hour-glass" aria-hidden="true"><use xlinkHref='#icon-hour-glass'></use></svg>
          </div>
        	<div className="cover" style={{backgroundImage: 'url(' + image.url + ')'}} title={this.props.name}>
        	</div>
          {this.renderOverlay()}
        </div>
      </div>
    );
  }
}

export default Cell;
