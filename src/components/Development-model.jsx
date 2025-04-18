import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shoe from "./Shoe-model";

const Development = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Shoe />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <p>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </p>
    </>
  );
};

export default Development;
