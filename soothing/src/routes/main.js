import React from 'react';

import img from '../assets/headshot_bw.png';

const Main = () => {
  const fill = '||';

  return (
    <div className="main_div">
      {/* <img src={img} class="img" alt="headshot" /> */}
      <h1> Kevin Jolley </h1>
      <div className="main_title">
        <h4>
          {' '}
          <span>Web Developer</span>{' '}
        </h4>
        <h4> {fill} </h4>
        <h4>
          {' '}
          <span>Avid Writer</span>{' '}
        </h4>
        <h4> {fill} </h4>
        <h4>
          {' '}
          <span>JavaScript Fanatic</span>{' '}
        </h4>
      </div>
    </div>
  );
};

export default Main;
