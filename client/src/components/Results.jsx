import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }
    this.handleTryAgain = this.handleTryAgain.bind(this)
  }

  handleTryAgain(){
    this.props.history.push('/Where')
  }

  render() {
    return(
      <div>
        <h1>Your Results:</h1>
        <p> Your date night will be this .... placeholder </p>

        <br/>
        <p>Restaurant: Mcdonalds </p>
        <button onClick={this.handleSaveRestaurant}>Save this</button>

        <br/>
        <p>Movie: Fight Club </p>
        <button onClick={this.handleSaveMovie}>Save this</button>


        <br/>
        <p>Activity: Go to a concert </p>
        <button onClick={this.handleSaveActivity}>Save this</button>


        <br/>
        <br/>
        <button onClick={this.handleTryAgain}>Try Again</button>


      </div>
    )
  }
}

export default Results;
