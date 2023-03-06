import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'
import { useMediaQuery } from 'react-responsive'

function Mercury( {scrollPerc, animate} ) {
  
  // A ref so the rotation can be controlled by the useFrame hook.
  const mercuryRef = useRef(null)
  
  // The texture used on the mesh
  const texture = useLoader(THREE.TextureLoader, "/static/mercuryTexture.jpg")  
  
  // If the screen is small, Mercury has another position.
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  
  // Updates the rotation based on the scroll percentage.
  useFrame(() => {
    if (!animate)
      return
      
    mercuryRef.current.rotation.y = 15*scrollPerc
  })
  
  return (
    <>
    <mesh ref={mercuryRef} scale={[0.3, 0.3, 0.3]} position={isMobile? [0.4, 2, 0] : [-2, 1.9, 1]} >
        <sphereBufferGeometry attach="geometry" args={[1.5, 32, 16, Math.PI / 2, Math.PI * 2, 0, Math.PI + 1.5]} />
        <meshBasicMaterial attach="material" map={texture} />
    </mesh>
    </>
  )
}

export default Mercury