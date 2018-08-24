import React from 'react';

import Project from '../components/projectConst';

import img from '../assets/manlaw.png';
import img2 from '../assets/job.png';
import img3 from '../assets/github.png';

const Projects = () => {
  const button = <button class="ripple"> Code </button>;
  return (
    <div className="main_div projects">
      <h1> I will populate this with my projects as they become available! </h1>

      <div className="proj_row">
        <Project
          img={img}
          alt="mandlaw"
          link="https://github.com/Serrowxd/mandracchia-law"
        />

        <Project
          img={img2}
          alt="jobme"
          link="https://github.com/Lambda-School-Labs/CS8-jobme"
        />

        <Project img={img3} alt="github" link="https://github.com/Serrowxd" />
      </div>
    </div>
  );
};

export default Projects;
