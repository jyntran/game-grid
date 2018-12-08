import React, { Component } from 'react';
import Cell from './Cell';
import './Grid.css';

class Grid extends Component {
  render() {
    console.log(this.props.games)
    if (this.props.games !== undefined && this.props.games !== "") {
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
    return <div className="grid"><h2>games not found</h2></div>
  }
}

export default Grid;
