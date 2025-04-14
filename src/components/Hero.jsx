import React from "react";

const Hero = () => {
  return(
  <div className="Hero">

    <div className="site-hero-wrapper">
      <div className="hero-nav-wrapper">
        <img src="img/logoN.png" alt="Logo img" width="60" height="60" />
        <nav className="nav-wrapper">
          <ul className="site-nav-list">
            <li><a className="site-nav-link" href="#">Home</a></li>
            <li><a className="site-nav-link" href="#">Studio</a></li>
            <li><a className="site-nav-link" href="#">Works</a></li>
            <li><a className="site-nav-link" href="#">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="hero-left-wrapper">
        <a className="button" href="#">Contact us</a>
      </div>
    </div>
    {/* Nav end */}

    <div className="hero-section-wrapper">
      <div className="hero-intro-info-wrapper">
        <h1>Think. Make. <br /> Solve.</h1>
        <div className="hero-info">
          <h3>What we Do</h3>
          <p>we enjoy creating delightful, human-centered digital experiences.</p>
        </div>
        <a className="button" href="#">Learn More</a>
      </div>

      <div className="hero-animate-section-wrapper">
        <img src="img/moonN.png" alt="Hero img" width="700" height="500" />
      </div>

    </div>

  </div>

)};

export default Hero;
