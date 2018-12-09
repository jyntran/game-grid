import React, { Component } from 'react';
import Grid from './Grid';

class Playing extends Component {

  componentDidMount() {
    console.log("*mount playing")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("* playing")
    console.log(prevProps)
    console.log(prevState)
    console.log(snapshot)
  }

  render() {
    return (
      <Grid status="playing"/>
    )
  }
}

export default Playing;
