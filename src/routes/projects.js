import React from 'react';

import img from '../assets/manlaw.png';
import img2 from '../assets/job.png';
import img3 from '../assets/github.png';

const Projects = () => {
  const button = <button class="ripple"> Code </button>;
  return (
    <div className="main_div projects">
      <h1> I will populate this with my projects as they become available! </h1>
      <div className="proj_row">
        <div className="proj_col">
          <img src={img} class="proj_img" alt="manlaw" />
          <h4> Mandracchia Law - Freelance </h4>
          <a
            href="https://github.com/Serrowxd/mandracchia-law"
            target="_blank"
            rel="noopener noreferrer"
          >
            {button}
          </a>
        </div>
        <div className="proj_col">
          <img src={img2} class="proj_img" alt="manlaw" />
          <h4> JobMe - Capstone Project </h4>
          <a
            href="https://github.com/Lambda-School-Labs/CS8-jobme"
            target="_blank"
            rel="noopener noreferrer"
          >
            {button}
          </a>
        </div>
        <div className="proj_col">
          <img src={img3} class="proj_img" alt="manlaw" />
          <h4 class="github_fix"> Github </h4>
          <a
            href="https://github.com/Serrowxd"
            target="_blank"
            rel="noopener noreferrer"
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
