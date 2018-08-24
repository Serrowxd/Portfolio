import React, { Component } from 'react';
import './css/index.css';

// Comp Imports
import { Main, About, Skills, Projects, Contact } from './reducer/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comp: <Projects />,
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
            <p onClick={this.handleClick.bind(this, <Contact />)}> Contact </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
