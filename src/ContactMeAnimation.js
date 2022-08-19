import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect, useCallback, Suspense, useRef } from 'react'
import { Text } from "@react-three/drei";
import { useMediaQuery } from 'react-responsive'

// Uses Text component from @react-three/drei to render text.
function ContactMe({ content }) {

  // The y and z positions (y only matters for mobile)
  const [posYMobile, setPosYMobile] = useState(53);
  const [zPosition, setZPosition] = useState(-13.2);

  // A reference to the canvas
  const canvasRef = useRef(null);

  // Used to verify it the device is mobile
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  // Text options if the device is not mobile
  const optsInsideTextScreen = { fontSize: 30, lineHeight: 1.6, fontWeight: 11, letterSpacing: 0.1, color: "black" }
  const optsOutsideTextScreen = { fontSize: 0.2, lineHeight: 1.6, fontWeight: 11, letterSpacing: 0.1 }

  // Text options if the device is mobile
  const optsInsideTextMobile = { fontSize: 10, lineHeight: 1, fontWeight: 11, letterSpacing: 0.1, color: "black", maxWidth: 0.1, overflowWrap: 'break-word', textAlign: 'center' }
  const optsOutsideTextMobile = { fontSize: 0.1, lineHeight: 1.6, fontWeight: 11, letterSpacing: 0.1, color: "white", maxWidth: 0.1, textAlign: 'center' }

  // Chooses the options depending on the device
  let optsInsideText = isMobile ? optsInsideTextMobile : optsInsideTextScreen;
  let optsOutsideText = isMobile ? optsOutsideTextMobile : optsOutsideTextScreen;

  // Whenever the user scrolls, the text position must be updated
  const handleScroll = useCallback(() => {

    // Gets the position of the page
    let newPosition = window.pageYOffset;

    // Calculates the new z position of the text
    setZPosition(() => {

      // This calculations where made for a specific starting newPosition = 2134. As I add more stuff, I have to "adjust" the newPosition to match the math. So, I have to subtract an offset such that when the page is in the last canvas, newPosition - offset = 2134.

      // console.log("newPosition", newPosition)
      let offset = 2868
      if (isMobile) {
        offset = 7868
      }

      // Fancy math that looked good 
      let pos = 13.2 - (113.2 * 15 * (((newPosition - offset - window.innerHeight - 1268) / (5 * window.innerHeight))) ** 3);

      // If the position is below a certain value, it is set to a minimum value
      if (pos > 13.2)
        return 13.2

      // Sets the mobile position to a different value, because it looks good
      setPosYMobile(53 + (-0.15 * (pos + 170)));

      // If the position is above a certain value, it is set to a maximum value
      if (pos < -170) {
        return -170
      }
      setPosYMobile(53);

      return pos;
    });
  });

  // Adds the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);


  return (

    <div ref={canvasRef} className="h-[100rem] w-[100%] sticky top-0 md:h-[100vh] md:min-h-fit bg-black text-white justify-evenly items-center z-30">

      <Suspense fallback={<div> I am Loading... </div>}>

        <Canvas camera={{ fov: 75, far: 1000, position: [0, 0, 15], }} style={{ background: "black", top: "0", zIndex: "0" }}
        >
          <Sky distance={45000} sunPosition={[-zPosition * 5.5 - 200, -zPosition * 0.5 + 15, zPosition * 1.5 + 10]} inclination={0} azimuth={0.25} />
          <ambientLight intensity={1} color={"0xffffff"} />
          <directionalLight intensity={1} color={0xffffff} />
          
          <Text text={content.ContactMeAnimation.InsideText} {...optsOutsideText} position-x={isMobile ? 0 : 0} position-y={isMobile ? 0.7 : -0.1} position-z={zPosition + 0.4} anchorX="center" anchorY="middle" font={require("./fonts/AvenirNextLTProBold.otf")}>
            <meshBasicMaterial attach="material" />
          </Text>
          
          <Text text={isMobile ? content.ContactMeAnimation.OutsideTextMobile : content.ContactMeAnimation.OutsideTextDesktop} {...optsInsideText} position-x={isMobile ? 0 : -6.5} position-y={isMobile ? posYMobile : -10.4} position-z={zPosition} anchorX="center" anchorY="middle" font={require("./fonts/AvenirNextLTProBold.otf")}>
            <meshPhysicalMaterial attach="material" />
          </Text>
          
        </Canvas>
      </Suspense>

    </div>

  )
}

export default ContactMe
