import React, { useRef } from "react";
import { Environment, PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <Environment preset="city" />
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]}/>
          <color attach="background" args={["#3e2c99"]} />
          <Text ref={textRef} fontSize={2.2} color="#e8e6e6">
            Unfor
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
