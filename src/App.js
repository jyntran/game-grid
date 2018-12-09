import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Completed from './components/Completed';
import Playing from './components/Playing';
import PileOfShame from './components/PileOfShame';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      	<Header />
          <Switch>
            <Route exact path="/" component={Playing} />
            <Route path="/completed" component={Completed} />
            <Route path="/playing" component={Playing} />
            <Route path="/pile-of-shame" component={PileOfShame} />
          </Switch>
      </div>
    );
  }
}

export default App;
