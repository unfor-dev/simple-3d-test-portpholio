import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

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
          <h2>What we Do</h2>
          <p>we enjoy creating delightful, human-centered digital experiences.</p>
        </div>
        <a className="button" href="#">Learn More</a>
      </div>

        <div className="hero-animate-section-wrapper">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[3, 1, 1]} />
                <Sphere args={[1, 100, 200]} scale={2.3}>
                  <MeshDistortMaterial
                    color="#4165dd"
                    attach="material"
                    distort={0.4}
                    speed={1.4}
                  />
                </Sphere>
              </Suspense>
            </Canvas>

        <img src="img/moonN.png" alt="Hero img" width="700" height="500" />
      </div>

    </div>

  </div>

)};

export default Hero;
