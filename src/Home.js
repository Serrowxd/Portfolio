import React, { Component } from 'react';
import './css/index.css';

// Comp Imports
import { Main, About, Skills, Projects, Social, Working } from './reducer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comp: <Main />,
      activeHome: false,
      activeAbout: false,
      activeSkills: false,
      activeProjects: false,
      activeSocial: false,
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
            <p
              className={this.state.activeHome ? 'active' : ''}
              onClick={this.handleClick.bind(this, <Main />)}
            >
              Home
            </p>
            <p
              className={this.state.activeAbout ? 'active' : ''}
              onClick={this.handleClick.bind(this, <About />)}
            >
              About
            </p>
            <p
              className={this.state.activeSkills ? 'active' : ''}
              onClick={this.handleClick.bind(this, <Skills />)}
            >
              Skills
            </p>
            <p
              className={this.state.activeProjects ? 'active' : ''}
              onClick={this.handleClick.bind(this, <Projects />)}
            >
              Projects
            </p>
            <p
              className={this.state.activeSocial ? 'active' : ''}
              onClick={this.handleClick.bind(this, <Social />)}
            >
              Social
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

// onClick should change the className, maybe send a specific class to be rendered in state?
