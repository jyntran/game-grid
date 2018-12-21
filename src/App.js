import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Games from './components/Games';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      	<Header />
        <Switch>
          <Route exact path="/" render={()=><Games tags={["playing"]} sort={"name"}/>} />
          <Route path="/games/completed" render={()=><Games tags={["completed"]} sort={"completedOn"} order={"desc"}/>} />
          <Route path="/games/wishlist" render={()=><Games tags={["wishlist"]} sort={"name"}/>} />
          <Route path="/games/backlog" render={()=><Games tags={["notplayed"]}/>} />        
          <Route path="/games/pile-of-shame" render={()=><Games tags={["brandnew"]}/>} />        
          <Route path="*" component={NotFound}/>        
        </Switch>  
      </div>
    );
  }
}

export default App;
