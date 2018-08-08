import React from 'react';

const About = () => {
  return (
    <div className="main_div about">
      {/* <h1> About </h1> */}
      <h2>
        {' '}
        - <span>Kevin Jolley</span>{' '}
      </h2>
      <div className="about_content">
        <div className="about_left">
          <p>
            I'm a 23 year old programmer based out of Houston Texas. I'm very
            analytical, optimistic, and a massive perfectionist. My primary
            focus is to become a well-rounded Engineer both in Web Design and
            Software Develeopment.
          </p>

          <p>
            If I could summarize myself into a paragraph, it would go something
            like this; <br />
            An optimistic perfectionist with a keen sense of misdirection,
            backed with an incredible amount of luck, a group of very patient
            and caring friends (Jared, Austin, Randall, Felix, Shen), and an
            unbreakable desire to become the absolute best at what I do - no
            matter the cost.
          </p>

          <p class="hide_me">
            A bit more in-depth, <br />
            I've got a pretty heavy background in computers and gaming, starting
            from when I was very young (2-3 years old). While they may not mean
            a lot in the real world, I have numerable gaming achievements that
            I'm incredibly proud of;
            <ul>
              <li>
                Rank #55 Feral Druid World - <span>World of Warcraft</span> |{' '}
                <strong>2017-2018</strong>
              </li>
              <li>
                Tournament Level Professional [Elementalist] -{' '}
                <span>Guild Wars 2</span> | <strong>2016-2017</strong>
              </li>
              <li>
                Ranked Top 200 US Ladder [Elementalist] -{' '}
                <span>Guild Wars 2</span> | <strong>2015-2017</strong>
              </li>
            </ul>
          </p>
        </div>
        <div className="about_right">
          <p>
            Outside of Code, I have an unhealthy obsession with
            Creative/Fictional Writing, Dungeons & Dragons, Art, Photography,
            Fan-Fiction, Music, and Creative Design.
          </p>
          <p class="hide_me">
            I've been a bookworm since the 3rd grade, my nose always firmly
            planted in a novel. My favorite Authors to date (and my biggest
            inspirations) would have to be;
            <ul>
              <li> J.K. Rowling(Harry Potter) </li>
              <li> Christopher Paolini(Eragon) </li>
              <li> Brian Jacques(Redwall) </li>
            </ul>
            I am in the process of publishing my own Novel, name and release
            date are currently{' '}
            <span>
              <strong>TBD</strong>
            </span>
            . Creative Writing (poetry included) is something I'm incredibly
            passionate about.
          </p>
          <p>
            Music has always been something that I'm passionate about, though
            I'm not that great at making it (I can play the Piano/Guitar kinda),
            it's ever-present in my life. If I'm awake, I'm probably listening
            to music. <br />
            Favorite artists? Ambyion, Bazanji, Kazukii, Phelian, Electus,
            Blackmill, Skrux - anything <span>Chillstep</span> is my genre.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
