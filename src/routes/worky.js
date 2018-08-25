import React, { Component } from 'react';
import { Projects, WorkyWorky } from '../reducer/index';

class Working extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comp: <WorkyWorky />,
      active: true,
    };
  }

  handleClick(compName, e) {
    this.setState({ comp: compName });
    this.setState({ active: false });
  }

  render() {
    return (
      <div className="main_div worky">
        {this.state.comp}
        <button
          className={this.state.active ? '' : 'none'}
          onClick={this.handleClick.bind(this, <Projects />)}
        >
          You can't stop me!
        </button>
      </div>
    );
  }
}

export default Working;
