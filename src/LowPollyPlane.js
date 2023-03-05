import { useFrame } from '@react-three/fiber';
import React, { useState, useRef, useLayoutEffect } from 'react'
import * as THREE from "three";
import { useMediaQuery } from 'react-responsive'

function LowPollyPlane({ scrollPerc, animate }) {

  // Some information about the plane
  const data = {
    width: 75,
    height: 50,
    widthSegments: 38,
    heightSegments: 25
  }

  // The number of vertices that the plane has
  const NR_VERTICES = 3276

  // Query to check if the device is a mobile device
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  // Check if it is the first iteration 
  const [first, setFirst] = useState(0);
  
  // The initial positions of every vertice 
  const [initialPositions, setInitialPositions] = useState(0);
  
  // A counter to keep track of the number of frames that have passed
  const [frame, setFrame] = useState(0);
  
  // Offsets that are used to make the vertices rotate. Even though they are random, they must be saved to enable the vertices to go back to the same position after some iterations
  const [randomOffsets, setRandomOffsets] = useState(0);
  
  // The position of the plane, depending whether it is a mobile device or not
  const [meshPosition, setMeshPostion] = useState(isMobile ? [1, 1, 1] : [0, 0, 0]);
  
  // References to all the elements
  const meshRef = useRef(null);
  const geoRef = useRef(null);
  const matRef = useRef(null);

  // Variables to check if the plane is currently in an animation.
  // The plane is supposed to finish its animation before starting a new one
  const [goToNext, setGoToNext] = useState(true)
  const [isDisappearing, setIsDisappearing] = useState(false)
  const [isAppearing, setIsAppearing] = useState(false)
  
  // Function to sleep, in order to animate the plane appearance/disappearance smoothly
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Function that makes the plan appear & disappear after a certain threshold
  // In order to appear / disappear, the the device must not be mobile, the scroll percentage must be hover 0.3336 (a value that looked good) and the plane must not be already appearing / disappearing
  useFrame(() => {
    
    if (!animate)
      return
    
    if (!isMobile && scrollPerc > 0.3336 && goToNext && !isAppearing && !isDisappearing) {
      disappearPlane()
      setGoToNext(false)
    }

    else if (scrollPerc <= 0.3336 && !goToNext && !isAppearing && !isDisappearing) {
      appearPlane()
      setGoToNext(true)
    }

  });

  // Function that makes the plane disappear
  // Sets the isDisappearing variable to true and changes the Mesh position in a loop, in a way that looked good
  // Finally, sets the isDisappearing variable to false
  async function disappearPlane() {
    setIsDisappearing(true)
    for (let i = 0; i < 170; i++) {
      await sleep(1)
      setMeshPostion([-0.1 * i, -0.3 * i, -0.4 * i])
    }
    setIsDisappearing(false)
  }

  // Function that makes the plane disappear
  // Sets the isAppearing variable to true and changes the Mesh position in a loop, in a way that looked good.
  // Finally, sets the isAppearing variable to false
  async function appearPlane() {
    setIsAppearing(true)
    for (let i = 75; i >= 0; i -= 2) {
      await sleep(1)
      setMeshPostion([-0.1 * i, -0.3 * i, -0.4 * i])
    }
    setIsAppearing(false)
  }

  
  // Function that generates the hover effect.
  // Whenever the mouse moves on top of the plane, the vertices beneath the mouse change color
  function onMouseMove(e) {
    
    if (!animate)
      return
      
    // Gets the face that the mouse is hovering over
    let face = e.intersections[0].face

    // Sets the color of the vertices that are beneath the mouse to a different color
    // The explanation of "face.a", "face.b", ... is explained in the video that I got inspiration from (https://youtu.be/YK1Sw_hnm58)
    setColorArray(prev => {
      let newState = prev
      newState[face.b * 3] = 0.02
      newState[face.a * 3] = 0.02
      newState[face.c * 3] = 0.02

      e.intersections[0].object.geometry.attributes.color.needsUpdate = true

      return newState;
    })
    
    // After a timeout, the color of the vertices change to a less intense color
    setTimeout(() => {
      setColorArray(prev => {
        let newState = prev
        newState[face.a * 3] = 0.5
        newState[face.b * 3] = 0.5
        newState[face.c * 3] = 0.5

        e.intersections[0].object.geometry.attributes.color.needsUpdate = true

        return newState;
      })
    }, 1500)

    // After a second timeout, the color of the vertices change to an even less intense color
    setTimeout(() => {
      setColorArray(prev => {
        let newState = prev
        newState[face.a * 3] = 0.75
        newState[face.b * 3] = 0.75
        newState[face.c * 3] = 0.75

        e.intersections[0].object.geometry.attributes.color.needsUpdate = true

        return newState;
      })
    }, 1500)
    
    // Finally, after a last timeout, the color of the vertices change to the original color
    setTimeout(() => {
      setColorArray(prev => {
        let newState = prev
        newState[face.a * 3] = 1
        newState[face.b * 3] = 1
        newState[face.c * 3] = 1

        e.intersections[0].object.geometry.attributes.color.needsUpdate = true

        return newState;
      })
    }, 1500)
    
  };

  
  // Function that generates the first position of the vertices
  useLayoutEffect(() => {

    if (first)
      return
    setFirst(true)

    const { geometry } = meshRef.current
    const { position } = geometry.attributes
    const originalPositions = [];
    const offsets = [];
    
    // Generates random offsets for the vertices
    for (let i = 0; i < NR_VERTICES * 3; i++) {
      offsets.push(Math.random() - 0.5)
    }
    
    // Generates the initial positions of the vertices (gets the default positions of the vertices (x,y,z) and adds some disturbance to them (Math.random). The random offsets are only used in the animation of the place)
    for (let i = 0; i < position.array.length; i += 3) {

      const x = position.array[i]
      const y = position.array[i + 1]
      const z = position.array[i + 2]

      position.array[i] = x + 2 * (Math.random() - 0.5)
      position.array[i + 1] = y + 2 * (Math.random() - 0.5)
      position.array[i + 2] = z + 1.5 * (Math.random() - 0.5)

      originalPositions.push(position.array[i], position.array[i + 1], position.array[i + 2])
    }

    // Sets the corresponding state variables
    setInitialPositions(originalPositions)
    setRandomOffsets(offsets)

    position.needsUpdate = true
    geometry.computeVertexNormals()
  }, [meshRef]);

  // Creates the colors of the vertices (all red)
  const colors = []
  function fillColors() {
    for (let i = 0; i < NR_VERTICES * 3; i++)
      colors.push(1, 0, 0)

  }
  fillColors()
  
  // This useFrame animates the plane by adding some rotation to the vertices.
  useFrame(() => {
    
    if (!animate)
      return
    
    // Gets the current position of the vertices
    const { geometry } = meshRef.current
    const { position } = geometry.attributes

    // For each vertex, adds the random offset to the current position, inside a cos/sin function, to turn the plane animation periodic
    // The maths behind this are better explained in the video (https://youtu.be/YK1Sw_hnm58)
    for (let i = 0; i < position.array.length; i += 3) {
      position.array[i] = initialPositions[i] + (Math.cos(frame + randomOffsets[i]))
      position.array[i + 1] = initialPositions[i + 1] + (Math.sin(frame + randomOffsets[i + 1]))
    }
    setFrame(prev => prev + 0.01);

    position.needsUpdate = true
    geometry.computeVertexNormals()

  })

  // Transforms the array from the THREE.js buffer attribute to a React state variable
  let colorsArrayToTransform = new Float32Array(colors, 3)
  const [colorArray, setColorArray] = useState(colorsArrayToTransform);

  // Creates the mesh with the respective geometry (The animated vertices) and material
  return (
    <>
      <mesh ref={meshRef} onPointerMove={e => onMouseMove(e)} position={meshPosition}>
        <planeBufferGeometry ref={geoRef} attach="geometry" args={Object.values(data)}>
          <bufferAttribute attach="attributes-color" count={colorArray.length / 3} array={colorArray} itemSize={3} />
        </planeBufferGeometry>
        <meshPhysicalMaterial ref={matRef} attach="material" vertexColors={true} side={THREE.DoubleSide} flatShading={THREE.FlatShading} />
      </mesh>
    </>
  )
}

export default LowPollyPlane