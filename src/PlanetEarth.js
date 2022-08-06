import { extend, useFrame } from '@react-three/fiber';
import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react'
import * as THREE from "three";
import Globe from 'react-globe.gl';

function PlanetEarth({ scrollPerc }) {
  
    const globeEl = useRef();
    const [isFurther, setIsFurther] = useState(false);
    
    const MAP_CENTER_CLOSE = { lat: 54, lng: 96, altitude: 0.6 };
    const MAP_CENTER_FAR_PT = { lat: 37.6, lng: -16.6, altitude: 3 };
    
    
    useEffect(() => {
        if (scrollPerc <= 0.2 && isFurther) {
            console.log("Im really close!", isFurther)
            globeEl.current.controls().enableZoom = false;
            globeEl.current.pointOfView(MAP_CENTER_CLOSE, 3000);
            
            globeEl.current.controls().autoRotate = false;
            globeEl.current.controls().autoRotateSpeed = 0;
            setIsFurther(false);
        }
    },);
    
    useEffect(() => {
        if (scrollPerc > 0.2 && !isFurther) {
            console.log("Im far away!", isFurther)
            globeEl.current.pointOfView(MAP_CENTER_FAR_PT, 3000);
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 1.35;
            setIsFurther(true);
        }
    },);

  return <Globe ref={globeEl} 
                globeImageUrl={require("./static/amazingRedMap.png")}
                backgroundColor="rgba(0,0,0,0)"
                width={2000}
                height={2000}
                animateIn
                showGlobe={true}
                showAtmosphere={false}
        />;
  
}

export default PlanetEarth