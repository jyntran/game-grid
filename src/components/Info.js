import React, { Component } from 'react';
import Moment from 'react-moment';
import Tags from './Tags';
import Platforms from './Platforms';
import './Info.css';

class Info extends Component {

  renderCover() {
    if (this.props.cover) {
      const coverURL = this.props.cover.url.replace('t_thumb', 't_cover_big')
      return (
        <div className="cover-container">
          <svg className="icon icon-hour-glass" aria-hidden="true"><use xlinkHref='#icon-hour-glass'></use></svg>
          <img src={coverURL} alt={this.props.title}/>
        </div>
      )
    }
    return null
  }

  renderTags = function(tags) {
    if (tags !== undefined) {
      return <Tags tags={tags.sort()} />;
    }
  }

  renderOwn = function(own) {
    if (own !== undefined) {
      return (
        <Platforms
          own={own.sort()}
        />
      )
    }
    return null
  }

  renderScreenshot = function(screenshot, index) {
    const altText = "Screenshot "+ index 
    const url = screenshot.url.replace('t_thumb', 't_screenshot_med')
    return (
      <div className="screenshot-container" key={index}>
        <svg className="icon icon-hour-glass" aria-hidden="true"><use xlinkHref='#icon-hour-glass'></use></svg>
        <img className="screenshot" src={url} alt={altText}/>
      </div>
    )
  }

  renderMetadata = function(metadata) {
    const dateFormat = 'MMMM Do, YYYY'
    return (
      <div className="metadata">
        <table>
          {metadata.acquisitionDate ?
            (
              <tr>
                <td>Acquisition Date:</td>
                <td>
                  <Moment format={dateFormat}>
                    {metadata.acquisitionDate}
                  </Moment>
                </td>
              </tr>
            ) : null}
          {metadata.completionDate ?
            (
              <tr>
                <td>Completion Date:</td>
                <td>
                  <Moment format={dateFormat}>
                    {metadata.completionDate}
                  </Moment>
                </td>
              </tr>
            ) : null}
          </table>
      </div>
    )
  }

  render() {
    const screenshots = this.props.screenshots ? this.props.screenshots : [];
    return (
      <div className="infoData">
        {this.renderCover()}
        <h2 className="title">
          {this.props.name}
        </h2>
        {this.renderOwn(this.props.own)}
        {this.renderTags(this.props.tags)}
        {this.renderMetadata(this.props.metadata)}
        <div className="screenshots">
          {screenshots.map(this.renderScreenshot)}
        </div>
      </div>
    );
  }
}

export default Info;
