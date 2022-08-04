import { OrbitControls, PerspectiveCamera, OrthographicCamera, Stars, ScrollControls, Html, Sky } from '@react-three/drei';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import React, { useState, useEffect, Suspense, useRef } from 'react'
import { DirectionalLight } from 'three';
import { Text } from "troika-three-text";

extend({ Text })

const font = {"AvenirBold": "./fonts/AvenirNextLTPro-Bold.otf"}

function ContactMe() {
    
    const [scrollPosition, setScrollPosition] = useState(0);
    const [rotation, setRotation] = useState([0, 0, 0, 0]);
    const [zPosition, setZPosition] = useState(-13.2);
    const [steps, setSteps] = useState(0);
    
    const canvasRef = useRef(null);
    
    const opts = {fontSize: 30, lineHeight: 1.6, fontWeight:11, letterSpacing:0.1, color:"black"}
    const opts2 = {fontSize: 0.2, lineHeight: 1.6, fontWeight:11, letterSpacing:0.1}
    
    let oldPosition = -1
    let zoomType = "zoomSlow"
    
    const handleScroll = () => {
      let scrollDown = true;
      let newPosition = window.pageYOffset;
      
      console.log("newPosition", newPosition)
      console.log("innerHeight", window.innerHeight)
      
      if (newPosition < oldPosition){
        scrollDown = false;
      }
      
      
      oldPosition = newPosition
      
      if (newPosition - window.innerHeight < 1300){
        setTimeout(() => {
        setZPosition(13.2);
        }, 150)
        return;
      }

      setZPosition(prevState => {
        

        
        if (prevState > 1)
          zoomType = "zoomSlow"
        else
          zoomType = "zoomFast"
        
        switch (zoomType) {
          
          case "zoomFast":
            if (scrollDown)
              return prevState - 0.8;  
            
            else
              return prevState + 0.8;
              
          case "zoomSlow":
            if (scrollDown){
              return prevState - 0.1; 
              }
            else if (prevState - 0.1 > 13.2)
              return prevState
            else
              return prevState + 0.1;
        }
        
      });  
      
    };
    
    const onMouseMove = e => {
      setRotation([
        ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI)/ 100,
        ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 100,
        0
      ]);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
   
    
  return (
    
    <div ref={canvasRef} className="w-[100%] md:sticky md:top-0 md:h-[100vh] md:min-h-fit bg-black text-white justify-evenly items-center z-30">
      {/* <Canvas>
        
        <Camera position={...*scrollPosition, ...*scrollPosition}/>
        <Text to be displayed/>
        <Pedro num boneco>
        <Shiba ao lado do Pedro>
        
      </Canvas> */}
      
      <Suspense fallback={<div> I am Loading... </div>}>
        
        <Canvas  camera={{ fov: 75, near: 0.0000000001, far: 1000, position: [0, 0, 15 ], }}  style={{ background: "black", top: "0", zIndex: "0" }}
        onMouseMove={onMouseMove}>{/*TODO: add position: [0,0,0], */}
          {/* <OrbitControls/> */}
          {/* <Stars/> */}
          <Sky distance={450000} sunPosition={[100, zPosition*0.2 + 15, 100]} inclination={0} azimuth={0.25} />
          <ambientLight intensity={1} color={"0xffffff"} />
          <directionalLight intensity={1} color={0xffffff} />
            
          {/* https://fonts.gstatic.com/s/hennypenny/v5/wXKvE3UZookzsxz_kjGSfPQtvXQ.woff */}
         
          <text text={"Liked what you saw?"} {...opts2} position-x={0} position-y={-0.1} position-z={zPosition + 0.4} anchorX="center" anchorY="middle" font={require("./fonts/AvenirNextLTProBold.otf")}>   
	  	          <meshPhongMaterial attach="material" />
            </text>
            <text text={"CONTACT ME !"} {...opts} position-x={-6.5} position-y={-10.4} position-z={-100} anchorX="center" anchorY="middle" font={require("./fonts/AvenirNextLTProBold.otf")}>   
	  	          <meshPhongMaterial attach="material" />
            </text>
          
          <Suspense fallback={null}>
            
          </Suspense>
          <Suspense fallback={null}>
            
          </Suspense>
          
        </Canvas>
      </Suspense>
 
    </div>
  
  )
}

export default ContactMe
