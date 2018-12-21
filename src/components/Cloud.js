import React, { Component } from 'react';
import classNames from 'classnames'
import axios from 'axios'
import Cell from './Cell';
import './Cloud.css';

class Cloud extends Component {

  state = {
    games: [],
    mode: 'thumbnail',
    isLoading: true,
    height: '100%',
    positions: []
  };

  BASE_URL = '/api/games?'

  constructor(props) {
    super(props);
    this.onChangeMode = this.onChangeMode.bind(this);
  } 

  getGames() {
    /* https://stackoverflow.com/a/48942924 */
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };
    scrollToTop();
    this.setState({isLoading: true})
    let tags = []
    let url = this.BASE_URL
    let hasQuery = false
    if (this.props.tags) {
      url += 'tags='
      tags = this.props.tags
      for (let i in tags) {
        url += tags[i] + ','
        hasQuery = true
      }
    }
    if (this.props.sort) {
      url += (hasQuery? '&' : '') + 'sort=' + this.props.sort
      hasQuery = true
    }
    if (this.props.order) {
      url += (hasQuery? '&' : '') + 'order=' + this.props.order
      hasQuery = true
    }
    axios.get(url)
    .then(res => {
      let component = this
      setTimeout(function() {
        component.setState({isLoading: false})
      }, 2000)
      this.setState({games: res.data})
    })
    .catch(error => {
      let component = this
      setTimeout(function() {
        component.setState({isLoading: false})
      }, 2000)
      console.log('error')
    })
  }

  componentDidMount() {
    this.getGames()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tags !== this.props.tags) {
      this.getGames()
    }
  }

  onChangeMode(e) {
    let newMode = null
    if (this.state.mode === "thumbnail") {
      newMode = "large"
    } else if (this.state.mode === "large") {
      newMode = "thumbnail"
    }
    this.setState({mode: newMode})
    console.log('mode: ' + this.state.mode)
  }

  render() {
    const cloudClass = classNames({cloud: true, loading: this.state.isLoading})
    return (
      <div>
        <div className="options">
        </div>
        <div className={cloudClass}
        style={{height: this.state.height}}>
        <div className="cloudLoading">
            <svg className="icon icon-hour-glass" aria-hidden="true"><use xlinkHref='#icon-hour-glass'></use></svg>
            <p>LOADING</p>
        </div>
        {this.state.games.map(game =>
          <Cell
          key={game.id}
          name={game.name}
          url={game.url}
          cover={game.cover}
          screenshots={game.screenshots} 
          tags={game.tags}
          platforms={game.platforms}
          own={game.own}
          mode={this.state.mode}
          >
          </Cell>
        )}
        </div>
      </div>
    );
  }
}

export default Cloud;
