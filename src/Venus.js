import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'
import { useMediaQuery } from 'react-responsive'

function Venus( {scrollPerc} ) {
    
  const venusRef = useRef(null)
  const texture = useLoader(THREE.TextureLoader, require('./static/venusTexture.jpg'))  
  
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  
  useFrame(() => {
  venusRef.current.rotation.y = -7*scrollPerc
  })
  
  return (
    <>
    {/* <OrbitControls/> */}
    <mesh ref={venusRef} scale={[0.8, 0.8, 0.8]} position={isMobile? [-1, 0, -3]: [3, 0, -1]} >
        <sphereBufferGeometry attach="geometry" args={[1.5, 32, 16, Math.PI / 2, Math.PI * 2, 0, Math.PI + 1.5]} />
        <meshBasicMaterial attach="material" map={texture} />
    </mesh>
    </>
  )
}

export default Venus