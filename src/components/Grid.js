import React, { Component } from 'react';
import axios from 'axios'
import Cell from './Cell';
import './Grid.css';

class Grid extends Component {

  state = {
    games: [],
    mode: "thumbnail"
  };

  BASE_URL = '/api/games?'

  constructor(props) {
    super(props);
    this.onChangeMode = this.onChangeMode.bind(this);
  } 

  getGames() {
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
      this.setState({games: res.data})
    })
    .catch(error => {
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
  }

  render() {
    return (
      <div>
        <div className="options">
          <button onClick={this.onChangeMode}>Thumbnail/Large</button>
        </div>
        <div className="grid">
        {this.state.games.map(game =>
          <Cell
          key={game.id}
          name={game.name}
          url={game.url}
          cover={game.cover}
          screenshots={game.screenshots} 
          tags={game.tags}
          mode={this.state.mode}
          >
          </Cell>
        )}
        </div>
      </div>
    );
  }
}

export default Grid;
