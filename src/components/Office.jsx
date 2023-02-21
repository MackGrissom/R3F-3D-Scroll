import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap
  from 'gsap';

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Office(props) {
  const { nodes, materials } = useGLTF('./models/WawaOffice.glb')
  const ref = useRef();
  const l = useRef();
  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // vertical animation
    tl.current.to(
      ref.current.position,
      {
        duration:2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    )
  }, []);



  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
      <mesh geometry={nodes['02_library'].geometry} material={materials['02']} position={[0, 2.11, -2.23]} />
      <mesh geometry={nodes['03_attic'].geometry} material={materials['03']} position={[-1.97, 4.23, -2.2]} />
    </group>
  )
}

useGLTF.preload('./models/WawaOffice.glb')
