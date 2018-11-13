import React from 'react';

import Project from '../components/projectConst';

import noted from '../assets/projects/noted.png';
import rcruit from '../assets/projects/rcruit.png';
import manlaw from '../assets/projects/manlaw.png';
import port from '../assets/projects/port.png';
import port2 from '../assets/projects/port2.png';
import sin from '../assets/projects/sin.png';
import oncedaily from '../assets/projects/yas.png';
import sinnew from '../assets/projects/sinnew.png';
import xuen from '../assets/projects/xuen.png';
import lfg from '../assets/projects/lfg.png';

const Projects = () => {
  return (
    <div className="main_div projects">
      <div className="proj_container">
        <Project
          img={noted}
          title="Noted"
          alt="Noted"
          link_dep="https://github.com/Serrowxd/Noted"
          link_hub="https://github.com/Serrowxd/Noted"
          item1="React"
          item2="Styled-Components"
          item3="LESS"
          item4="Node/Django"
          modal_1="Note taking, redifined"
          modal_2="JavaScript, Python"
          modal_3="React, LESS, Styled-Components, NodeJS, Django"
        />

        <Project
          img={rcruit}
          title="Rcruit"
          alt="Rcruit"
          link_dep="https://www.rcruit.app/"
          link_hub="https://github.com/Lambda-School-Labs/CS8-jobme"
          item1="React / Redux"
          item2="Styled-Components"
          item3="Node / MongoDB"
          item4="JSON Auth / Passport"
          modal_1="Tinder for Job Searching"
          modal_2="JavaScript"
          modal_3="React, Styled-Components, NodeJS"
        />

        <Project
          img={oncedaily}
          title="Once Daily"
          alt="oncedaily"
          link_dep="https://github.com/Serrowxd/Once_Daily"
          link_hub="https://github.com/Serrowxd/Once_Daily"
          item1="A new Website"
          item2="Every Day"
          item3="HTML/LESS/JQuery"
          item4="Updated Daily"
          modal_1="A new website, every day"
          modal_2="JavaScript"
          modal_3="HTML, LESS, JQuery"
        />

        <Project
          img={port}
          title="Portfolio"
          alt="github"
          link_dep="https://kevintjolley.com/"
          link_hub="https://github.com/Serrowxd/Portfolio"
          item1="React"
          item2="LESS"
          item3="Portfolio!"
          item4="You're here now!"
          modal_1="My Portfolio"
          modal_2="JavaScript"
          modal_3="React, LESS"
        />

        <Project
          img={manlaw}
          title="Mandracchia Law"
          alt="ManLaw"
          link_dep="https://github.com/Serrowxd/mandracchia_refactor"
          link_hub="https://github.com/Serrowxd/mandracchia_refactor"
          item1="React"
          item2="Styled-Components"
          item3="LESS"
          item4="Material-UI"
          modal_1="Freelance Attorney Page"
          modal_2="JavaScript"
          modal_3="React, LESS, Styled-Components"
        />

        <Project
          img={sinnew}
          title="SinForsaken"
          alt="SinForsaken"
          link_dep="https://romantic-mclean-a61458.netlify.com/"
          link_hub="https://github.com/Serrowxd/Once_Daily/tree/master/10-30"
          item1="HTML"
          item2="LESS"
          item3="JQuery"
          modal_1="Guild Website, Refactored"
          modal_2="JavaScript"
          modal_3="HTML, LESS, JQuery"
        />

        <Project
          img={xuen}
          title="Xuen Edits"
          alt="SinForsaken"
          link_dep="https://ecstatic-bhabha-30485b.netlify.com"
          link_hub="https://github.com/Serrowxd/Once_Daily/tree/master/10-26"
          item1="HTML"
          item2="LESS"
          item3="JQuery"
          modal_1="A Once Daily Project"
          modal_2="JavaScript"
          modal_3="HTML, LESS, JQuery"
        />

        <Project
          img={oncedaily}
          title="xShenxiao"
          alt="SinForsaken"
          link_dep="https://upbeat-hawking-b6bbf8.netlify.com/"
          link_hub="https://github.com/Serrowxd/Once_Daily/tree/master/10-27"
          item1="HTML"
          item2="LESS"
          item3="JQuery"
          modal_1="A Once Daily Project"
          modal_2="JavaScript"
          modal_3="HTML, LESS, JQuery"
        />

        <Project
          img={lfg}
          title="IHLFG"
          alt="SinForsaken"
          link_dep="https://eager-khorana-b77fd6.netlify.com/"
          link_hub="https://github.com/Serrowxd/IHLFG"
          item1="React"
          item2="Styled-Components"
          item3="LESS"
          item4="Firebase"
          modal_1="World of Warcraft - Looking for Group"
          modal_2="JavaScript"
          modal_3="React, LESS, Styled-Components, Firebase"
        />

        <Project
          img={sin}
          title="SinForsaken [OLD]"
          alt="SinForsaken"
          link_dep="https://sinforsakenguild.netlify.com/"
          link_hub="https://github.com/Serrowxd/SinForsaken_React"
          item1="React"
          item2="Styled-Components"
          item3="LESS"
          item4="Material-UI"
          modal_1="Guild Website"
          modal_2="JavaScript"
          modal_3="React, LESS, Styled-Components, Material-UI"
        />

        <Project
          img={manlaw}
          title="Mandracchia Law [OLD]"
          alt="ManLaw"
          link_dep="https://eager-ritchie-1c71bb.netlify.com/"
          link_hub="https://github.com/Serrowxd/mandracchia-law"
          item1="React"
          item2="React-Strap"
          item3="CSS"
          item4="Refactored"
          modal_1="Unmaintained - Refactored"
          modal_2="JavaScript"
          modal_3="React, React-Strap, CSS"
        />

        <Project
          img={port2}
          title="Portfolio [OLD]"
          alt="github"
          link_dep="https://brave-poincare-8b5b6a.netlify.com/"
          link_hub="https://github.com/Serrowxd/soothing_resume"
          item1="HTML"
          item2="LESS"
          item3="JQuery"
          modal_1="An outdated Portfolio project"
          modal_2="JavaScript"
          modal_3="HTML, LESS, JQuery"
        />
      </div>
    </div>
  );
};

export default Projects;

// Projects have no reactivity below 1920x1080 - will need to modify this.
