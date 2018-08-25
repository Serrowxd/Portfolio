import React from 'react';

import img from '../assets/work.gif';

const WorkyWorky = () => {
  return (
    <div className="main_div worky">
      <img src={img} alt="hard at work (not really)" />
      <p>
        Still working on this page! You can see it anyways if you're feeling
        risky.
      </p>
    </div>
  );
};

export default WorkyWorky;
