import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'
import { useMediaQuery } from 'react-responsive'

function Venus( {scrollPerc, animate} ) {
  
  // A ref so the rotation can be controlled by the useFrame hook.
  const venusRef = useRef(null)
  
  // The texture used on the mesh
  const texture = useLoader(THREE.TextureLoader, '/static/venusTexture.jpg')  
  
  // If the screen is small, Venus has another position.
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  
  // Updates the rotation based on the scroll percentage.
  useFrame(() => {
    if (!animate)
      return
      
    venusRef.current.rotation.y = -7*scrollPerc
  })
  
  return (
    <>
    <mesh ref={venusRef} scale={[0.8, 0.8, 0.8]} position={isMobile? [-1, 0, -3]: [3, 0, -1]} >
        <sphereBufferGeometry attach="geometry" args={[1.5, 32, 16, Math.PI / 2, Math.PI * 2, 0, Math.PI + 1.5]} />
        <meshBasicMaterial attach="material" map={texture} />
    </mesh>
    </>
  )
}

export default Venus