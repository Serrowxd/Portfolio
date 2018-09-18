import React from 'react';

const Social = () => {
  return (
    <div className="main_div social">
      <div className="soc_row">
        <div className="soc_col">
          <h1> Social Links </h1>
          <a
            href="https://github.com/Serrowxd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4> GitHub </h4>
          </a>
          <a
            href="https://www.linkedin.com/in/serrowxd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4> LinkedIn </h4>
          </a>
          <a
            href="https://app.codesignal.com/profile/serrowxd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4> CodeSignal </h4>
          </a>
        </div>
        <div className="soc_col">
          <h1> Other Links </h1>
          <a
            href="https://www.twitch.tv/serrowpls"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4> Twitch </h4>
          </a>
          <a
            href="https://twitter.com/serrowxd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4> Twitter </h4>
          </a>
          <a
            href="https://www.instagram.com/serrowxd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4> Instagram </h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
