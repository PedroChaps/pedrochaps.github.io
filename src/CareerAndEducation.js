import React, { useState, Suspense } from 'react'
import { Canvas } from "@react-three/fiber";

import { Stars, PerspectiveCamera } from '@react-three/drei';
import LowPollyPlane from './LowPollyPlane';

import superprofLogo from './static/icons/careerAndEducation/superprof_icon.png';
import tecnicoLogo from './static/icons/careerAndEducation/tecnicoLisboa_icon2.png';

import ReactHtmlParser from 'react-html-parser';

function CareerAndEducation({scrollPercentage, content}) {
    
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


    return (
        <div id="CareerAndEducation" className="relative">

            <div className=" text-white z-[1] bg-transparent">

                {/* The title of the Component */}
                <h1 id="CareerAndEducation" className="left-[0%] right-[0%] absolute z-[1] -top-10 md:top-10 pt-10 md:pt-0 m-6 md:m-0 text-3xl md:text-7xl font-black tracking-wide  text-almostWhite text-center md:text-left md:ml-20 md:mt-12">
                    {content.CareerAndEducation.Title}
                </h1>
                
                {/* The subtitle of the Component */}
                <h2 className="absolute z-[1] left-[0%] right-[0%] md:top-32 pt-10 md:pt-0 m-6 md:m-0 text-lg md:text-3xl font-black tracking-wide  text-almostWhite text-center md:text-left md:ml-20 md:mt-12"> {ReactHtmlParser(content.CareerAndEducation.SubTitle)}  </h2>
                
                {/* The button to play with the background (Desktop version) */}
                <h3 onClick={e => { setClicked1(false); setClicked2(false) }} className="absolute z-[1] top-32 md:top-52 left-[0%] right-[0%] md:left-4 pt-10 md:pt-0 m-6 md:m-0 font-black tracking-wide  hover:text-slate-600 text-red-700 text-center md:text-left md:ml-20 md:mt-10 hover:cursor-pointer hidden md:inline">{ReactHtmlParser(content.CareerAndEducation.BackgroundDesktop)}</h3>
                
                {/* The button to play with the background (Mobile version) */}
                <h3 onClick={e => { setClicked1(false); setClicked2(false) }} className="absolute z-[1] top-32 md:top-52 left-[0%] right-[0%] md:left-4 md:pt-0 m-6 md:m-0 font-black tracking-wide  hover:text-slate-600 text-red-700 text-center md:text-left md:ml-20 md:mt-10 hover:cursor-pointer md:hidden">{ReactHtmlParser(content.CareerAndEducation.BackgroundMobile)}</h3>

                {/* The section that contains all the information, showing only a specific part depending on the clicked button */}
                <div className="absolute z-[1] top-48 text-almostWhite m-5 md:m-20 rounded-3xl left-[0%] right-[0%] backdrop-filter backdrop-blur-lg bg-white/20 text-center center">
                    
                    {/* The section that has the two buttons */}
                    <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 justfiy-evenly items-center">
                        <div onClick={() => handleClick1()} className={clicked1 ? chosenStyle : notChosenStyle}>{content.CareerAndEducation.WorkExperience.Title}</div>
                        <div onClick={() => handleClick2()} className={clicked2 ? chosenStyle + " md:border-l-[1px]" : notChosenStyle + " md:border-l-[1px]"}> {content.CareerAndEducation.Education.Title} </div>
                    </div>

                    {/* The section that contains the information of the Work Experience (first) button */}
                    <div className={clicked1 ? "text-lg text-left m-5 pb-5" : "hidden"}>
                        
                        {/* The icons of the places I've worked */}
                        <div className="flex flex-wrap justify-evenly" name="My Stack">
                            <img src={tecnicoLogo} alt="IST" title="IST" width={50} height={50} className="inline " />
                            <img src={superprofLogo} alt="Superprof" title="Superprof" width={50} height={50} className="inline" />
                        </div>

                        <br />
                        <hr className="md:hidden" />

                        <br /><br />

                        {/* The information of the places I've worked */}
                        <div>
                            {/* IST */}
                            <a href="https://tecnico.ulisboa.pt/en/" className="inline md:hidden m-auto" >
                                <img className="m-auto pb-2" src={tecnicoLogo} alt="IST Logo" width={50} />
                            </a>
                            <div className="grid md:grid-rows-1 md:grid-cols-12 justify-center justify-items-center gap-5 backdrop-blur-3xl p-2 text-black rounded-3xl text-2xl">
                                <a href="https://tecnico.ulisboa.pt/en/" ><img src={tecnicoLogo} alt="IST Logo" className="hidden md:inline col-span-1 justify-self-center self-center" width={50} /></a>
                                <a href="https://tecnico.ulisboa.pt/en/" className="col-span-3 justify-self-start self-center text-center underline hover:font-bold" >{content.CareerAndEducation.WorkExperience.SysadminIST.Place}</a>
                                <p className="col-span-2 justify-self-center self-center">{content.CareerAndEducation.WorkExperience.SysadminIST.Interval}</p>
                                <b className="col-span-6 justify-self-center self-center text-right m-">{content.CareerAndEducation.WorkExperience.SysadminIST.Role}</b>
                            </div><br />

                            <div className="pl-2 text-center md:text-left">
                                <div className="md:flex items-start gap-4">
                                    <p className="">{ReactHtmlParser(content.CareerAndEducation.WorkExperience.SysadminIST.Description.pt1)}<br className="md:hidden" />
                                        {ReactHtmlParser(content.CareerAndEducation.WorkExperience.SysadminIST.Description.pt2)}<br className="md:hidden" />
                                        {ReactHtmlParser(content.CareerAndEducation.WorkExperience.SysadminIST.Description.pt3)} </p>
                                </div><br />
                            </div>
        
                            {/* Superprof */}
                            <a href="https://www.superprof.pt/" className="inline md:hidden m-auto" >
                                <img className="m-auto pb-2" alt="Superprof Logo" src={superprofLogo} width={50} />
                            </a>
                            <div className="grid md:grid-rows-1 md:grid-cols-12 justify-center justify-items-center gap-5 backdrop-blur-3xl p-2 text-black rounded-3xl text-2xl">
                                <a href="https://www.superprof.pt/" ><img src={superprofLogo} alt="Superprof Logo" className="hidden md:inline col-span-1 justify-self-center self-center" width={50} /></a>
                                <p className="col-span-3 justify-self-start self-center"><a href="https://www.superprof.pt/" className="underline hover:font-bold" >Superprof</a> {content.CareerAndEducation.WorkExperience.MathTutor.Place}</p>
                                <p className="col-span-2 justify-self-center self-center">{content.CareerAndEducation.WorkExperience.MathTutor.Interval}</p>
                                <b className="col-span-6 justify-self-center self-center text-right m-">{content.CareerAndEducation.WorkExperience.MathTutor.Role}</b>
                            </div><br />

                            <div className="pl-2 text-center md:text-left">
                                <div className="md:flex items-start gap-4">
                                    <p className=""> {ReactHtmlParser(content.CareerAndEducation.WorkExperience.MathTutor.Description.pt1)}<br className="md:hidden" />
                                        {ReactHtmlParser(content.CareerAndEducation.WorkExperience.MathTutor.Description.pt2)}<br className="md:hidden" />
                                        {ReactHtmlParser(content.CareerAndEducation.WorkExperience.MathTutor.Description.pt3)}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    {/* The section that contains the information of the Education (second) button */}
                    <div className={clicked2 ? "text-lg text-left m-5 pb-5" : "hidden"}>
                        
                        {/* The icons of the places I've worked */}
                        <div className="flex flex-wrap justify-evenly" name="My Stack">
                            <img src={tecnicoLogo} alt="Python" title="Python" width={50} height={50} className="inline " />
                        </div>

                        <br />
                        <hr className="md:hidden" />

                        <br /><br />

                        {/* The information of the places I've studied */}
                        <div>
                            {/* IST */}
                            <a href="https://tecnico.ulisboa.pt/en/education/courses/undergraduate-programmes/computer-science-and-engineering/" className="inline md:hidden m-auto" >
                                <img className="m-auto pb-2" src={tecnicoLogo} alt="IST Logo" width={50} />
                            </a>
                            <div className="grid md:grid-rows-1 md:grid-cols-12 justify-center justify-items-center gap-5 backdrop-blur-3xl p-2 text-black rounded-3xl text-2xl">
                                <a href="https://tecnico.ulisboa.pt/en/education/courses/undergraduate-programmes/computer-science-and-engineering/" ><img src={tecnicoLogo} alt="IST Logo" className="hidden md:inline col-span-1 justify-self-center self-center" width={50} /></a>
                                <a href="https://tecnico.ulisboa.pt/en/education/courses/undergraduate-programmes/computer-science-and-engineering/" className="col-span-3 justify-self-start self-center underline hover:font-bold" >{content.CareerAndEducation.Education.BachelorIST.Place}</a>
                                <p className="col-span-2 justify-self-center self-center">{content.CareerAndEducation.Education.BachelorIST.Interval}</p>
                                <b className="col-span-6 justify-self-center self-center text-right m-">{content.CareerAndEducation.Education.BachelorIST.Degree}</b>
                            </div><br />

                            <div className="pl-2 text-center md:text-left">
                                <div className="md:flex items-start gap-4">
                                    <p className=""> {ReactHtmlParser(content.CareerAndEducation.Education.BachelorIST.Description.pt1)} <br className="md:hidden" />
                                        {ReactHtmlParser(content.CareerAndEducation.Education.BachelorIST.Description.pt2)} <a className="underline hover:font-bold" href="https://fenix.tecnico.ulisboa.pt/cursos/leic-a/curriculo" >{ReactHtmlParser(content.CareerAndEducation.Education.BachelorIST.Description.pt3)}</a> {ReactHtmlParser(content.CareerAndEducation.Education.BachelorIST.Description.pt4)} <br />
                                        <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-4 md:justify-items-start place-items-center p-5 gap-4 list-none">
                                            {ReactHtmlParser(content.CareerAndEducation.Education.BachelorIST.Description.pt5)}
                                        </div>

                                        {ReactHtmlParser(content.CareerAndEducation.Education.BachelorIST.Description.pt6)} <a className="underline hover:font-bold" href="https://sectt.github.io/" >STT</a>{ReactHtmlParser(content.CareerAndEducation.Education.BachelorIST.Description.pt7)} <a className="underline hover:font-bold" href="https://ctftime.org/stats/2022/PT" >{ReactHtmlParser(content.CareerAndEducation.Education.BachelorIST.Description.pt8)}</a>{ReactHtmlParser(content.CareerAndEducation.Education.BachelorIST.Description.pt9)} <br />
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            {/* The background that has an animated plane, inspired by this video: https://www.youtube.com/watch?v=YK1Sw_hnm58 */}
            <div className="h-[150rem] md:h-[75rem]">
                <Suspense fallback={<div> I am Loading... </div>}>
                    <Canvas style={{ background: "black", top: "0", zIndex: "0" }} camera={{ fov: 75, near: 0.1, far: 1000, position: [1.337, -10.98, 5.832] }}>
                        <PerspectiveCamera />
                        <Stars radius={100} depth={100} />
                        <ambientLight intensity={0.05} color={"0xffffff"} />
                        <directionalLight intensity={1} color={0xffffff} position={[2, 2, 1]} />
                        <Suspense fallback={null}>
                            <LowPollyPlane scrollPerc={scrollPercentage} />
                        </Suspense>
                    </Canvas>
                </Suspense>
            </div>

        </div>
    )
}

export default CareerAndEducation