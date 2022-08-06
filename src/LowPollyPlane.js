import { useFrame } from '@react-three/fiber';
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react'
import * as THREE from "three";

function LowPollyPlane( {data, scrollPerc} ) {
  
  // const [data, setData] = useState({
  //   width: 5,
  //   height: 5,
  //   widthSegments: 10,
  //   heightSegments: 10
  // })
  const NR_VERTICES = 3276
  
  const [mouse, setMouse] = useState(0);
  //const [colorArrays2, setColorArrays2] = useState(null);
  const [maybe, setMaybe] = useState(0);
  const [initialPositions, setInitialPositions] = useState(0);
  const [frame, setFrame] = useState(0);
  const [randomOffsets, setRandomOffsets] = useState(0);
  const [meshPosition, setMeshPostion] = useState([0,0,0]);
  const [meshPosition2, setMeshPostion2] = useState(() => new THREE.Vector3(0, 0, 0));
  
  const meshRef = useRef(null);
  const geoRef = useRef(null);
  const matRef = useRef(null);
  
  const down = false
  let first = false
  
  const [goToNext, setGoToNext] = useState(true)
  const [isDisappearing, setIsDisappearing] = useState(false)
  const [isAppearing, setIsAppearing] = useState(false)
  const [isDisappeared, setIsDisappeared] = useState(false)
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} 
  
  useFrame(() => {

    if (scrollPerc > 0.3336 && goToNext && !isAppearing && !isDisappearing) {
      console.log("Disappearing Plane!", scrollPerc)
      disappearPlane()
      setGoToNext(false)
    }
    
    else if (scrollPerc <= 0.3336 && !goToNext && !isAppearing && !isDisappearing) {
      setIsAppearing(true)
      console.log("Appearing Plane!", scrollPerc)
      appearPlane()
      setGoToNext(true)
    }
  
  });
  
  async function disappearPlane() {
    setIsDisappearing(true)
    for (let i = 0; i < 170; i++) {
      await sleep(1)
      setMeshPostion([-0.1*i,-0.3*i,-0.4*i])
    }
    setIsDisappearing(false)
    setIsDisappeared(true)
    console.log("(D) mesh position", meshPosition)
  }
  
  async function appearPlane() {
    setIsAppearing(true)
    for (let i = 169; i >= 0; i--) {
      await sleep(1)
      setMeshPostion([-0.1*i,-0.3*i,-0.4*i])
    }
    setIsAppearing(false)
    setIsDisappeared(false)
    console.log("(A) mesh position", meshPosition)
  }
  
  function onMouseMove(e) {
    setMouse({
        x: (e.clientX / window.innerWidth)*2 - 1, 
        y: -(e.clientY / window.innerHeight)*2 + 1
    })
    
    let face = e.intersections[0].face
    // console.log(e.intersections[0].object.geometry.attributes.normal.array.length)

    setColorArray2(prev => {
      let newState = prev
      newState[face.b*3] = 0.02
      newState[face.a*3] = 0.02
      newState[face.c*3] = 0.02
      
      e.intersections[0].object.geometry.attributes.color.needsUpdate = true

      return newState;
    })
    
    setTimeout(() => {
      setColorArray2(prev => {
        let newState = prev
        newState[face.a*3] = 0.5 
        newState[face.b*3] = 0.5
        newState[face.c*3] = 0.5
        
        e.intersections[0].object.geometry.attributes.color.needsUpdate = true
  
        return newState;
      })
    }, 1500)
    
    setTimeout(() => {
      setColorArray2(prev => {
        let newState = prev
        newState[face.a*3] = 0.75 
        newState[face.b*3] = 0.75
        newState[face.c*3] = 0.75
        
        e.intersections[0].object.geometry.attributes.color.needsUpdate = true
  
        return newState;
      })
    }, 1500)
    
    setTimeout(() => {
      setColorArray2(prev => {
        let newState = prev
        newState[face.a*3] = 1 
        newState[face.b*3] = 1
        newState[face.c*3] = 1
        
        e.intersections[0].object.geometry.attributes.color.needsUpdate = true
  
        return newState;
      })
    }, 1500)
  };
  
  
  
  const updateBufferGeometry = () => {
    
    if (maybe)
      return
    setMaybe(true)
    
    const { geometry } = meshRef.current
    const { position } = geometry.attributes
    const originalPositions = [];
    const offsets = [];
    
    for (let i = 0; i < NR_VERTICES*3; i++){
      offsets.push(Math.random() - 0.5)    
    }
    
    for (let i = 0; i < position.array.length; i += 3) {
      //position.array[i * 3 + 2] = 2 * (Math.random() - 0.5)
      //console.log(position.array[i], position.array[i+1], position.array[i+2])
      const x = position.array[i] 
      const y = position.array[i+1] 
      const z = position.array[i+2]
      
      position.array[i] = x + 2*(Math.random() - 0.5)
      position.array[i+1] = y + 2*(Math.random() - 0.5)
      position.array[i+2] = z + 1.5*(Math.random() - 0.5)
      
      originalPositions.push(position.array[i], position.array[i+1], position.array[i+2])
    }
    
    setInitialPositions(originalPositions)
    setRandomOffsets(offsets)
    
    
    position.needsUpdate = true
    geometry.computeVertexNormals()
  }
  
  useLayoutEffect(() => updateBufferGeometry(), [meshRef]);
  
  const colors = []
  function fillColors() {
    for (let i = 0; i < NR_VERTICES * 3; i++)
      colors.push(1, 0, 0)
      
  }
  fillColors()

  useFrame(() => {
    const { geometry } = meshRef.current
    const { position } = geometry.attributes
    
    for (let i = 0; i < position.array.length; i += 3) {
      position.array[i] = initialPositions[i] + (Math.cos(frame + randomOffsets[i]))
      position.array[i+1] = initialPositions[i+1] + (Math.sin(frame + randomOffsets[i+1]))
    }
    
    setFrame(prev => prev+0.01);
    
    position.needsUpdate = true
    geometry.computeVertexNormals()
    
  })
  
  let colorsArray = new Float32Array(colors, 3)
  const [colorArray2, setColorArray2] = useState(colorsArray);
  
  return (
    
    
    <>
    <mesh ref={meshRef} onPointerMove={e => onMouseMove(e)} position={meshPosition}>
      <planeBufferGeometry ref={geoRef} attach="geometry" args={Object.values(data)}>
        <bufferAttribute attach="attributes-color" count={colorArray2.length / 3} array={colorArray2} itemSize={3} />
      </planeBufferGeometry>
      <meshPhysicalMaterial ref={matRef} attach="material" vertexColors={true} side={THREE.DoubleSide} flatShading={THREE.FlatShading} />
    </mesh>
    </>
  )
}

export default LowPollyPlane