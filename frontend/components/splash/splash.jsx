import React from 'react';

const Splash = () => (
  <section className="splash-container">
    <img className="splash-img" src={window.splashURL} />
    <span className="splash-title splash-title-top">
      Defeat the Email Empire
    </span>
    <span className="splash-title splash-title-bottom">
      With ChannelChat
    </span>
  </section>
);

export default Splash;