import React, { Component } from 'react';
import './Tags.css';

class Tags extends Component {

  renderIcon = function(tagName) {
    var tag = "";
    switch(tagName) {
      case "brandnew":
        tag = "price-tag";
        break;
      case "notplayed":
        tag = "new";
        break;
      case "playing":
        tag = "game-controller";
        break;
      case "paused":
        tag = "bookmark";
        break;
      case "completed":
        tag = "trophy";
        break;
      case "physical":
        tag = "vinyl";
        break;
      case "digital":
        tag = "cloud";
        break;
      case "wishlist":
        tag = "add-to-list";
        break;
      case "favourite":
        tag = "heart";
        break;
      default:
        break;
    }
    const tagClass = "icon icon-" + tag;
    const tagHash = "#icon-" + tag;
    return (
      <div className="tag" title={tagName}>
      <svg className={tagClass} aria-hidden="true"><use xlinkHref={tagHash}></use></svg>
      <div className="tagLabel"><span>{tagName}</span></div>
      </div>
    );
  }

  render() {
    return (
      <div className="tags">
      {this.props.tags.map(this.renderIcon)}
      </div>
    );
  }
}

export default Tags;
