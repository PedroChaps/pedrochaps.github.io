import { OrbitControls, PerspectiveCamera, OrthographicCamera, Stars, ScrollControls, Html, Sky } from '@react-three/drei';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import React, { useState, useEffect, Suspense, useRef } from 'react'
import { DirectionalLight } from 'three';
import { Text } from "@react-three/drei";
import { useMediaQuery } from 'react-responsive'


const font = {"AvenirBold": "./fonts/AvenirNextLTPro-Bold.otf"}

function ContactMe() {
    
    const [scrollPosition, setScrollPosition] = useState(0);
    const [posYMobile, setPosYMobile] = useState(53);
    const [rotation, setRotation] = useState([0, 0, 0, 0]);
    const [zPosition, setZPosition] = useState(-13.2);
    const [steps, setSteps] = useState(0);
    
    const canvasRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    
    const optsInsideTextScreen = {fontSize: 30, lineHeight: 1.6, fontWeight:11, letterSpacing:0.1, color:"black"}
    const optsOutsideTextScreen = {fontSize: 0.2, lineHeight: 1.6, fontWeight:11, letterSpacing:0.1}
    
    const optsInsideTextMobile = {fontSize: 10, lineHeight: 1, fontWeight:11, letterSpacing:0.1, color:"black", maxWidth: 0.1, overflowWrap: 'break-word', textAlign: 'center'}
    const optsOutsideTextMobile = {fontSize: 0.1, lineHeight: 1.6, fontWeight:11, letterSpacing:0.1, color:"white", maxWidth:0.1, textAlign: 'center'}
    
    let optsInsideText = isMobile? optsInsideTextMobile: optsInsideTextScreen;
    let optsOutsideText = isMobile? optsOutsideTextMobile: optsOutsideTextScreen;
    
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
        if (isMobile){
          offset = 7868
        }
        
        let pos = 13.2 - (113.2 * 15*(((newPosition - offset - window.innerHeight - 1268) / (5*window.innerHeight)))**3);
        
        console.log("pos", pos)
        
        if (pos > 13.2)
          return 13.2
        
        setPosYMobile(53 + (-0.15*(pos + 170)));
          
        if (pos < -170) { 
          
          return -170
        }
        
        setPosYMobile(53);
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
    
    <div ref={canvasRef} className="h-[100rem] w-[100%] sticky top-0 md:h-[100vh] md:min-h-fit bg-black text-white justify-evenly items-center z-30">
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
         
          <Text text={"Liked what you saw?"} {...optsOutsideText} position-x={isMobile? 0 : 0} position-y={isMobile? 0.7 : -0.1} position-z={zPosition + 0.4} anchorX="center" anchorY="middle" font={require("./fonts/AvenirNextLTProBold.otf")}>   
	  	          <meshBasicMaterial attach="material" />
            </Text>
            <Text text={"CONTACT‎ ME !"} {...optsInsideText} position-x={isMobile? 0 : -6.5} position-y={isMobile? posYMobile : -10.4} position-z={zPosition} anchorX="center" anchorY="middle" font={require("./fonts/AvenirNextLTProBold.otf")}>   
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
// 85.4
// 47