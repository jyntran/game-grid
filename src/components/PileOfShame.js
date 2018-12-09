import React, { Component } from 'react';
import Grid from './Grid';

class PileOfShame extends Component {

  componentDidMount() {
    console.log("*mount pileofshame")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("* pile of shame")
    console.log(prevProps)
    console.log(prevState)
    console.log(snapshot)
  }

  render() {
    return (
      <Grid status="unopened"/>
    )
  }
}

export default PileOfShame;
