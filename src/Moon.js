import { OrbitControls, useFBO } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'
import { useMediaQuery } from 'react-responsive'

function Moon( {scrollPerc} ) {
    
  const moonRef = useRef(null)
  const texture = useLoader(THREE.TextureLoader, require('./static/moonTexture.jpeg'))  
  
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  
  useFrame(() => {
    moonRef.current.rotation.y = 25 * scrollPerc
    if (isMobile) {
      moonRef.current.position.x = -2 + 5.5 * scrollPerc
      moonRef.current.position.y = 1.4 - 13.4 * scrollPerc
    }
    else {
      moonRef.current.position.x = 10 - 30 * scrollPerc
      moonRef.current.position.y = -1.4 - 7.4 * scrollPerc
    }
  })

  return (
    <>
    {/* <OrbitControls/> */}
    <mesh ref={moonRef} scale={[0.1, 0.1, 0.1]} position={[5, -2.4, 0]} >
        <sphereBufferGeometry attach="geometry" args={[1.5, 32, 16, Math.PI / 2, Math.PI * 2, 0, Math.PI + 1.5]} />
        <meshBasicMaterial attach="material" map={texture} />
    </mesh>
    </>
  )
}

export default Moon