import React, { Component } from 'react';
import './css/index.css';

// Comp Imports
import { Main, About, Skills, Projects, Social, Working } from './reducer';

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
            <p onClick={this.handleClick.bind(this, <Main />)}> Home </p>
            <p onClick={this.handleClick.bind(this, <About />)}> About </p>
            <p onClick={this.handleClick.bind(this, <Skills />)}> Skills </p>
            <p onClick={this.handleClick.bind(this, <Projects />)}>Projects</p>
            <p onClick={this.handleClick.bind(this, <Social />)}> Social </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
