import React from 'react';

import Project from '../components/projectConst';

import noted from '../assets/projects/noted.png';
import rcruit from '../assets/projects/rcruit.png';
import manlaw from '../assets/projects/manlaw.png';
import port from '../assets/projects/port.png';
import port2 from '../assets/projects/port2.png';
import sin from '../assets/projects/sin.png';
import oncedaily from '../assets/projects/yas.png';

const Projects = () => {
  return (
    <div className="main_div projects">
      <div className="proj_container">
        <Project
          img={noted}
          title="Noted"
          alt="Noted"
          link="https://github.com/Serrowxd/Noted"
          item1="React"
          item2="Styled-Components"
          item3="LESS"
          item4="Node/Django, MongoDB"
        />

        <Project
          img={rcruit}
          title="Rcruit"
          alt="Rcruit"
          link="https://github.com/Lambda-School-Labs/CS8-jobme"
          item1="React / Redux"
          item2="Styled-Components"
          item3="Node / MongoDB"
          item4="JSON Auth / Passport"
        />

        <Project
          img={oncedaily}
          title="Once Daily"
          alt="oncedaily"
          link="https://github.com/Serrowxd/Once_Daily"
          item1="A new Website"
          item2="Every Day"
          item3="HTML/LESS/JQuery"
          item4="Updated Daily"
        />

        <Project
          img={manlaw}
          title="Mandracchia Law"
          alt="ManLaw"
          link="https://github.com/Serrowxd/mandracchia_refactor"
          item1="React"
          item2="Styled-Components"
          item3="LESS"
          item4="Material-UI"
        />

        <Project
          img={manlaw}
          title="Mandracchia Law #2"
          alt="ManLaw"
          link="https://github.com/Serrowxd/mandracchia-law"
          item1="React"
          item2="React-Strap"
          item3="CSS"
          item4="Refactored"
        />

        <Project
          img={sin}
          title="SinForsaken"
          alt="SinForsaken"
          link="https://github.com/Serrowxd/SinForsaken_React"
          item1="React"
          item2="Styled-Components"
          item3="LESS"
          item4="Material-UI"
        />
        <Project
          img={port}
          title="Portfolio"
          alt="github"
          link="https://github.com/Serrowxd"
          item1="React"
          item2="LESS"
          item3="Portfolio!"
          item4="You're here now!"
        />
        <Project
          img={port2}
          title="Portfolio #2"
          alt="github"
          link="https://github.com/Serrowxd/soothing_resume"
          item1="HTML5"
          item2="LESS"
          item3="JQuery"
        />
      </div>
    </div>
  );
};

export default Projects;

// Projects have no reactivity below 1920x1080 - will need to modify this.
