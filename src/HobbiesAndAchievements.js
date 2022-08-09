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
import Globe from 'react-globe.gl';
import { useScrollPercentage } from 'react-scroll-percentage';

import pythonLogo from './static/icons/programming/python_icon.svg';
import cLogo from './static/icons/programming/c_icon.svg';
import djangoLogo from './static/icons/programming/django_icon.svg';
import flaskLogo from './static/icons/programming/flask_icon.svg';
import javaLogo from './static/icons/programming/java_icon.svg';
import jsLogo from './static/icons/programming/javascript_icon.svg';
import pgsqlLogo from './static/icons/programming/pgsql_icon.svg';
import reactLogo from './static/icons/programming/react_icon.svg';
import tailwindLogo from './static/icons/programming/tailwind_icon.svg';
import threeJsLogo from './static/icons/programming/threejs_icon.svg';
import bootstrapLogo from './static/icons/programming/bootstrap_icon.svg';

import alcatelLogo from './static/icons/otherSkills/alcatel_icon.svg';
import ciscoLogo from './static/icons/otherSkills/cisco_icon.svg';
import juniperLogo from './static/icons/otherSkills/juniper-networks_icon.svg';
import premiereLogo from './static/icons/otherSkills/premiere-cc_icon.svg';
import gimpLogo from './static/icons/otherSkills/gimp_icon.svg';

import dumbbellLogo from './static/icons/hobbiesAndAchievements/dumbbell_logo.png'
import STTLogo from './static/icons/hobbiesAndAchievements/STT_logo.png'
import ecsc21Logo from './static/icons/hobbiesAndAchievements/ecsc2021_logo.png'
import ecsc22Logo from './static/icons/hobbiesAndAchievements/ecsc2022_logo.png'
import cscptLogo from './static/icons/hobbiesAndAchievements/CSCPT_logo.png'
import schoolLogo from './static/icons/hobbiesAndAchievements/school_logo.png'
import videogamesLogo from './static/icons/hobbiesAndAchievements/controller_logo.png'
import tecnicoLogo from './static/icons/careerAndEducation/tecnicoLisboa_icon2.png';
import cryptohackLogo from './static/icons/otherSkills/cryptohack_logo.jpg';
import ecsc21Award from './static/icons/hobbiesAndAchievements/ecsc2021_award.jpeg'


function deg2rad(degrees) {
    return degrees * (Math.PI / 100);
}

function HobbiesAndAchievements({ scrollPercentage }) {

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
        if (!clicked1) {
            setClicked1(true);
            setClicked2(false);
        }
        else
            setClicked1(false);
    }

    function handleClick2() {
        if (!clicked2) {
            setClicked1(false);
            setClicked2(true);
        }
        else
            setClicked2(false);
    }

    function handleScroll(e) {
        if (scrollPercentage > 0.5) {
            setPosition([1.337, -10.98, 5.832]);
        } else {
            setPosition([50, 50, 50]);
        }
    }

    return (
        <div id="HobbiesAndAchievements" className="relative">

            <div className=" text-white z-[1] bg-transparent">


                <h1 id="HobbiesAndAchievements" className="left-[0%] right-[0%] absolute z-[1] -top-10 md:top-10 pt-10 md:pt-0 m-6 md:m-0 text-3xl md:text-7xl font-black tracking-wide  text-almostWhite text-center md:text-left md:ml-20 md:mt-12">
                    Hobbies & Achievements
                </h1>
                <h2 className="absolute z-[1]  md:top-32 pt-10 md:pt-0 m-6 md:m-0 text-lg md:text-3xl font-black tracking-wide  text-almostWhite text-center md:text-left md:ml-20 md:mt-12"> Know what I like and what I have accomplished </h2>
                <h3 onClick={e => { setClicked1(false); setClicked2(false) }} className="absolute z-[1] top-52 left-4 pt-10 md:pt-0 m-6 md:m-0 font-black tracking-wide  hover:text-slate-600 text-red-700 text-center md:text-left md:ml-20 md:mt-10 hover:cursor-pointer">Play with the background</h3>


                <div className="absolute z-[1] top-48 text-almostWhite m-5 md:m-20 rounded-3xl left-[0%] right-[0%] backdrop-filter backdrop-blur-lg bg-white/20 text-center center">

                    <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 justfiy-evenly items-center">
                        <a onClick={() => handleClick1()} className={clicked1 ? chosenStyle : notChosenStyle}>Hobbies</a>
                        <a onClick={() => handleClick2()} className={clicked2 ? chosenStyle + " md:border-l-[1px]" : notChosenStyle + " md:border-l-[1px]"}>Achievements</a>
                    </div>
                    <div className={clicked1 ? "text-lg text-left m-5 pb-5 " : "hidden"}>

                        <div className="flex flex-wrap justify-evenly" name="My Stack">
                            <img src={dumbbellLogo} alt="Dumbbell" title="Dumbbell" width={50} height={50} className="inline " />
                            <img src={videogamesLogo} alt="Video Games" title="Video Games" width={50} height={50} className="inline" />
                            <img src={STTLogo} alt="STT" title="STT" width={50} height={50} className="inline" />
                        </div>

                        <br />
                        <hr className="md:hidden" />

                        <br /><br />

                        <div className="pl-4 text-center md:text-left ">
                            <div className="md:flex items-start gap-4">
                                <img src={dumbbellLogo} alt="Dumbbell" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>Gym</b> - I attend a local gym since june of 2019, after losing a total of 99lbs in the span of a year and three months, by sheer will and in a totally independent way. <br />
                                    Since then, I've maintained a healthy lifestyle which I'm really proud of. <br />
                                    As I mentioned in my soft skills, I've <a className="underline hover:font-bold" href="https://www.notion.so/pedro-chaps/MY-FITNESS-JOURNEY-5e3eb18b413d4931a63725ba6cabd296">shared my weight loss project</a> as a way to inspire others to achieve their goals. </p>
                            </div><br />

                            <div className="md:flex items-start gap-4">
                                <img src={videogamesLogo} alt="Video Games" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>Video Games</b> - Since I was little, I've always enjoyed playing video games. I've played in different gaming consoles, from the ps2 to the computer, and I like multiple genres. <br /> Some of my all-time favorites are:
                                    <div className="grid grid-cols-3 m-3">
                                        <li>Call of Duty: Black Ops 2</li>
                                        <li>Counter Strike: Global Offensive (CS:GO)</li>
                                        <li>Counter Strike: Source (CSS)</li>
                                        <li>DayZ: Standalone</li>
                                        <li>Detroit: Become Human</li>
                                        <li>Don't Starve</li>
                                        <li>Enter the Gungeon</li>
                                        <li>Escape From Tarkov</li>
                                        <li>GTA V</li>
                                        <li>Horizon: Zero Dawn</li>
                                        <li>League of Legends (LoL)</li>
                                        <li>Metal Gear Solid: Peace Walker</li>
                                        <li>Minecraft</li>
                                        <li>Outlast</li>
                                        <li>Rainbow Six: Siege</li>
                                        <li>Red Dead Redemption</li>
                                        <li>The Last of US 1 & 2</li>
                                        <li>Until Dawn</li>
                                    </div>
                                    This is one of my main motivations to like new technologies so much. </p>
                            </div><br />

                            <div className="md:flex items-start gap-4">
                                <img src={STTLogo} alt="STT" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>STT</b> - I'm a member of the CyberSecurity of IST, <a className="underline hover:font-bold" href="https://sectt.github.io/">STT</a>, since the beggining of the course. <br />The team usually gathers remotely and presentially to play CTF (Capture The Flag) events together. <br /> Besides that, the team also does weekly meetings where generally the senior members talk about advanced topics.</p>
                            </div>
                        </div>
                    </div>
                    <div className={clicked2 ? "text-lg text-left m-5 pb-5" : "hidden"}>

                        <div className="flex flex-wrap justify-evenly" name="My Stack">
                            <img src={schoolLogo} alt="School" title="School" width={50} height={50} className="inline " />
                            <img src={tecnicoLogo} alt="IST" title="IST" width={50} height={50} className="inline" />
                            <img src={cryptohackLogo} alt="Cryptohack" title="Cryptohack" width={50} height={50} className="inline" />
                            <img src={cscptLogo} alt="CSCPT" title="CSCPT" width={50} height={50} className="inline" />
                            <img src={ecsc21Logo} alt="ECSC 21" title="ECSC 21" width={50} height={50} className="inline" />
                            <img src={ecsc22Logo} alt="ECSC 22" title="ECSC 22" width={50} height={50} className="inline" />
                        </div>

                        <br />
                        <hr className="md:hidden" />

                        <br /><br />

                        <div className="pl-4 text-center md:text-left ">
                            <div className="md:flex items-start gap-4">
                                <img src={schoolLogo} alt="School" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>School Achievements </b> - Multiple certificates of merit and honor during school, as well as delegate and sub-delegate of class multiple times and member of the Students Association on the last year of school.</p>
                            </div><br />

                            <div className="md:flex items-start gap-4">
                                <img src={tecnicoLogo} alt="IST" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>University Performance </b> - High academic performance during the course. <br/> I was in the <a className="underline hover:font-bold" href="https://conselhopedagogico.tecnico.ulisboa.pt/bolsas-e-premios/quadro-e-diplomas-de-merito/6773-2/">Merit Board</a> of the first year of my course and my performance was one of the reasons why I was able to join Research Investigator role at my University. </p>
                            </div><br />

                            <div className="md:flex items-start gap-4">
                                <img src={cryptohackLogo} alt="Cryptohack" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>Cryptohack Performance </b> - As of today, 2022-08-05, I am the portuguese top 5 in the <a className="underline hover:font-bold" href="https://cryptohack.org/scoreboard/">CryptoHack</a> website, one of the best platforms where you can learn about all kinds of cryptography in a gamified way. </p>
                            </div><br />
                            
                            <div className="md:flex items-start gap-4">
                                <img src={cscptLogo} alt="CSCPT" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <img src={ecsc21Logo} alt="ECSC 21" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>ECSC 2021 </b> - I was a finalist in the nacional <a className="underline hover:font-bold" href="https://twitter.com/CyberChallPT/status/1440604680430571527?s=20&t=Gj-LnD0GGoTlMDU9GqoPKA"> CyberSecurity event CSCPT 21</a>, which gave me the opportunity to go to Prague, Czech Republic 🇨🇿 to participate in the european event <a className="underline hover:font-bold" href="https://ecsc.eu/">ECSC</a> 2021 as a member of <a className="underline hover:font-bold"  href="https://twitter.com/CyberChallPT/status/1443304793389375491?s=20&t=Gj-LnD0GGoTlMDU9GqoPKA">team Portugal</a>. The team placed 7, a record so far. <br/> I got the following award for participating: </p>
                                
                            </div>
                            <div className="text-center"> <img className=" ml-auto mr-auto transition-all duration-300 h-[16vh] w-[23vh] hover:h-[64vh] hover:w-[92vh]" src={ecsc21Award}/>
                            <p className="opacity-40">(Hover me!)</p></div>
                            
                            <div className="md:flex items-start gap-4">
                                <img src={cscptLogo} alt="Cryptohack" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <img src={ecsc22Logo} alt="Cryptohack" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>ECSC 2022 </b> - Like last year, I was a finalist in the nacional <a className="underline hover:font-bold" href="https://www.linkedin.com/posts/pedro-chaparro_cybersecuritychallengept2022-cybersecurity-activity-6957628283014295553-bBI0?utm_source=linkedin_share&utm_medium=member_desktop_web"> CyberSecurity event CSCPT 22</a>, which gave me the opportunity to go to Vienna, Austria 🇦🇹 to participate in the european event <a className="underline hover:font-bold" href="https://ecsc.eu/">ECSC</a> 2022 as a member of <a className="underline hover:font-bold"  href="https://final.2022.cybersecuritychallenge.pt/">team Portugal</a>. </p>
                                
                            </div> 
                            <br />
                            
                        </div>

                    </div>


                </div>



            </div>

            <div className="h-[185rem] md:h-[115rem]">
                <Suspense fallback={<div> I am Loading... </div>}>
                    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [1.337, -10.98, 5.832] }} style={{ background: "black", top: "0", zIndex: "0" }}>{/*TODO: add position: [0,0,0], */}
                        <PerspectiveCamera />
                        {/* <OrbitControls/> */}
                        <Stars radius={100} depth={100} />
                        <ambientLight intensity={0.05} color={"0xffffff"} />
                        <directionalLight intensity={1} color={0xffffff} position={[2, 2, 1]} />
                        <Html fullscreen style={{
                            display: "grid",
                            placeContent: "center"
                        }}>
                            <PlanetEarth scrollPercentage={scrollPercentage} />
                        </Html>
                    </Canvas>
                </Suspense>
            </div>
        </div>

    )
}

export default HobbiesAndAchievements