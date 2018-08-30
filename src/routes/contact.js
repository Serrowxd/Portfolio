import React from 'react';

const Contact = () => {
  return (
    <div className="main_div contact">
      <div className="contact_form">
        <h1> Get ahold of me! </h1>
        <form name="contact" method="POST" netlify action="/">
          <p>
            <label>
              <input type="text" placeholder="Name" name="name" />
            </label>
          </p>
          <p>
            <label>
              <input type="email" placeholder="Email" name="email" />
            </label>
          </p>
          <p>
            <label>
              <textarea name="message" placeholder="Reason for contact?" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
      <div className="contact_form">
        <h1>Social Media</h1>
        <a
          href="https://github.com/Serrowxd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3> Github </h3>
        </a>
        <a
          href="https://www.linkedin.com/in/serrowxd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3> LinkedIn </h3>
        </a>
        <a
          href="https://app.codesignal.com/profile/serrowxd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3> CodeSignal </h3>
        </a>
        <a
          href="https://www.instagram.com/serrowxd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3> Instagram </h3>
        </a>
      </div>
    </div>
  );
};

export default Contact;
