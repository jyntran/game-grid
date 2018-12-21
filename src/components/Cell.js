import React, { Component } from 'react';
import classNames from 'classnames';
import Info from './Info';
import './Cell.css';

class Cell extends Component {

  state = {
  }

  imgIndex = null;
  posX = '50%';
  poxY = '50%';
  width = '90px';
  height = '90px';
  margin = '90px';

  constructor(props) {
    super(props)
    this.state = {
      image: {
        url: '/images/gaming-pattern.png',
      },
      isLoading: true,
      openInfo: false
    }
    this.onClick = this.onClick.bind(this)
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
    const x = this.getRandomInt(5, 85)
    this.posX = x + '%';
    this.posY = '0%';
  }

  getSize = function() {
    const w = this.getRandomInt(33, 66)
    this.width = w + 'px';
    this.height = this.width;
    this.margin = (90 - w) / 2 + 'px'
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

  handleOverflow() {
    if (this.state.openInfo) {
      document.body.classList.remove('modal-open')
    } else {
      document.body.classList.add('modal-open')
    }
  }

  onClick = function(e) {
    this.setState({openInfo: !this.state.openInfo})
    this.handleOverflow()
  }

  render() {
  	const image = this.state.image;
    const cellClass = classNames({
      cell: true,
      large: this.props.mode === 'large',
      thumbnail: this.props.mode === 'thumbnail',
      loading: this.state.isLoading
    })
    const infoClass = classNames({
      info: true,
      visible: this.state.openInfo
    })
    const infoCloseClass = classNames({
      infoClose: true,
      visible: this.state.openInfo
    })
    return (
      <div>
          <div className={cellClass} tabIndex="1"
          style={{top: this.posY, left: this.posX, width: this.width, height: this.height, margin: this.margin}}
          onClick={this.onClick}>
            <div className="cell-icon">
              <svg className="icon icon-hour-glass" aria-hidden="true"><use xlinkHref='#icon-hour-glass'></use></svg>
            </div>
          	<div className="cover" style={{backgroundImage: 'url(' + image.url + ')'}}>
          	</div>
          </div>
        <div className="cell-label">
          <span>{this.props.name}</span>
          <span>{this.props.name}</span>
          <span>{this.props.name}</span>
          <span>{this.props.name}</span>
          <span>{this.props.name}</span>
        </div>
        <div className={infoClass}>
        <div
          className={infoCloseClass}
          onClick={this.onClick}
          tabIndex="1">
          <svg className="icon icon-circle-with-cross"><use xlinkHref='#icon-circle-with-cross'></use></svg>
        </div>
        <Info
          onClick={this.onClick}
          name={this.props.name}
          url={this.props.url}
          cover={this.props.cover}
          screenshots={this.props.screenshots} 
          tags={this.props.tags}
          metadata={this.props.metadata}
          platforms={this.props.platforms}
          own={this.props.own}
          mode={this.state.mode}
        />
        </div>
      </div>
    );
  }
}

export default Cell;
