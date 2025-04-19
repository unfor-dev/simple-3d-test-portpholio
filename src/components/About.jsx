import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./cube";

export default function About() {
  return (
    <div className="About" id="About">

          <div className="about-section-canvas">
            <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 2, 1]} />
                <Cube />
                <OrbitControls enableZoom={false} autoRotate />
              </Suspense>
            </Canvas>
          </div>

        <div className="about-section-wrapper">
        <div className="about-intro-info-wrapper">
          <h1>Think outside the square space</h1>
          <div className="about-info">
            <h2>Who we Are</h2>
            <p>a creative group of designers and developers with a passion for the arts.</p>
          </div>
          <a className="button" href="#Contact">See our Works</a>
        </div>
        </div>  
    </div>
  );
};
