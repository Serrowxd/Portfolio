import React, { Component } from 'react';
import './css/index.css';

// Comp Imports
import Main from './routes/main.js';

import OwO from './routes/test.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comp: <Main />,
    };
  }

  handleClick(compName, e) {
    this.setState({ comp: compName });
  }

  render() {
    return (
      <div className="background_container">
        <div className="comp_container">
          {this.state.comp}
          <div className="nav_cont">
            <p onClick={this.handleClick.bind(this, <Main />)}> About </p>
            <p onClick={this.handleClick.bind(this, <OwO />)}> Skills </p>
            <p> Projects </p>
            <p> Contact </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
