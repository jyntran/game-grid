import React, { Component } from 'react';
import './Platforms.css';

class Platforms extends Component {

  renderPlatform = function(platform) {
    if (platform) {
      var icon = "";
      switch(platform.id) {
        case 130:
          icon = "nintendo-switch";
          break;
        case 5:
          icon = "nintendo-wii";
          break;
        case 21:
          icon = "nintendo-gamecube";
          break;
        case 18:
        case 20:
        case 37:
        case 137:
          icon = "nintendo";
          break;
        case 9:
          icon = "playstation-3";
          break;
        case 48:
          icon = "playstation-4";
          break;
        case 8:
          icon = "playstation";
          break;
        case 12:
          icon = "xbox";
          break;
        case 6:
          icon = "pc";
          break;
        default:
          break;
      }
      const iconClass = "icon icon-" + icon;
      const iconHash = "#icon-" + icon;
      return (
        <div className="platform" title={platform.name} key={platform.id}>
        <svg className={iconClass} aria-hidden="true"><use xlinkHref={iconHash}></use></svg>
        {platform.name}
        </div>
      );
    }
    return null
  }

  render() {
    return (
      <div className="platforms">
      {this.props.own.map(this.renderPlatform)}
      </div>
    );
  }
}

export default Platforms;
