import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Star2(props) {
  const { nodes, materials } = useGLTF('/star_lantern.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={6.089}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="decahedron_star_lp_161"
                position={[-1.396, 0.944, 0.05]}
                rotation={[0.714, 0.71, 0.153]}
                scale={0.057}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials['Material.002']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/star_lantern.glb')
