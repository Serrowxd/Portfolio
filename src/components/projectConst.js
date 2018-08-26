import React from 'react';

const Project = props => {
  const button = <button class="ripple"> Code </button>;
  return (
    <div className="proj_row">
      <div className="proj_col">
        <h4>{props.title}</h4>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <div className="proj_card">
            <img src={props.img} class="proj_img" alt={props.alt} />
            <div className="card_text">
              <p>{props.item1}</p>
              <p>{props.item2}</p>
              <p>{props.item3}</p>
              <p>{props.item4}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;

// Stack & Notes on Hover (Doesn't get in the way of the click)
// Position Absolute doesn't work for text, possibly card overlay with background image?
// Can't pass props to a background image w/o styled components.

// Position Absolute on Text works if contained within proj_card
