import React, { useRef } from 'react'

function Planets() {
    
    const mercuryRef = useRef(null)
    const venusRef = useRef(null)
    
  return (
    <>
    {/* Mercury */}
    <mesh ref={mercuryRef} >
        <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
        <meshBasicMaterial attach="material" color="#ff0000" />
    </mesh>
    
    {/* Venus */}
    <mesh ref={venusRef} >
        <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
        <meshBasicMaterial attach="material" color="#ff0000" />
    </mesh>
    </>
  )
}

export default Planets