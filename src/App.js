import React, { Component } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import CONSTANTS from './constants/Constants';
import './App.css';

class App extends Component {
  render() {

    const games = CONSTANTS.GAMES;

    return (
      <div className="App">
      	<Header></Header>
        <Grid games={games}></Grid>
      </div>
    );
  }
}

export default App;
