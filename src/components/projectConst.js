import React from 'react';

const Project = props => {
  const button = <button class="ripple"> Code </button>;
  return (
    <div className="proj_row">
      <div className="proj_col">
        <h4>{props.title}</h4>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src={props.img} class="proj_img" alt={props.alt} />
        </a>
      </div>
    </div>
  );
};

export default Project;
