import { extend, useFrame } from '@react-three/fiber';
import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react'
import * as THREE from "three";
import Globe from 'react-globe.gl';
import { useMediaQuery } from 'react-responsive'

function PlanetEarth({ scrollPercentage }) {
  
    const globeEl = useRef();
    const [isFurther, setIsFurther] = useState(false);
    const [isFirst, setIsFirst] = useState(true);
    
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    
    const MAP_CENTER_CLOSE = { lat: 54, lng: 96, altitude: 0.6 };
    const MAP_CENTER_FAR_PT = { lat: 37.6, lng: 16.6, altitude: 4.5 };
  
    const markersData = [
        {lat: 41.73, lng: -9.44, size: 35, color:"white", title: "Portugal (Home)"}, // Portugal, home
        {lat: 41.73, lng: -4.74, size: 35, color:"blue", title: "Spain (Visit)"}, // Spain, visit
        {lat: 48.72, lng:  2.21, size: 35, color:"blue", title: "France (Visit)"}, // France, visit
        {lat: 55.02, lng:  -2.21, size: 35, color:"blue", title: "United Kingdom (Visit)"}, // United Kingdom, visit
        {lat: 52.57, lng: 14.51, size: 35, color:"green", title: "Czech Republic (ECSC 21)"}, // Czech Republic, ECSC
        {lat: 50.21, lng: 14.36, size: 35, color:"green", title: "Austria (ECSC 22)"}, // Austria, ECSC
    ];
    
    const markerSvg = `
        <svg viewBox="-4 0 36 36">
            <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
            <circle fill="black" cx="14" cy="14" r="7"></circle>
        </svg>
  `;
    
    useEffect(() => {
        // console.log("scrollPerc: " + scrollPercentage)
        // console.log("window.pageYOffset - window.innerHeight: " + (window.pageYOffset - window.innerHeight))
    })
    
    useEffect(() => {
        
        if (!isMobile && isFirst) {
            setIsFirst(false);
            console.log("first!")
            globeEl.current.pointOfView(MAP_CENTER_CLOSE, 100);
            globeEl.current.controls().autoRotate = false;
            globeEl.current.controls().autoRotateSpeed = 0;
            globeEl.current.controls().enableZoom = false;
        }
        
        if (!isMobile && scrollPercentage < 0.3336 && isFurther) {
            console.log("Im really close!", isFurther)
            globeEl.current.controls().enableZoom = false;
            globeEl.current.pointOfView(MAP_CENTER_CLOSE, 1500);
            
            globeEl.current.controls().autoRotate = false;
            globeEl.current.controls().autoRotateSpeed = 0;
            setIsFurther(false);
        }
        
        else if (scrollPercentage > 0.3336 && !isFurther) {
            console.log("Im far away!", isFurther)
            globeEl.current.controls().enableZoom = false;
               
            globeEl.current.pointOfView(MAP_CENTER_FAR_PT, 2500);
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.15;
            setIsFurther(true);
        }
    });
    

    return <Globe ref={globeEl}
        globeImageUrl={require("./static/amazingRedMap_v2.png")}
        backgroundColor="rgba(0,0,0,0)"
        width={2500}
        height={2500}
        animateIn
        showGlobe={true}
        showAtmosphere={true}
        atmosphereColor={"red"}
        atmosphereAltitude={0.4}

        htmlElementsData={markersData}
        htmlElement={
            d => {
                const el = document.createElement('div');
                el.innerHTML = markerSvg
                el.style.color = d.color;
                el.style.width = `${d.size}px`;

                el.style['pointer-events'] = 'auto';
                el.style.cursor = 'help';
                el.title = d.title;
                
                return el;
            }
        }
    />;

}

export default PlanetEarth