import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popover: true,
    };
  }

  modalShow = () => {
    let state = this.state.popover;
    this.setState({ popover: !state });

    // Remove Navigation
    let element = document.getElementById('nav');
    element.className += ' hide_nav';
  };

  modalHide = () => {
    let state = this.state.popover;
    this.setState({ popover: !state });

    // Add Navigation
    let element = document.getElementById('nav');
    element.classList.remove('hide_nav');
  };

  render() {
    return this.state.popover ? (
      <div className="proj_row">
        <div className="proj_col">
          <h4>{this.props.title}</h4>
          {/* <a href={props.link} target="_blank" rel="noopener noreferrer"> */}
          <div onClick={this.modalShow} className="proj_card">
            <img src={this.props.img} class="proj_img" alt={this.props.alt} />
            <div className="card_text">
              <p>{this.props.item1}</p>
              <p>{this.props.item2}</p>
              <p>{this.props.item3}</p>
              <p>{this.props.item4}</p>
            </div>
          </div>
          {/* </a> */}
        </div>
      </div>
    ) : (
      <div className="modal modal_show">
        <button className="exit_button" onClick={this.modalHide}>
          X
        </button>
        <div className="modal_row">
          <div className="modal_col">
            <img src={this.props.img} alt={this.props.alt} />
          </div>
          <div className="modal_col">
            <h1>{this.props.title}</h1>
            <h2>{this.props.modal_1}</h2>
            <p>{this.props.modal_2}</p>
            <p>{this.props.modal_3}</p>

            <div className="nested">
              <a
                href={this.props.link_hub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Github</button>
              </a>
              <a
                href={this.props.link_dep}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Deployment</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;

// Stack & Notes on Hover (Doesn't get in the way of the click)
// Position Absolute doesn't work for text, possibly card overlay with background image?
// Can't pass props to a background image w/o styled components.

// Position Absolute on Text works if contained within proj_card
