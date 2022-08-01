import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import {PerspectiveCamera, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import DatGui, { DatNumber } from 'react-dat-gui';


export function Box() {
  return (
    <mesh>
        <boxBufferGeometry attach="geometry" args={[50, 45, 30]}/>
        <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

export function Plane2() {
  
  console.log("aiaiaiaiai")
  console.log(<planeBufferGeometry args={[100, 100, 10, 10]}/>)
  
  return (
    <mesh>
      <planeBufferGeometry args={[100, 100, 10, 10]}/>
      <meshPhongMaterial attach="material" color="blue" side={THREE.DoubleSide} />
    </mesh>
  )
}



export function Plane( props ) {
  
  // const [data, setData] = useState({
  //   width: 5,
  //   height: 5,
  //   widthSegments: 10,
  //   heightSegments: 10
  // })
  const onMouseMove = e => {
    console.log("move")
  };
  
  const mesh = useRef(null)
  const down = false

  const updateBufferGeometry = () => {
    const { geometry } = mesh.current
    const { position } = geometry.attributes
    
    console.log(position.array)
    
    for (let i = 0; i < position.array.length; i += 3) {
      //position.array[i * 3 + 2] = 2 * (Math.random() - 0.5)
      //console.log(position.array[i], position.array[i+1], position.array[i+2])
      const x = position.array[i] 
      const y = position.array[i+1] 
      const z = position.array[i+2]
      
      position.array[i+2] = z + Math.random()
      
    }
    
    position.needsUpdate = true
    geometry.computeVertexNormals()
  }
  
  useEffect(
    setInterval(
      () => updateBufferGeometry(),
      1000
    )
  )

  
  return (
    
    
    <>
    
    <mesh ref={mesh}>
      <planeBufferGeometry args={Object.values(props.data)} />
      <meshPhongMaterial attach="material" color="red" side={THREE.DoubleSide} flatShading={THREE.FlatShading} />
    </mesh>
    </>
  )
}


// geometry - the wireframe of the object, data related to the object vertices that connects them to the desired shape

// material - what goes on top of the geometry, to fill in everything in between. Basically painting the faces of the geometry.

// mesh - geometry + material

