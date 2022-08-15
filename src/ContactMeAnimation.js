import { OrbitControls, PerspectiveCamera, OrthographicCamera, Stars, ScrollControls, Html, Sky } from '@react-three/drei';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import React, { useState, useEffect, Suspense, useRef } from 'react'
import { DirectionalLight } from 'three';
import { Text } from "@react-three/drei";


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
    
    function f(prevState, newPos, innerHeight){
      
      return 13.2 - (113.2 * (newPos / 5*innerHeight));
    }
    
    const handleScroll = () => {
      let scrollDown = true;
      let newPosition = window.pageYOffset;
      
      // console.log("newPosition", newPosition)
      // console.log("innerHeight", window.innerHeight)
      
      if (newPosition < oldPosition){
        scrollDown = false;
      }
      
      
      oldPosition = newPosition
      
      // if (newPosition - window.innerHeight < 1300){
      //   setTimeout(() => {
      //   setZPosition(13.2);
      //   }, 150)
      //   return;
      // }

      setZPosition(prevState => {
        
        // This calculations where made for a specific starting newPosition = 2134. As I add more stuff, I have to "adjust" the newPosition to match the math. So, I have to subtract an offset such that when the page is in the last canvas, newPosition - offset = 2134.
        
        // console.log("newPosition", newPosition)
        let offset = 2868
        
        let pos = 13.2 - (113.2 * 15*(((newPosition - offset - window.innerHeight - 1268) / (5*window.innerHeight)))**3);
        
        //console.log("pos", pos)
        
        if (pos > 13.2)
          return 13.2
        
        if (pos < -170)
          return -170
          
        return pos;
        
        
      });  
      
      
      
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
        
        <Canvas  camera={{ fov: 75, far: 1000, position: [0, 0, 15 ], }}  style={{ background: "black", top: "0", zIndex: "0" }}
        >{/*TODO: add position: [0,0,0], */}
          {/* <OrbitControls/> */}
          {/* <Stars/> */}
          <Sky distance={45000} sunPosition={[-zPosition*5.5 - 200, -zPosition*0.5 + 15, zPosition*1.5 + 10]} inclination={0} azimuth={0.25} />
          <ambientLight intensity={1} color={"0xffffff"} />
          <directionalLight intensity={1} color={0xffffff} />
            
          {/* https://fonts.gstatic.com/s/hennypenny/v5/wXKvE3UZookzsxz_kjGSfPQtvXQ.woff */}
         
          <Text text={"Liked what you saw?"} {...opts2} position-x={0} position-y={-0.1} position-z={zPosition + 0.4} anchorX="center" anchorY="middle" font={require("./fonts/AvenirNextLTProBold.otf")}>   
	  	          <meshBasicMaterial attach="material" />
            </Text>
            <Text text={"CONTACT ME !"} {...opts} position-x={-6.5} position-y={-10.4} position-z={zPosition} anchorX="center" anchorY="middle" font={require("./fonts/AvenirNextLTProBold.otf")}>   
	  	          <meshPhysicalMaterial attach="material" />
            </Text>
          
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
