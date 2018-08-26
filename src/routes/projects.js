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
          item1="React"
          item2="React-Strap"
          item3="CSS3"
          item4="~Project was Moved~"
        />

        <Project
          img={img2}
          title="Rcruit"
          alt="jobme"
          link="https://github.com/Lambda-School-Labs/CS8-jobme"
          item1="React / Redux"
          item2="Styled-Components"
          item3="Node / MongoDB"
          item4="JSON Auth / Passport"
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

// Projects have no reactivity below 1920x1080 - will need to modify this.
