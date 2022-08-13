import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { forwardRef, Suspense, useRef } from 'react'
import Model from './PedroAvatar'

function PedroWaving() {

    useFrame((state) => {
        console.log("state.camera:", state.camera)
        // state.camera.translateX(0.01)
        // state.camera.translateY(0.01)
        state.camera.position.y = 3
        // state.camera.translateZ(0.01)
        state.camera.rotateX(0.3)
        state.camera.rotateY(0.02)
        state.camera.scale.set(1, 1, 0.8)     
 
    })

    return (
        <>
            <OrbitControls />
            <ambientLight intensity={0.05} color={"0xffffff"} />
            <directionalLight intensity={1} color={0xffffff} position={[2, 2, 1]} />
            <Suspense fallback={null}>
                <Model/>
            </Suspense>
        </>
    )
}

export default PedroWaving