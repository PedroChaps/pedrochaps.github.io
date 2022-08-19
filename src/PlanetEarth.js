import React, { useState, useEffect, useRef } from 'react'
import Globe from 'react-globe.gl';

// Used the react-globe package: https://github.com/vasturiano/react-globe.gl
function PlanetEarth({ scrollPercentage, content }) {
    
    // A Reference to the globe, so it's position can be updated
    const globeEl = useRef();
    
    // position state (either is Further away or really close)
    const [isFurther, setIsFurther] = useState(false);
    
    // First iteration
    const [isFirst, setIsFirst] = useState(true);

    // Globe's positions to when it is really close (zoomed in), because of the transtion from the plane to the globe and when it's far away (zoomed out) to start a bit to the right of Portugal
    const MAP_CENTER_CLOSE = { lat: 54, lng: 96, altitude: 0.6 };
    const MAP_CENTER_FAR_PT = { lat: 37.6, lng: 16.6, altitude: 4.5 };
    
    // The markers that shown on the globe, representing the places I've already visited
    const markersData = [
        {lat: 41.73, lng: -9.44, size: 35, color:"white", title: content.PlanetEarth.PT}, // Portugal, home
        {lat: 41.73, lng: -4.74, size: 35, color:"blue", title: content.PlanetEarth.ES}, // Spain, visit
        {lat: 48.72, lng:  2.21, size: 35, color:"blue", title: content.PlanetEarth.FR}, // France, visit
        {lat: 55.02, lng:  -2.21, size: 35, color:"blue", title: content.PlanetEarth.UK}, // United Kingdom, visit
        {lat: 52.57, lng: 14.51, size: 35, color:"green", title: content.PlanetEarth.CZ}, // Czech Republic, ECSC
        {lat: 50.21, lng: 14.36, size: 35, color:"green", title: content.PlanetEarth.AU}, // Austria, ECSC
    ];
    
    // The marker's svg
    const markerSvg = `
        <svg viewBox="-4 0 36 36">
            <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
            <circle fill="black" cx="14" cy="14" r="7"></circle>
        </svg>
  `;
    
    useEffect(() => {
        
        // If it's the first iteration, the globe is set to the initial position
        if (isFirst) {
            setIsFirst(false);
            console.log("first!")
            globeEl.current.pointOfView(MAP_CENTER_CLOSE, 100);
            globeEl.current.controls().autoRotate = false;
            globeEl.current.controls().autoRotateSpeed = 0;
            globeEl.current.controls().enableZoom = false;
        }
        
        // If the scroll percentage is lower than 0.3336, the globe is set to the close position, disabling rotation
        else if (scrollPercentage < 0.3336 && isFurther) {
            globeEl.current.pointOfView(MAP_CENTER_CLOSE, 1500);
            globeEl.current.controls().autoRotate = false;
            globeEl.current.controls().autoRotateSpeed = 0;
            setIsFurther(false);
        }
        
        // If the scroll percentage is higher than 0.3336, the globe is set to the far position, enabling rotation
        else if (scrollPercentage > 0.3336 && !isFurther) {
            console.log("Im far away!", isFurther)
               
            globeEl.current.pointOfView(MAP_CENTER_FAR_PT, 2500);
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.15;    
            setIsFurther(true);
        }
        
    }, [isFirst, scrollPercentage, isFurther, MAP_CENTER_CLOSE, MAP_CENTER_FAR_PT]);
    

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
        // Puts the markers on the globe
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