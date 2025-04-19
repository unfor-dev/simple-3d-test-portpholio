import React, { Suspense } from "react";
import { Stage, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Star from "./star-model";

const Development = () => {
  return (
    <>
            <Canvas>
              <Suspense fallback={null}>
                <Stage environment="city" intensity={0.6}>
                  <Star />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
              </Suspense>
            </Canvas>
    </>
  );
};

export default Development;
