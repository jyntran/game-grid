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
        <Cell key={game.id} name={game.name} cover={game.cover} screenshots={game.screenshots}></Cell>
      )}
      </div>
    );
  }
}

export default Grid;
