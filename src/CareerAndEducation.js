import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react'
import { Canvas, useThree, useFrame } from "@react-three/fiber";

import { OrbitControls, Stars, Html, PerspectiveCamera } from '@react-three/drei';
import Navbar from "./Navbar";
import * as THREE from "three";
import { DirectionalLight } from 'three';
import DatGui, { DatNumber } from 'react-dat-gui';
import LowPollyPlane from './LowPollyPlane';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faWrench, faBriefcase, faSchool, faMedal, faPhone } from '@fortawesome/free-solid-svg-icons';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { useScrollPercentage } from 'react-scroll-percentage'

import superprofLogo from './static/icons/careerAndEducation/superprof_icon.png';
import tecnicoLogo from './static/icons/careerAndEducation/tecnicoLisboa_icon2.png';

function deg2rad(degrees) {
    return degrees * (Math.PI / 100);
}

function GeneralExperience( {scrollPercentage} ) {
    
    const [data, setData] = useState({
        width: 75,
        height: 50,
        widthSegments: 38,
        heightSegments: 25
    })
      
    const [position, setPosition] = useState([1.337, -10.98, 5.832]);
    
    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);

    
    const chosenStyle = "col-span-1  text-4xl md:text-5xl text-center p-5 font-semibold text-black underline hover:cursor-pointer"
    const notChosenStyle = "col-span-1 text-4xl md:text-5xl text-center p-5 font-semibold hover:text-black hover:cursor-pointer"
    
    function handleClick1() {
        setClicked1(true);
        setClicked2(false);
    }
    
    function handleClick2() {
        setClicked1(false);
        setClicked2(true);
    }
    
    function handleScroll(e) {
        if (scrollPercentage > 0.5) {
            setPosition([1.337, -10.98, 5.832]);
        } else {
            setPosition([50, 50, 50]);
        }
    }

    
    return (
        <div id="CareerAndEducation" className="relative">

            <div className=" text-white z-[1] bg-transparent">


                <h1 id="CareerAndEducation" className="left-[0%] right-[0%] absolute z-[1] -top-10 md:top-10 pt-10 md:pt-0 m-6 md:m-0 text-3xl md:text-7xl font-black tracking-wide  text-almostWhite text-center md:text-left md:ml-20 md:mt-12">
                    Career & Education
                </h1>
                <h2 className="absolute z-[1]  md:top-32 pt-10 md:pt-0 m-6 md:m-0 text-lg md:text-3xl font-black tracking-wide  text-almostWhite text-center md:text-left md:ml-20 md:mt-12"> See my work experience and where I studied  </h2>
                <h3 onClick={e => { setClicked1(false); setClicked2(false) }} className="absolute z-[1] top-52 left-4 pt-10 md:pt-0 m-6 md:m-0 font-black tracking-wide  hover:text-slate-600 text-red-700 text-center md:text-left md:ml-20 md:mt-10 hover:cursor-pointer">Play with the background</h3>


                <div className="absolute z-[1] top-48 text-almostWhite m-5 md:m-20 rounded-3xl left-[0%] right-[0%] backdrop-filter backdrop-blur-lg bg-white/20 text-center center">




                    <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 justfiy-evenly items-center">
                        <a onClick={() => handleClick1()} className={clicked1 ? chosenStyle : notChosenStyle}>Work Experience</a>
                        <a onClick={() => handleClick2()} className={clicked2 ? chosenStyle + " md:border-l-[1px]" : notChosenStyle + " md:border-l-[1px]"}> Education </a>
                    </div>




                    <div className={clicked1 ? "text-lg text-left m-5 pb-5" : "hidden"}>

                        <div className="flex flex-wrap justify-evenly" name="My Stack">
                            <img src={tecnicoLogo} alt="Python" title="Python" width={50} height={50} className="inline " />
                            <img src={superprofLogo} alt="C" title="C" width={50} height={50} className="inline" />
                        </div>

                        <br />
                        <hr className="md:hidden" />

                        <br /><br />


                        <div className="grid grid-rows-1 grid-cols-12 justify-center justify-items-center gap-5 backdrop-blur-3xl p-2 text-black rounded-3xl text-2xl">
                            <a href="https://tecnico.ulisboa.pt/en/"><img src={tecnicoLogo} className="col-span-1 justify-self-center self-center" width={50} /></a>
                            <a href="https://tecnico.ulisboa.pt/en/" className="col-span-3 justify-self-start self-center underline hover:font-bold">Instituto Superior Técnico</a>
                            <p className="col-span-2 justify-self-center self-center">2021/12 - Present</p>
                            <b className="col-span-6 justify-self-center self-center text-right m-">Research Investigator / SysAdmin</b>
                        </div><br />

                        <div className="pl-2 text-center md:text-left">
                            <div className="md:flex items-start gap-4">
                                <p className="">I work in the Networking and Communications Department (NRC) of my University as part of a Research Grant. <br />
                                    I investigate and develop new methodologies that enable the management of network infrastructures, which lead to increased availability and network performance, as well as adding new services to the IST community. <br />
                                    I install, maintain and administrate network equipment, namely Ethernet, routers and IPv4/IPv6 firewalls, services with various operating systems and Linux. </p>
                            </div><br />
                        </div>

                        <div className="grid grid-rows-1 grid-cols-12 justify-center justify-items-center gap-5 backdrop-blur-3xl p-2 text-black rounded-3xl text-2xl">
                            <a href="https://www.superprof.pt/"><img src={superprofLogo} className="col-span-1 justify-self-center self-center" width={50} /></a>
                            <p className="col-span-3 justify-self-start self-center"><a href="https://www.superprof.pt/" className="underline hover:font-bold">Superprof</a> / Freelancer</p>
                            <p className="col-span-2 justify-self-center self-center">2020/09 - Present</p>
                            <b className="col-span-6 justify-self-center self-center text-right m-">High School Math Tutor</b>
                        </div><br />

                        <div className="pl-2 text-center md:text-left">
                            <div className="md:flex items-start gap-4">
                                <p className=""> As soon as I finished high school and joined the University, I started working as a Math Tutor, helping students with Math difficulties offering them online classes. <br />
                                    In total, I've given classes to 8 different students ranging from 8th to 12th grade. <br />
                                    In the beggining, I started using the platform Superprof to find and interact with the students but as I had grew a set of students, I eventually moved to being 100% independent.<br /></p>
                            </div>
                        </div>

                    </div>






                    <div className={clicked2 ? "text-lg text-left m-5 pb-5" : "hidden"}>

                        <div className="flex flex-wrap justify-evenly" name="My Stack">
                            <img src={tecnicoLogo} alt="Python" title="Python" width={50} height={50} className="inline " />
                        </div>

                        <br />
                        <hr className="md:hidden" />

                        <br /><br />


                        <div className="grid grid-rows-1 grid-cols-12 justify-center justify-items-center gap-5 backdrop-blur-3xl p-2 text-black rounded-3xl text-2xl">
                            <a href="https://tecnico.ulisboa.pt/en/education/courses/undergraduate-programmes/computer-science-and-engineering/"><img src={tecnicoLogo} className="col-span-1 justify-self-center self-center" width={50} /></a>
                            <a href="https://tecnico.ulisboa.pt/en/education/courses/undergraduate-programmes/computer-science-and-engineering/" className="col-span-3 justify-self-start self-center underline hover:font-bold">Instituto Superior Técnico</a>
                            <p className="col-span-2 justify-self-center self-center">2020/10 - Present</p>
                            <b className="col-span-6 justify-self-center self-center text-right m-">Bachelor's Degree in Computer Science</b>
                        </div><br />

                        <div className="pl-2 text-center md:text-left">
                            <div className="md:flex items-start gap-4">
                                <p className=""> I am studying Computer Science in <i>Instituto Superior Técnico</i>, one of the best Engineering Universities. <br />
                                    I've already learned or will learn <a className="underline hover:font-bold" href="https://fenix.tecnico.ulisboa.pt/cursos/leic-a/curriculo">Computer Science concepts</a> such as: <br />
                                    <div className="grid grid-cols-3 grid-rows-4 justify-items-start place-items-center p-5 gap-4">
                                        <li>Data Structures and Algorithms</li>
                                        <li>Object Oriented Programming</li>
                                        <li>Analysis and Synthesis of Algorithms</li>
                                        <li>Operating Systems</li>
                                        <li>Artificial Intelligence</li>
                                        <li>Databases</li>
                                        <li>Human-Computer Interaction</li>
                                        <li>Computer Networks</li>
                                        <li>Machine Learning</li>
                                        <li>Theory of Computation</li>
                                        <li>Systems Analysis and Modeling</li>
                                        <li>Compilers</li>
                                        <li>Computer Graphics</li>
                                        <li>Distributed Systems</li>
                                        <li>Software Engineering</li>
                                    </div>

                                    I am one of the top students of my class (as of today, 2022-08-03, I am in the top 8 of a class of ~140 people) and I'm enjoying the course - it has given many opportunities that I surely wouldn't have in other universities, such as having joined <a className="underline hover:font-bold" href="https://sectt.github.io/">STT</a>, the cyberSecurity Team of Técnico, the <a className="underline hover:font-bold" href="https://ctftime.org/stats/2022/PT">best CyberSecurity team of Portugal</a>, as well as being one of the administrators of the Campus network. <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blessed camera position: [1.337, -10.98, 5.832] */}
            {/* camera={{ fov: 75, near: 0.1, far: 1000, position: position }} */}
            <div className="h-[185rem] md:h-[75rem]">
                <Suspense fallback={<div> I am Loading... </div>}>
                    <Canvas onWheel={(e) => handleScroll(e)} style={{ background: "black", top: "0", zIndex: "0" }} camera={{ fov: 75, near: 0.1, far: 1000, position: position }}>TODO: add position: [0,0,0],
                        <PerspectiveCamera />
                        {/* <OrbitControls/> */}
                        <Stars radius={100} depth={100} />
                        <ambientLight intensity={0.05} color={"0xffffff"} />
                        <directionalLight intensity={1} color={0xffffff} position={[2, 2, 1]} />
                        {/* <elems.Box/> */}
                        {/* <Html>
                <h1 className="text-yellow-400"> Hello! :D </h1>
            </Html> */}
                        <Suspense fallback={null}>
                            <LowPollyPlane data={data} scrollPerc={scrollPercentage} />
                        </Suspense>
                    </Canvas>
                </Suspense>
            </div>
            
        </div>
    
    // <div className="bg-black bg-cover text-white ">
    //     <p> a </p> 
    //     <h1 className=" pt-10 md:pt-0 m-6 md:m-0 text-3xl md:text-7xl font-black tracking-wide  text-almostWhite text-center md:text-left md:ml-20 md:mt-28">
    //         General Experience
    //     </h1>
    //     <h2> Have a look at the skills I have and the tools I use </h2> 
        
    //     <div>
            
            
    //     </div>
        
        
    // </div>
  )
}

export default GeneralExperience


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