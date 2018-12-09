import React, { Component } from 'react';
import Grid from './Grid';

class Completed extends Component {

  componentDidMount() {
    console.log("*mount completed")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("* completed")
    console.log(prevProps)
    console.log(prevState)
    console.log(snapshot)
  }

  render() {
    return (
      <Grid status="completed"/>
    )
  }
}

export default Completed;
