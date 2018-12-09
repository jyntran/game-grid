import React, { Component } from 'react';
import axios from 'axios'
import Cell from './Cell';
import './Grid.css';

class Grid extends Component {

  state = {
    games: []
  };

  componentDidMount() {
    let tags = ''
    if (this.props.status) {
      tags += this.props.status
    }
    const url = '/games?tags=' + tags
    axios.get(url)
    .then(res => {
      this.setState({games: res.data})
    })
    .catch(error => {
      console.log('error')
    })
  }

  render() {
    return (
      <div className="grid">
      {this.state.games.map(game =>
        <Cell
        key={game.id}
        name={game.name}
        url={game.url}
        cover={game.cover}
        screenshots={game.screenshots} 
        tags={game.tags}
        >
        </Cell>
      )}
      </div>
    );
  }
}

export default Grid;
