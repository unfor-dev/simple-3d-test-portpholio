import React from "react";

const Hero = () => {
  return(

  <div className="site-hero-wrapper">
    <div className="hero-nav-wrapper">
      <img src="img/logoN.png" alt="Hero img" width="60" height="60" />
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
      <img src="img/search.png" alt="Hero search" width="27" height='20' />
      <a className="site-header-contact-button" href="#">Contact us</a>
    </div>
  </div>
)};

export default Hero;
