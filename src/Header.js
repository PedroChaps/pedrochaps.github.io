import React, { useState, useEffect, useRef } from 'react'

import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';

function Header( {scrollPercentage} ) {
  
  const [hovered, setHovered] = useState(false);

  
  const imgStyle1 = "md:col-span-1 border-2 rounded-xl transition-all duration-800 bg-gradient-to-br from-slate-500 md:rounded-3xl border-solid shadow-[0_0_35px_rgba(0,0,0,0.5)] border-secondary md:h-auto max-h-80 md:max-h-[40vh]"
  const imgStyle2 = "md:col-span-1 border-2 rounded-xl transition-all duration-800 bg-gradient-to-tl from-slate-500  md:rounded-3xl border-solid shadow-[0_0_35px_rgba(0,0,0,0.5)] border-secondary md:h-auto max-h-80 md:max-h-[40vh]"
  
  const insideBoxStyle = "pr-4 pl-4 pt-1 pb-1 bg-primary"
  
  const reactiveImgRef = useRef(null);
  const {style, ...mouseHandlers} = use3dEffect(reactiveImgRef);
  
  
  const bg1 = require("./static/headerBackground/bg1.png")
  const bg2 = require("./static/headerBackground/bg2.png")
  const bg3 = require("./static/headerBackground/bg3.png")
  const bg4 = require("./static/headerBackground/bg4.png")
  const bg5 = require("./static/headerBackground/bg5.png")
  const bg6 = require("./static/headerBackground/bg6.png")
  const bg1Ref = useRef(null);
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);
  const bg4Ref = useRef(null);
  const bg5Ref = useRef(null);
  const bg6Ref = useRef(null);
  
  useEffect(() => {
    bg2Ref.current.style.transform = `translate(0px, ${-8500*scrollPercentage**2}px)`
    bg3Ref.current.style.transform = `translate(0px, ${-5500*scrollPercentage**2}px)`
    bg4Ref.current.style.transform = `translate(0px, ${-10500*scrollPercentage**2}px)`
    bg5Ref.current.style.transform = `translate(0px, ${3500*scrollPercentage**2}px)`
    bg6Ref.current.style.transform = `translate(0px, ${scrollPercentage}px)`
  })
  
  
  return (
    // <div id="Header" className="min-h-[92.9vh] relative bg-primary bg-[url(./static/slanted_gradient_rotated.svg)] bg-no-repeat bg-center bg-cover">

    <div id="Header" className="min-h-[92.9vh] bg-transparent">

      <img ref={bg1Ref} className="absolute min-h-[92.9vh] min-w-full" src={bg1} alt="background part 1" />
      <img ref={bg2Ref} className="absolute min-h-[92.9vh] min-w-full" src={bg2} alt="background part 2" />
      <img ref={bg3Ref} className="absolute min-h-[92.9vh] min-w-full" src={bg3} alt="background part 3" />
      <img ref={bg4Ref} className="absolute min-h-[92.9vh] min-w-full" src={bg4} alt="background part 4" />
      <img ref={bg5Ref} className="absolute min-h-[92.9vh] min-w-full" src={bg5} alt="background part 5" />
      <img ref={bg6Ref} className="absolute min-h-[92.9vh] min-w-full" src={bg6} alt="background part 6" />

      <div className="grid gap-2 grid-cols-2 md:grid-cols-4 md:min-w-[40vh] md:min-h-[50vh]">

        <div className="col-span-1 place-self-start">
          {/* <h1 className="invisible text-7xl font-black tracking-wide font-AvenirPro bg-Smoke bg-clip-text text-transparent uppercase relative top-[16vh] left-[16vh]">CHAPS_</h1> */}
          <h1 className=" text-3xl md:text-7xl font-black tracking-wide bg-[url('https://thumbs.gfycat.com/MassiveFlawlessBlackbear-size_restricted.gif')] bg-clip-text text-transparent uppercase relative top-[8vh] left-[3vh] md:top-[16vh] md:left-[7vh]  md:text-left">
            <Typewriter options={{ cursor: "_", loop: true, delay: "250" }} onInit={(typewriter) => {
              typewriter.typeString('Pedro<br>Chaps')
                .pauseFor(1500).deleteAll()
                .typeString("ola :D")
                .pauseFor(1500)
                .start()
            }} />
          </h1>
        </div>

        {/* <img className="md:col-span-1 border-2 rounded-xl md:rounded-3xl border-solid shadow-[0_0_35px_rgba(0,0,0,0.5)] border-secondary md:h-auto max-h-80 md:max-h-[40vh] relative top-[4vh] right-[4vh] md:top-[8vh]" src="https://media-exp1.licdn.com/dms/image/C4D03AQGZsQosLsCbmw/profile-displayphoto-shrink_800_800/0/1640011070913?e=1664409600&v=beta&t=3aTV64yyfkdlHlmeT-D_TU_Tn8k3oAE8eZBVBBglP9w" /> */}

        {/* <div className="" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
          <img className={hovered ? "transition-all duration-800 hidden" : imgStyle1} src={require("./static/pedroAvatar.png")} />
          <img className={hovered ? imgStyle2 : "transition-all duration-800 hidden"} src={require("./static/pedroAvatar2.png")} />
        </div> */}
        <div className="relative top-[4vh] right-[4vh] md:top-[8vh]" onMouseEnter={() => { setHovered(true) }} onMouseLeave={() => { setHovered(false) }}>
          <animated.div ref={reactiveImgRef} style={{ ...style }}  {...mouseHandlers}>
            <img className={hovered ? "transition-all duration-800 hidden" : imgStyle1} src={require("./static/pedroAvatar.png")} alt="My Avatar, state 1" />
            <img className={hovered ? imgStyle2 : "transition-all duration-800 hidden"} src={require("./static/pedroAvatar2.png")} alt="My Avatar, state 2" />
          </animated.div>
        </div>
        
        
        <div className="relative col-span-2 ">
          {/* <h1 className="invisible text-7xl font-black tracking-wide font-AvenirPro bg-Smoke bg-clip-text text-transparent uppercase relative top-[16vh] left-[16vh]">CHAPS_</h1> */}

          <div className='flex items-center justify-center mt-24 flex-wrap'>

            <span className={"uppercase p-[0.125rem] bg-red-900/40 font-bold transition-all duration-300 hover:text-red-600 hover:bg-text-red-600 hover:shadow-[0_0_35px_rgba(255,0,0,0.5)] hover:cursor-pointer text-lg md:text-5xl text-white"}>
              <a href="https://www.linkedin.com/in/pedro-chaparro/overlay/1635499416766/single-media-viewer/" className={insideBoxStyle}>
                <span className="inline">Download CV </span> <FontAwesomeIcon icon={faDownload} />
              </a>
            </span>

            <div className="uppercase p-[0.125rem] bg-red-900/40 font-bold transition-all duration-300 hover:text-red-600 hover:bg-text-red-600 hover:shadow-[0_0_35px_rgba(255,0,0,0.5)] hover:cursor-pointer text-lg md:text-5xl text-white ml-4 md:ml-16">
              <div to="GeneralExperience" className={insideBoxStyle}>
                <span className='inline'>PT 🇵🇹</span>
              </div>
            </div>

          </div>

          <h1 className=" pt-10 md:pt-0 m-6 md:m-0 text-3xl md:text-7xl font-black tracking-wide  text-almostWhite bg-clip-text relative text-center md:text-right md:mr-20 md:top-[8vh]">
            A young adult that enjoys learning new stuff, one step at a time.
          </h1>
        </div>

      </div>

    
      {/* <div className="flex items-start flex-wrap min-h-[50vh]">

        <img className="self-start border-2 rounded-3xl border-solid shadow-[0_0_35px_rgba(255,0,0,0.5)] border-secondary   h-auto max-h-[40vh] relative top-[8vh] left-[8vh]" src="https://media-exp1.licdn.com/dms/image/C4D03AQGZsQosLsCbmw/profile-displayphoto-shrink_800_800/0/1640011070913?e=1664409600&v=beta&t=3aTV64yyfkdlHlmeT-D_TU_Tn8k3oAE8eZBVBBglP9w" />

        <div>
          <h1 className="invisible text-7xl font-black tracking-wide font-BlackOps bg-Smoke bg-clip-text text-transparent uppercase relative top-[16vh] left-[16vh]">CHAPS_</h1>
          <h1 className=" text-7xl font-black tracking-wide font-BlackOps bg-[url('https://thumbs.gfycat.com/MassiveFlawlessBlackbear-size_restricted.gif')] bg-clip-text text-transparent uppercase relative top-[16vh] left-[16vh]">
            <Typewriter options={{ cursor: "_", loop: true, delay: "250" }} onInit={(typewriter) => {
              typewriter.typeString('Pedro<br>Chaps')
                .pauseFor(1500).deleteAll()
                .typeString("ola :D")
                .pauseFor(1500)
                .start()
            }} />
          </h1>
        </div>

      </div> */}
      
      
      <div className="text-almostWhite m-5 md:m-20 rounded-3xl backdrop-filter backdrop-blur-md bg-white/20 text-center">
        
        <h2 className="text-5xl text-center p-5 font-semibold">About me</h2>
        <p className="text-lg text-center md:text-left m-5 pb-5">
          Hi! My name is Pedro Chaparro and I'm from Portugal 🇵🇹.<br/><br className="md:hidden"/>
          I'm a student @ <a className="underline" href="https://tecnico.ulisboa.pt/en/">Instituto Superior Técnico</a>, taking a Computer Science and Engineering degree who aims to enroll in a Master's Degree.<br/><br className="md:hidden"/>
          I like programming in general and I'm really interested in the CyberSecurity field - I've been a finalist in two National events that lead me to European events in Prague, Czech Republic 🇨🇿, and in Vienna, Austria 🇦🇹.<br/><br className="md:hidden"/>
          I really enjoy learning new stuff and helping others. I consider myself a hard worker!<br/><br className="md:hidden"/>
          You can learn a bit more about myself by keep scrolling or clicking the buttons bellow, enjoy :D.
        </p>
      </div>
      
      <p className="bg-black md:hidden">‌‌  </p>

      
      
      {/* <div className="flex flex-wrap flex-row text-white justify-around items-center text-center"> */}
      {/* <div className="text-white grid grid-cols-12 p-8 grid-flow-row gap-4 text-center">
        <p className="col-span-1">Get back to top</p>
        <p className="col-span-2">Have a look at the skills I have and the tools I use</p>
        <p className="col-span-3">Check my professional experience</p>
        <p className="col-span-2">Know what and where I studied</p>
        <p className="col-span-2">Get to know me a little bit better</p>
        <p className="col-span-2">Reach out to me and say hello!</p>
        
      </div> */}

    </div>
  )
}

export default Header;

// https://pa1.narvii.com/7626/af774c898a7854805d1743924a5a7a7cf4a37cd4r1-434-250_hq.gif
// https://i.gifer.com/ChD.gif