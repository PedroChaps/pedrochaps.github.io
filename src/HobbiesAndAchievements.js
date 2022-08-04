import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react'
import { Canvas, useThree, useFrame } from "@react-three/fiber";

import { OrbitControls, Stars, Html, PerspectiveCamera } from '@react-three/drei';
import Navbar from "./Navbar";
import * as THREE from "three";
import { DirectionalLight } from 'three';
import DatGui, { DatNumber } from 'react-dat-gui';
import PlanetEarth from "./PlanetEarth";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faWrench, faBriefcase, faSchool, faMedal, faPhone } from '@fortawesome/free-solid-svg-icons';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faPython } from '@fortawesome/free-brands-svg-icons';

import superprofLogo from './static/icons/careerAndEducation/superprof_icon.png';
import tecnicoLogo from './static/icons/careerAndEducation/tecnicoLisboa_icon2.png';
import Globe from 'react-globe.gl';
   
function deg2rad(degrees) {
    return degrees * (Math.PI / 100);
}

function HobbiesAndAchievements() {
    return (
    <div className="text-white z-[51]">
        
        <div className="h-[185rem] md:h-[75rem]"> 
            <Suspense fallback={<div> I am Loading... </div>}>
                <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [1.337, -10.98, 5.832]}} style={{ background: "black", top: "0", zIndex: "0"}}>{/*TODO: add position: [0,0,0], */}
                    <PerspectiveCamera/>
                    <OrbitControls/>
                    <Stars radius={100} depth={100} />
                    <ambientLight intensity={0.05} color={"0xffffff"} />
                    <directionalLight intensity={1} color={0xffffff} position={[2, 2, 1]} />
                    <Html fullscreen>
                        <Globe 
                        globeImageUrl={require("./static/amazingRedMap.png")}
                        backgroundColor="rgba(0,0,0,0)"
                        width={1500}
                        height={1500}
                        animateIn
                        showGlobe={true}
                        showAtmosphere={false}
                        />
                    </Html>
                </Canvas>
            </Suspense>
        </div>
    </div>
    
  )
}

export default HobbiesAndAchievements


/* 
General Experience

    Have a look at the skills I have and the tools I use

    
    
        Programming Languages
        
            Python
                
                Flask (Link website da uni & source code)
                Django (Link repo candidatura RNL, criar um novo porque aquele tem info que pode dar expose)
                Link repos projetos (se existirem, se não meter os projetos em repos) - 2 FP, 1 IA
                MUITO cibersec
                "
                    Python is the language I use the most and have the most experience.
                    I've had two subjects on which I was taught python and needed to use the language for projects.
                "
            
            C
                General C
                Mutexes
                Link repos projetos (se existirem, se não meter os projetos em repos) - 2 IAED, 1 SO   
            
            Java
                Taught in a OOP view, where I also learned about Design Patterns
                Link repos projetos (se existirem, se não meter os projetos em repos) - 1 PO
              
            Bootstrap    
                
            PGsql
                As part of the Databases subject, I learned about PGsql and the relational database model in general.
                
                Meter projeto BD
            
            Javascript & React & Tailwind
            
                Using this three tools, I made this website. 
            
            
        
        Soft Skills
        
            learning new stuff (exemplo deste website, "why not?")
            help others (like helping fellow classmates, I've already contributed to the course "resumos (em ingles)" website, wrote a README taht explains in detail how I created this website)
            hard worker (top X do curso, média X)
            
            "Forte capacidade de comunicação e colaboração"
            "Inglês"
            
            "
                As I mentioned in my bio, I like to learn... .
                Besides that, I also believe...
            "
        
        
        Other Skills
        
            GIMP
                I know how to do image manipulation using GIMP.
            
            Adobe Premier Pro
                I've also learned how to do video editing using Adobe Premier Pro.

            Networking
                I have experience with networking equipment, like switches (from Juniper and Alcatel) and access points (from Cisco).
                I've already configured, installed and maintained equipments like those.

*/