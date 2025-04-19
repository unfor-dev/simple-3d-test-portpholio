import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Starship(props) {
  const { nodes, materials } = useGLTF('/stealth_ship_-_vehicle_design.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="774b0b81bef045c480c695fa38c812adobjcleanermaterialmergergles">
            <mesh
              name="Object_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.lambert1}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/stealth_ship_-_vehicle_design.glb')
