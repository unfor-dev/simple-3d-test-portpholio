import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Star(props) {
  const { nodes, materials } = useGLTF('/soviet_star.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="5ec5c81cec354162b00cacf1065e06c83ds">
            <group name="Line_5" position={[-0.021, -569.525, 0.175]}>
              <group name="3DSMeshMatrix" position={[0.021, 569.525, -0.175]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.material}
                />
              </group>
            </group>
            <group name="Star_6" position={[0, -1119.525, 0]}>
              <group name="3DSMeshMatrix_1" position={[0, 1119.525, 0]}>
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.material}
                />
              </group>
            </group>
            <group name="Star_5" position={[0, -1176.167, 0]}>
              <group name="3DSMeshMatrix_2" position={[0, 1176.167, 0]}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.material}
                />
              </group>
            </group>
            <group name="Star_4" position={[0, -976.167, 0]}>
              <group name="3DSMeshMatrix_3" position={[0, 976.167, 0]}>
                <mesh
                  name="Object_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials.material}
                />
              </group>
            </group>
            <group name="Star_3" position={[0, -1500, 0]}>
              <group name="3DSMeshMatrix_4" position={[0, 1500, 0]}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.Gold}
                />
              </group>
            </group>
            <group name="Star_2" position={[0, -1700, 0]}>
              <group name="3DSMeshMatrix_5" position={[0, 1700, 0]}>
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.Gold}
                />
              </group>
            </group>
            <group name="Star_1" position={[0, -2500.009, 0]}>
              <group name="3DSMeshMatrix_6" position={[0, 2500.009, 0]}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.material}
                />
              </group>
            </group>
            <group name="Arrow" position={[0, -1700, 0]}>
              <group name="3DSMeshMatrix_7" position={[0, 1700, 0]}>
                <mesh
                  name="Object_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials.Gold}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/soviet_star.glb')
