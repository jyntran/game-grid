import React, { Component } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import GameService from './services/Game.service';
import './App.css';

const http = new GameService();

class App extends Component {
  state = {
    data: ""
  };

	componentDidMount() {
		const data = http.getData();
		this.setState({
			data: data
		})
	}

  render() {
//  const games = CONSTANTS.GAMES;
    return (
      <div className="App">
      	<Header></Header>
        <Grid games={this.state.data}></Grid>
      </div>
    );
  }
}

export default App;
