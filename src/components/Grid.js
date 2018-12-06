import React, { Component } from 'react';
import Cell from './Cell';
import './Grid.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.games = [];
  }

  render() {
    return (
      <div className="grid">
      {this.props.games.map(game =>
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
