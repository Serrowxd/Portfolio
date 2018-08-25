import React from 'react';

import Project from '../components/projectConst';

import img from '../assets/manlaw.png';
import img2 from '../assets/job.png';
import img3 from '../assets/github.png';

const Projects = () => {
  const button = <button class="ripple"> Code </button>;
  return (
    <div className="main_div projects">
      <div className="proj_container">
        <Project
          img={img}
          title="Mandracchia Law"
          alt="mandlaw"
          link="https://github.com/Serrowxd/mandracchia-law"
        />

        <Project
          img={img2}
          title="Rcruit"
          alt="jobme"
          link="https://github.com/Lambda-School-Labs/CS8-jobme"
        />

        <Project
          img={img3}
          title="Github"
          alt="github"
          link="https://github.com/Serrowxd"
        />
        <Project
          img={img3}
          title="Github"
          alt="github"
          link="https://github.com/Serrowxd"
        />
        <Project
          img={img3}
          title="Github"
          alt="github"
          link="https://github.com/Serrowxd"
        />
        <Project
          img={img3}
          title="Github"
          alt="github"
          link="https://github.com/Serrowxd"
        />
        <Project
          img={img3}
          title="Github"
          alt="github"
          link="https://github.com/Serrowxd"
        />
        <Project
          img={img3}
          title="Github"
          alt="github"
          link="https://github.com/Serrowxd"
        />
        <Project
          img={img3}
          title="Github"
          alt="github"
          link="https://github.com/Serrowxd"
        />
        <Project
          img={img3}
          title="Github"
          alt="github"
          link="https://github.com/Serrowxd"
        />
        <Project
          img={img3}
          title="Github"
          alt="github"
          link="https://github.com/Serrowxd"
        />
        <Project
          img={img3}
          title="Github"
          alt="github"
          link="https://github.com/Serrowxd"
        />
        <Project
          img={img3}
          title="Github"
          alt="github"
          link="https://github.com/Serrowxd"
        />
      </div>
    </div>
  );
};

export default Projects;
