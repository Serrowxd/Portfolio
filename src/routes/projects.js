import React from 'react';

import Project from '../components/projectConst';

import img from '../assets/manlaw.png';
import img2 from '../assets/job.png';
import img3 from '../assets/github.png';
import img4 from '../assets/notedcard.png';

const Projects = () => {
  return (
    <div className="main_div projects">
      <div className="proj_container">
        <Project
          img={img4}
          title="Noted"
          alt="Noted"
          link="https://github.com/Serrowxd/Noted"
          item1="React"
          item2="Styled-Components"
          item3="LESS"
          item4="Node/Django, MongoDB"
        />

        <Project
          img={img2}
          title="Rcruit"
          alt="Rcruit"
          link="https://github.com/Lambda-School-Labs/CS8-jobme"
          item1="React / Redux"
          item2="Styled-Components"
          item3="Node / MongoDB"
          item4="JSON Auth / Passport"
        />

        <Project
          img={img}
          title="Mandracchia Law"
          alt="ManLaw"
          link="https://github.com/Serrowxd/mandracchia-law"
          item1="React"
          item2="React-Strap"
          item3="CSS3"
          item4="~Project was Moved~"
        />

        <Project
          img={img3}
          title="Github"
          alt="github"
          link="https://github.com/Serrowxd"
          item1="My Github"
          item2="Updated Daily"
          item3=""
          item4=""
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
