import React, { useState, Suspense } from 'react'
import { Canvas } from "@react-three/fiber";

import { Stars, Html, PerspectiveCamera } from '@react-three/drei';
import PlanetEarth from "./PlanetEarth";

import dumbbellLogo from './static/icons/hobbiesAndAchievements/dumbbell_logo.png'
import STTLogo from './static/icons/hobbiesAndAchievements/STT_logo.png'
import flagIcon from './static/icons/hobbiesAndAchievements/CaptureTheFLAG.png'
import ecsc21Logo from './static/icons/hobbiesAndAchievements/ecsc2021_logo.png'
import ecsc22Logo from './static/icons/hobbiesAndAchievements/ecsc2022_logo.png'
import cscptLogo from './static/icons/hobbiesAndAchievements/CSCPT_logo.png'
import schoolLogo from './static/icons/hobbiesAndAchievements/school_logo.png'
import videogamesLogo from './static/icons/hobbiesAndAchievements/controller_logo.png'
import tecnicoLogo from './static/icons/careerAndEducation/tecnicoLisboa_icon2.png';
import cryptohackLogo from './static/icons/otherSkills/cryptohack_logo.jpg';
import ecsc21Award from './static/icons/hobbiesAndAchievements/ecsc2021_award.jpeg'
import ist20_21Award from './static/icons/hobbiesAndAchievements/2020-2021_AcademicMeritDiploma.jpg'
import resumosLEICLogo from './static/icons/hobbiesAndAchievements/resumosLEIC.png'

import ReactHtmlParser from 'react-html-parser';

function HobbiesAndAchievements({ scrollPercentage, content, animate }) {
    
    // The state of each button is stored in two different variables.
    const [clicked1, setClicked1] = useState(true);
    const [clicked2, setClicked2] = useState(false);

    // The styles of the buttons, depending on the state
    const chosenStyle = "col-span-1  text-4xl md:text-5xl text-center p-5 font-semibold text-black underline hover:cursor-pointer"
    const notChosenStyle = "col-span-1 text-4xl md:text-5xl text-center p-5 font-semibold hover:text-black hover:cursor-pointer"

    // Functions to handle the click of buttons
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

    // The background that is displayed to mobile users, instead of the planet
    const spectacularEarthDrawing = require("./static/spectacularEarthDrawing.jpg")
    
    return (
        <div id="HobbiesAndAchievements" className="relative">

            <div className=" text-white z-[1] bg-transparent">

                {/* The title of the Component */}
                <h1 id="HobbiesAndAchievements" className="left-[0%] right-[0%] absolute z-[1] -top-10 md:top-10 pt-10 md:pt-0 m-6 md:m-0 text-3xl md:text-7xl font-black tracking-wide  text-almostWhite text-center md:text-left md:ml-20 md:mt-12">
                    {content.HobbiesAndAchievements.Title}
                </h1>
                
                {/* The subtitle of the Component */}
                <h2 className="absolute z-[1] top-8 md:top-32 pt-10 md:pt-0 m-6 md:m-0 text-lg md:text-3xl font-black tracking-wide  text-almostWhite text-center md:text-left md:ml-20 md:mt-12"> {content.HobbiesAndAchievements.SubTitle} </h2>
                
                {/* The button to play with the background (Desktop version) */}
                <h3 onClick={e => { setClicked1(false); setClicked2(false) }} className="absolute z-[1] top-32 md:top-52 left-[0%] right-[0%] md:left-4 pt-10 md:pt-0 m-6 md:m-0 font-black tracking-wide  hover:text-slate-600 text-red-700 text-center md:text-left md:ml-20 md:mt-10 hover:cursor-pointer hidden md:inline">{ReactHtmlParser(content.HobbiesAndAchievements.BackgroundDesktop)}</h3>
                
                {/* The button to play with the background (Mobile version) */}
                <h3 onClick={e => { setClicked1(false); setClicked2(false) }} className="absolute z-[1] top-32 md:top-52 left-[0%] right-[0%] md:left-4 pt-10 md:pt-0 m-6 md:m-0 font-black tracking-wide  hover:text-slate-600 text-red-700 text-center md:text-left md:ml-20 md:mt-10 hover:cursor-pointer md:hidden">{ReactHtmlParser(content.HobbiesAndAchievements.BackgroundMobile)}</h3>
                
                {/* The section that contains all the information, showing only a specific part depending on the clicked button */}
                <div className="absolute z-[1] top-48 text-almostWhite m-5 md:m-20 rounded-3xl left-[0%] right-[0%] backdrop-filter backdrop-blur-lg bg-white/20 text-center center">
                    
                    {/* The section that has the two buttons */}
                    <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 justfiy-evenly items-center">
                        <div onClick={() => handleClick1()} className={clicked1 ? chosenStyle : notChosenStyle}>{content.HobbiesAndAchievements.Hobbies.Title}</div>
                        <div onClick={() => handleClick2()} className={clicked2 ? chosenStyle + " md:border-l-[1px]" : notChosenStyle + " md:border-l-[1px]"}>{content.HobbiesAndAchievements.Achievements.Title}</div>
                    </div>
                    
                    {/* The section that contains the information of the Hobbies (first) button */}
                    <div className={clicked1 ? "text-lg text-left m-5 pb-5 " : "hidden"}>
                        
                        {/* The icons of the Hobbies I have */}
                        <div className="flex flex-wrap justify-evenly" name="My Stack">
                            <img src={dumbbellLogo} alt="Dumbbell" title="Dumbbell" width={50} height={50} className="inline " />
                            <img src={videogamesLogo} alt="Video Games" title="Video Games" width={50} height={50} className="inline" />
                            <img src={STTLogo} alt="STT" title="STT" width={50} height={50} className="inline" />
                            <img src={flagIcon} alt="Flag Icon" title="Flag Icon" width={50} height={50} className="inline" />
                        </div>

                        <br />
                        <hr className="md:hidden" />

                        <br /><br />
                        
                        {/* The information of the hobbies I have */}
                        <div className="pl-4 text-center md:text-left ">
                            
                            {/* Gym */}
                            <div className="md:flex items-start gap-4">
                                <img src={dumbbellLogo} alt="Dumbbell" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>{content.HobbiesAndAchievements.Hobbies.Gym.Title}</b> - {ReactHtmlParser(content.HobbiesAndAchievements.Hobbies.Gym.pt1)} <br className="md:hidden" />
                                    {ReactHtmlParser(content.HobbiesAndAchievements.Hobbies.Gym.pt2)} <br className="md:hidden" />
                                    {ReactHtmlParser(content.HobbiesAndAchievements.Hobbies.Gym.pt3)} <a className="underline hover:font-bold" href="https://www.notion.so/pedro-chaps/MY-FITNESS-JOURNEY-5e3eb18b413d4931a63725ba6cabd296" target="_blank">{ReactHtmlParser(content.HobbiesAndAchievements.Hobbies.Gym.pt4)}</a> {ReactHtmlParser(content.HobbiesAndAchievements.Hobbies.Gym.pt5)} </p>
                            </div><br />
                            
                            {/* Video Games */}
                            <div className="md:flex items-start gap-4">
                                <img src={videogamesLogo} alt="Video Games" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>{content.HobbiesAndAchievements.Hobbies.VideoGames.Title}</b> - {ReactHtmlParser(content.HobbiesAndAchievements.Hobbies.VideoGames.pt1)}
                                    <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-4 md:justify-items-start place-items-center p-5 gap-4 list-none md:list-disc">
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
                                    {ReactHtmlParser(content.HobbiesAndAchievements.Hobbies.VideoGames.pt2)} </p>
                            </div><br />
                            
                            {/* STT */}
                            <div className="md:flex items-start gap-4">
                                <img src={STTLogo} alt="STT" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>{content.HobbiesAndAchievements.Hobbies.STT.Title}</b> - {ReactHtmlParser(content.HobbiesAndAchievements.Hobbies.STT.pt1)} <a className="underline hover:font-bold" href="https://sectt.github.io/" target="_blank">STT</a>{ReactHtmlParser(content.HobbiesAndAchievements.Hobbies.STT.pt2)}<br className="md:hidden" /> {ReactHtmlParser(content.HobbiesAndAchievements.Hobbies.STT.pt3)}</p>
                            </div><br />
                            
                            {/* CTFs & Hacking Platforms */}
                            <div className="md:flex items-start gap-4">
                                <img src={flagIcon} alt="Flag Icon" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>{ReactHtmlParser(content.HobbiesAndAchievements.Hobbies.CTFsHackingPlatforms.Title)}</b> - {ReactHtmlParser(content.HobbiesAndAchievements.Hobbies.CTFsHackingPlatforms.pt1)} <a className="underline hover:font-bold" href="https://cryptohack.org/user/ch4ps/" target="_blank">CryptoHack</a> {ReactHtmlParser(content.HobbiesAndAchievements.Hobbies.CTFsHackingPlatforms.pt2)}, <a className="underline hover:font-bold" href="https://portswigger.net/web-security/" target="_blank">Portswigger Academy</a> {ReactHtmlParser(content.HobbiesAndAchievements.Hobbies.CTFsHackingPlatforms.pt3)}, <a className="underline hover:font-bold" href="https://www.hackthebox.com/" target="_blank">HackTheBox</a> {ReactHtmlParser(content.HobbiesAndAchievements.Hobbies.CTFsHackingPlatforms.pt4)} <a className="underline hover:font-bold" href="https://tryhackme.com/" target="_blank">TryHackMe</a>.</p>
                            </div>
                            
                        </div>
                    </div>
                    
                    {/* The section that contains the information of the Achievements (second) button */}
                    <div className={clicked2 ? "text-lg text-left m-5 pb-5" : "hidden"}>
                        
                        {/* The icons of the achievements I've had */}
                        <div className="flex flex-wrap justify-evenly" name="My Stack">
                            <img src={schoolLogo} alt="School" title="School" width={50} height={50} className="inline " />
                            <img src={tecnicoLogo} alt="IST" title="IST" width={50} height={50} className="inline" />
                            <img src={cryptohackLogo} alt="Cryptohack" title="Cryptohack" width={50} height={50} className="inline" />
                            <img src={cscptLogo} alt="CSCPT" title="CSCPT" width={50} height={50} className="inline" />
                            <img src={ecsc21Logo} alt="ECSC 21" title="ECSC 21" width={50} height={50} className="inline" />
                            <img src={ecsc22Logo} alt="ECSC 22" title="ECSC 22" width={50} height={50} className="inline" />
                            <img src={resumosLEICLogo} alt="Resumos LEIC" title="Resumos LEIC" width={50} height={50} className="inline" />
                        </div>

                        <br />
                        <hr className="md:hidden" />

                        <br /><br />
                        
                        {/* The information of the achievements I've worked */}
                        <div className="pl-4 text-center md:text-left ">
                            
                            {/* School */}
                            <div className="md:flex items-start gap-4">
                                <img src={schoolLogo} alt="School" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>{content.HobbiesAndAchievements.Achievements.School.Title} </b> - {ReactHtmlParser(content.HobbiesAndAchievements.Achievements.School.pt1)}</p>
                            </div><br />

                            {/* University */}
                            <div className="md:flex items-start gap-4">
                                <img src={tecnicoLogo} alt="IST" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>{content.HobbiesAndAchievements.Achievements.University.Title} </b> - {ReactHtmlParser(content.HobbiesAndAchievements.Achievements.University.pt1)} <a className="underline hover:font-bold" href="https://conselhopedagogico.tecnico.ulisboa.pt/bolsas-e-premios/quadro-e-diplomas-de-merito/6773-2/" target="_blank">{ReactHtmlParser(content.HobbiesAndAchievements.Achievements.University.pt2)}</a> {ReactHtmlParser(content.HobbiesAndAchievements.Achievements.University.pt3)} </p>
                            </div>
                                <div className="text-center"> <img className=" ml-auto mr-auto transition-all duration-300 h-[16vh] w-[23vh] hover:rotate-90 hover:scale-[3] md:hover:scale-[5.5] md:hover:rotate-0 " src={ist20_21Award} alt="IST merit award 2020-2021" />
                                <div className="text-center">
                                <p className="text-slate-400 md:hidden">{ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ECSC2021.pt7Mobile)}</p>
                                <p className="text-slate-400 hidden md:inline">{ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ECSC2021.pt7Desktop)}</p>
                            </div>
                            </div><br />

                            {/* Cryptohack */}
                            <div className="md:flex items-start gap-4">
                                <img src={cryptohackLogo} alt="Cryptohack" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>{content.HobbiesAndAchievements.Achievements.Cryptohack.Title} </b> - {ReactHtmlParser(content.HobbiesAndAchievements.Achievements.Cryptohack.pt1)} <a className="underline hover:font-bold" href="https://cryptohack.org/scoreboard/" target="_blank">CryptoHack</a> {ReactHtmlParser(content.HobbiesAndAchievements.Achievements.Cryptohack.pt2)} </p>
                            </div><br />
                            
                            {/* CSCPT 21 */}
                            <div className="md:flex items-start gap-4">
                                
                                <img src={cscptLogo} alt="CSCPT" width={50} height={50} className="inline pb-5 mr-6 md:pb-0 md:ml-0 md:mr-0" />
                                <img src={ecsc21Logo} alt="ECSC 21" width={50} height={50} className="inline pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                
                                <p className=""> <b>{content.HobbiesAndAchievements.Achievements.ECSC2021.Title} </b> - {ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ECSC2021.pt1)} <a className="underline hover:font-bold" href="https://twitter.com/CyberChallPT/status/1440604680430571527?s=20&t=Gj-LnD0GGoTlMDU9GqoPKA" target="_blank"> {ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ECSC2021.pt2)}</a>{ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ECSC2021.pt3)} <a className="underline hover:font-bold" href="https://ecsc.eu/" target="_blank">ECSC</a> {ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ECSC2021.pt4)} <a className="underline hover:font-bold" href="https://visao.sapo.pt/exameinformatica/noticias-ei/internet/2021-10-01-portugal-termina-euro-da-ciberseguranca-em-7o-lugar-alemanha-e-a-grande-vencedora/" target="_blank">{ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ECSC2021.pt5)}</a>{ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ECSC2021.pt6)} </p>

                            </div>
                            <div className="text-center"> <img className=" ml-auto mr-auto transition-all duration-300 h-[16vh] w-[23vh] hover:rotate-90 hover:scale-[3] md:hover:scale-[5.5] md:hover:rotate-0 " src={ecsc21Award} alt="ECSC 2021" />
                            </div>
                            <div className="text-center">
                                <p className="text-slate-400 md:hidden">{ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ECSC2021.pt7Mobile)}</p>
                                <p className="text-slate-400 hidden md:inline">{ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ECSC2021.pt7Desktop)}</p>
                            </div>
                            
                            {/* CSCPT 22 */}
                            <div className="md:flex items-start gap-4">
                                <img src={cscptLogo} alt="CSCPT" width={50} height={50} className="inline pb-5 mr-6 pt-12 md:pt-0 md:pb-0 md:ml-0 md:mr-0" />
                                <img src={ecsc22Logo} alt="CSCPT" width={50} height={50} className="inline pb-5 pt-12 md:pt-0 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b> {content.HobbiesAndAchievements.Achievements.ECSC2022.Title} </b> - {ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ECSC2022.pt1)} <a className="underline hover:font-bold" href="https://www.linkedin.com/posts/pedro-chaparro_cybersecuritychallengept2022-cybersecurity-activity-6957628283014295553-bBI0?utm_source=linkedin_share&utm_medium=member_desktop_web" target="_blank"> {ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ECSC2022.pt2)}</a>{ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ECSC2022.pt3)} <a className="underline hover:font-bold" href="https://ecsc.eu/" target="_blank">ECSC</a> {ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ECSC2022.pt4)} <a className="underline hover:font-bold"  href="https://final.2022.cybersecuritychallenge.pt/" target="_blank">{ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ECSC2022.pt5)}</a>. </p>
                            </div> <br/>              
                            
                            {/* Resumos LEIC */}
                            <div className="md:flex items-start gap-4">
                                <img src={resumosLEICLogo} alt="Cryptohack" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>{content.HobbiesAndAchievements.Achievements.ResumosLEIC.Title} </b> - {ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ResumosLEIC.pt1)} <a className="underline hover:font-bold" href="https://resumos.leic.pt/rc/" target="_blank">Resumos LEIC</a>{ReactHtmlParser(content.HobbiesAndAchievements.Achievements.ResumosLEIC.pt2)}.</p>
                            </div><br /> 
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Instead of the planet, this is presented to mobile users */}
            <div className="h-[175rem] md:h-[115rem] md:hidden">
                <div className="bg-black text-white relative top-96 z-0 text-center m-5">
                    {ReactHtmlParser(content.HobbiesAndAchievements.MobileJokePlanet.pt1)}
                    
                    <img src={spectacularEarthDrawing}/> <br/><br/>
                    
                    {ReactHtmlParser(content.HobbiesAndAchievements.MobileJokePlanet.pt2)}
                </div>
            </div>
            
            {/* A Planet Earth with cool features: https://github.com/vasturiano/react-globe.gl */}
            <div className="h-[185rem] md:h-[115rem] hidden md:block">
                <Suspense fallback={<div> I am Loading... </div>}>
                    <Canvas dpr={animate? 1 : 0.5} frameloop="demand" camera={{ fov: 75, near: 0.1, far: 1000, position: [1.337, -10.98, 5.832] }} style={{ background: "black", top: "0", zIndex: "0" }}>
                        <PerspectiveCamera />
                        
                        <Stars radius={100} depth={100} />
                        <ambientLight intensity={0.05} color={"0xffffff"} />
                        <directionalLight intensity={1} color={0xffffff} position={[2, 2, 1]} />
                        <Html fullscreen style={{
                            display: "grid",
                            placeContent: "center"
                        }}>
                            <PlanetEarth scrollPercentage={scrollPercentage} content={content} animate={animate}/>
                        </Html>
                    </Canvas>
                </Suspense>
            </div>
        </div>

    )
}

export default HobbiesAndAchievements