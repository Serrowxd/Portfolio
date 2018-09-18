import React from 'react';

import img1 from '../assets/skills/react.png';
import img2 from '../assets/skills/ember.png';
import img3 from '../assets/skills/jquery.png';
import img4 from '../assets/skills/vue.png';
import img5 from '../assets/skills/python.png';
import img6 from '../assets/skills/django.png';
import img7 from '../assets/skills/bootstrap.png';
import img8 from '../assets/skills/angular.png';
import img9 from '../assets/skills/html5.png';
import img10 from '../assets/skills/sass.png';
import img11 from '../assets/skills/less.png';
import img12 from '../assets/skills/css3.png';
import img13 from '../assets/skills/node.png';
import img14 from '../assets/skills/mongodb.png';
import img15 from '../assets/skills/babel.png';

const Skills = () => {
  return (
    <div className="main_div skills">
      {/* <h1> Skills </h1> */}
      <h2>
        My primary focus lies in JavaScript, but I keep my horizons broad and
        challenge myself with something new every day.
      </h2>
      <div className="skills_row">
        <div className="skills_col">
          <img src={img1} class="skills_img" alt="img" />
          <h4> React </h4>
          <img src={img2} class="skills_img fix_ember" alt="img" />
          <h4> Ember </h4>
          <img src={img3} class="skills_img" alt="img" />
          <h4> JQuery </h4>
        </div>
        <div className="skills_col">
          <img src={img4} class="skills_img" alt="img" />
          <h4> Vue </h4>
          <img src={img5} class="skills_img" alt="img" />
          <h4> Python </h4>
          <img src={img6} class="skills_img" alt="img" />
          <h4> Django </h4>
        </div>
        <div className="skills_col">
          <img src={img7} class="skills_img" alt="img" />
          <h4> Bootstrap </h4>
          <img src={img8} class="skills_img" alt="img" />
          <h4> Angular </h4>
          <img src={img9} class="skills_img fix_html5" alt="img" />
          <h4> HTML5 </h4>
        </div>
        <div className="skills_col">
          <img src={img10} class="skills_img" alt="img" />
          <h4> SASS </h4>
          <img src={img11} class="skills_img" alt="img" />
          <h4> LESS </h4>
          <img src={img12} class="skills_img" alt="img" />
          <h4> CSS3 </h4>
        </div>
        <div className="skills_col">
          <img src={img13} class="skills_img" alt="img" />
          <h4> NodeJS </h4>
          <img src={img14} class="skills_img" alt="img" />
          <h4> MongoDB </h4>
          <img src={img15} class="skills_img fix_babel" alt="img" />
          <h4> Babel </h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;
