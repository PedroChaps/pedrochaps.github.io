import React, { useState, Suspense } from 'react'
import { Canvas } from "@react-three/fiber";

import { Stars, Html, PerspectiveCamera } from '@react-three/drei';
import PlanetEarth from "./PlanetEarth";

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


function HobbiesAndAchievements({ scrollPercentage }) {

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

    return (
        <div id="HobbiesAndAchievements" className="relative">

            <div className=" text-white z-[1] bg-transparent">


                <h1 id="HobbiesAndAchievements" className="left-[0%] right-[0%] absolute z-[1] -top-10 md:top-10 pt-10 md:pt-0 m-6 md:m-0 text-3xl md:text-7xl font-black tracking-wide  text-almostWhite text-center md:text-left md:ml-20 md:mt-12">
                    Hobbies & Achievements
                </h1>
                <h2 className="absolute z-[1] top-8 md:top-32 pt-10 md:pt-0 m-6 md:m-0 text-lg md:text-3xl font-black tracking-wide  text-almostWhite text-center md:text-left md:ml-20 md:mt-12"> Know what I like and what I have accomplished </h2>
                <h3 onClick={e => { setClicked1(false); setClicked2(false) }} className="absolute z-[1] top-32 md:top-52 left-[0%] right-[0%] md:left-4 pt-10 md:pt-0 m-6 md:m-0 font-black tracking-wide  hover:text-slate-600 text-red-700 text-center md:text-left md:ml-20 md:mt-10 hover:cursor-pointer">Play with the background (rotate Earth!)</h3>


                <div className="absolute z-[1] top-48 text-almostWhite m-5 md:m-20 rounded-3xl left-[0%] right-[0%] backdrop-filter backdrop-blur-lg bg-white/20 text-center center">

                    <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 justfiy-evenly items-center">
                        <div onClick={() => handleClick1()} className={clicked1 ? chosenStyle : notChosenStyle}>Hobbies</div>
                        <div onClick={() => handleClick2()} className={clicked2 ? chosenStyle + " md:border-l-[1px]" : notChosenStyle + " md:border-l-[1px]"}>Achievements</div>
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
                                <p className=""> <b>Gym</b> - I attend a local gym since june of 2019, after losing a total of 99lbs in the span of a year and three months, by sheer will and in a totally independent way. <br /> <br className="md:hidden" />
                                    Since then, I've maintained a healthy lifestyle which I'm really proud of. <br /> <br className="md:hidden" />
                                    As I mentioned in my soft skills, I've <a className="underline hover:font-bold" href="https://www.notion.so/pedro-chaps/MY-FITNESS-JOURNEY-5e3eb18b413d4931a63725ba6cabd296">shared my weight loss project</a> as a way to inspire others to achieve their goals. </p>
                            </div><br />

                            <div className="md:flex items-start gap-4">
                                <img src={videogamesLogo} alt="Video Games" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>Video Games</b> - Since I was little, I've always enjoyed playing video games. I've played on different gaming consoles, from the ps2 to the computer, and I like multiple genres. <br /> Some of my all-time favorites are:
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
                                    This is one of my main motivations to like new technologies so much. </p>
                            </div><br />

                            <div className="md:flex items-start gap-4">
                                <img src={STTLogo} alt="STT" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>STT</b> - I'm a member of the CyberSecurity of IST, <a className="underline hover:font-bold" href="https://sectt.github.io/">STT</a>, since the beginning of the course. <br />The team usually gathers remotely and presentially to play CTF (Capture The Flag) events together. <br /><br className="md:hidden" /> Besides that, the team also does weekly meetings where generally the senior members talk about advanced topics.</p>
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
                                <p className=""> <b>School Achievements </b> - I recieved multiple certificates of merit and honor during school, was delegate and sub-delegate of class multiple times and was member of the Students Association in the last year of school.</p>
                            </div><br />

                            <div className="md:flex items-start gap-4">
                                <img src={tecnicoLogo} alt="IST" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>University Performance </b> - I've had high academic performance during the course. <br/> I was in the <a className="underline hover:font-bold" href="https://conselhopedagogico.tecnico.ulisboa.pt/bolsas-e-premios/quadro-e-diplomas-de-merito/6773-2/">Merit Board</a> of the first year of my course and my performance was one of the reasons why I was able to join the Research Investigator role at my University. </p>
                            </div><br />

                            <div className="md:flex items-start gap-4">
                                <img src={cryptohackLogo} alt="Cryptohack" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>Cryptohack Performance </b> - As of today, 2022-08-05, I am the portuguese top 5 in the <a className="underline hover:font-bold" href="https://cryptohack.org/scoreboard/">CryptoHack</a> website, one of the best platforms where you can learn about all kinds of cryptography in a gamified way. </p>
                            </div><br />
                            
                            <div className="md:flex items-start gap-4">
                                
                                <img src={cscptLogo} alt="CSCPT" width={50} height={50} className="inline pb-5 mr-6 md:pb-0 md:ml-0 md:mr-0" />
                                <img src={ecsc21Logo} alt="ECSC 21" width={50} height={50} className="inline pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                
                                <p className=""> <b>ECSC 2021 </b> - I was a finalist in the nacional <a className="underline hover:font-bold" href="https://twitter.com/CyberChallPT/status/1440604680430571527?s=20&t=Gj-LnD0GGoTlMDU9GqoPKA"> CyberSecurity event CSCPT 21</a>, which gave me the opportunity to go to Prague, Czech Republic 🇨🇿 to participate in the european event <a className="underline hover:font-bold" href="https://ecsc.eu/">ECSC</a> 2021 as a member of <a className="underline hover:font-bold" href="https://visao.sapo.pt/exameinformatica/noticias-ei/internet/2021-10-01-portugal-termina-euro-da-ciberseguranca-em-7o-lugar-alemanha-e-a-grande-vencedora/">team Portugal</a>. The team placed 7, a record so far. <br /> I got the following award for participating: </p>

                            </div>
                            <div className="text-center"> <img className=" ml-auto mr-auto transition-all duration-300 h-[16vh] w-[23vh] hover:rotate-90 hover:scale-[3]  md:hover:h-[64vh] md:hover:w-[92vh] md:hover:rotate-0 " src={ecsc21Award} alt="ECSC 2021" />
                            </div>
                            <div className="text-center">
                                <p className="text-slate-400 md:hidden">(Touch me, then outside of me!)</p>
                                <p className="text-slate-400 hidden md:inline">(Hover me!)</p>
                            </div>
                            <div className="md:flex items-start gap-4">
                                <img src={cscptLogo} alt="Cryptohack" width={50} height={50} className="inline pb-5 mr-6 pt-12 md:pt-0 md:pb-0 md:ml-0 md:mr-0" />
                                <img src={ecsc22Logo} alt="Cryptohack" width={50} height={50} className="inline pb-5 pt-12 md:pt-0 md:pb-0 md:ml-0 md:mr-0" />
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