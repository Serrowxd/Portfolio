import React from 'react';

// import img from '../assets/headshot_bw.png';

const Main = () => {
  const fill = '||';

  return (
    <div className="main_div">
      {/* <img src={img} class="img" alt="headshot" /> */}
      <h1> Kevin Jolley </h1>
      <div className="main_title">
        <h4> Web Developer </h4>
        <h4 class="fill_text"> {fill} </h4>
        <h4> Avid Writer </h4>
        <h4 class="fill_text"> {fill} </h4>
        <h4> JavaScript Fanatic </h4>
      </div>
    </div>
  );
};

export default Main;
