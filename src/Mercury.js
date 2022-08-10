import { OrbitControls, useFBO } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

function Mercury( {scrollPerc} ) {
    
  const mercuryRef = useRef(null)
  const texture = useLoader(THREE.TextureLoader, require('./static/mercuryTexture.jpg'))  
  
  useFrame(() => {
  
  mercuryRef.current.rotation.y = 15*scrollPerc
  
  })
  
  return (
    <>
    {/* <OrbitControls/> */}
    <mesh ref={mercuryRef} scale={[0.3, 0.3, 0.3]} position={[-2, 1.9, 1]} >
        <sphereBufferGeometry attach="geometry" args={[1.5, 32, 16, Math.PI / 2, Math.PI * 2, 0, Math.PI + 1.5]} />
        <meshBasicMaterial attach="material" map={texture} />
    </mesh>
    </>
  )
}

export default Mercury