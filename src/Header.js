import React, { useState, useEffect, useRef } from 'react'

import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';

import contentMultipleLanguages from './contentMultipleLanguages';

import ReactHtmlParser from 'react-html-parser';

function Header({ scrollPercentage, content, setContent }) {

  // Variable that holds the state of the avatar being hovered.
  const [hovered, setHovered] = useState(false);

  // The styles of my avatar, both normal and hovered
  const AvatarStyle = "md:col-span-1 border-2 rounded-xl transition-all duration-800 bg-gradient-to-br from-slate-500 md:rounded-3xl border-solid shadow-[0_0_35px_rgba(0,0,0,0.5)] border-secondary md:h-auto max-h-80 md:max-h-[40vh]"
  const AvatarStyleHovered = "md:col-span-1 border-2 rounded-xl transition-all duration-800 bg-gradient-to-tl from-slate-500  md:rounded-3xl border-solid shadow-[0_0_35px_rgba(0,0,0,0.5)] border-secondary md:h-auto max-h-80 md:max-h-[40vh]"

  // The 3D animation of the avatar, when hovered. Explained here: https://www.npmjs.com/package/use-3d-effect
  const reactiveImgRef = useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(reactiveImgRef);

  // The background, divided in 6 parts, that changes position when hovered.
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

  // The function that handles the click on the language button. 
  // It changes the language between Portuguese and English (by using the imported contentMultipleLanguages object).
  // It also sets the local storage, so the language is remembered even after refreshing the page.
  function handleLanguageClick() {
    if (content.ActualLanguage == "English") {
      setContent(contentMultipleLanguages.Portuguese);
      localStorage.setItem("language", "Portuguese");

    }
    else if (content.ActualLanguage == "Portuguese") {
      setContent(contentMultipleLanguages.English);
      localStorage.setItem("language", "English");
    }
  }

  // A useEffect hook is used to update each background part depending on the scroll position
  useEffect(() => {
    bg2Ref.current.style.transform = `translate(0px, ${-8500 * scrollPercentage ** 2}px)`
    bg3Ref.current.style.transform = `translate(0px, ${-5500 * scrollPercentage ** 2}px)`
    bg4Ref.current.style.transform = `translate(0px, ${-10500 * scrollPercentage ** 2}px)`
    bg5Ref.current.style.transform = `translate(0px, ${3500 * scrollPercentage ** 2}px)`
    bg6Ref.current.style.transform = `translate(0px, ${scrollPercentage}px)`
  })


  return (
    <div id="Header" className="min-h-[92.9vh] bg-transparent">
      
      {/* The background images */}
      <img ref={bg1Ref} className="absolute min-h-[92.9vh] min-w-full" src={bg1} alt="background part 1" />
      <img ref={bg2Ref} className="absolute min-h-[92.9vh] min-w-full" src={bg2} alt="background part 2" />
      <img ref={bg3Ref} className="absolute min-h-[92.9vh] min-w-full" src={bg3} alt="background part 3" />
      <img ref={bg4Ref} className="absolute min-h-[92.9vh] min-w-full" src={bg4} alt="background part 4" />
      <img ref={bg5Ref} className="absolute min-h-[92.9vh] min-w-full" src={bg5} alt="background part 5" />
      <img ref={bg6Ref} className="absolute min-h-[92.9vh] min-w-full" src={bg6} alt="background part 6" />

      {/* A grid that has three elements (the last one has two columns): 
          - My animated name appearing with a Typewriter effect (https://www.npmjs.com/package/typewriter-effect);
          - My hoverable avatar (https://www.npmjs.com/package/use-3d-effect);
          - The special buttons (Download CV & Language) and the "inspiration quote".
      */}
      <div className="grid gap-2  grid-cols-2 md:grid-cols-4 md:min-w-[40vh] md:min-h-[50vh]">
        
        {/* The animated name */}
        <div className="col-span-1 place-self-start">
          <h1 className=" text-3xl md:text-7xl font-black tracking-wide bg-[url('https://thumbs.gfycat.com/MassiveFlawlessBlackbear-size_restricted.gif')] bg-clip-text text-transparent uppercase relative top-[8vh] left-[3vh] md:top-[16vh] md:left-[7vh]  md:text-left">
            <Typewriter options={{ cursor: "_", loop: true, delay: "250" }} onInit={(typewriter) => {
              typewriter.typeString('Pedro<br>Chaps')
                .pauseFor(2000).deleteAll()
                .start()
            }} />
          </h1>
        </div>

        {/* The avatar */}
        <div className="col-span-1 relative top-[4vh] right-[4vh] md:top-[8vh]" onMouseEnter={() => { setHovered(true) }} onMouseLeave={() => { setHovered(false) }}>
          <animated.div ref={reactiveImgRef} style={{ ...style }}  {...mouseHandlers}>
            <img className={hovered ? "transition-all duration-800 hidden" : AvatarStyle} src={require("./static/pedroAvatar.png")} alt="My Avatar, state 1" />
            <img className={hovered ? AvatarStyleHovered : "transition-all duration-800 hidden"} src={require("./static/pedroAvatar2.png")} alt="My Avatar, state 2" />
          </animated.div>
        </div>

        {/* The special buttons and the quote */}
        <div className="relative col-span-2 ">

          <div className='flex flex-wrap items-center justify-center mt-24'>
            
            {/* The download CV button */}
            <span className={"uppercase p-[0.125rem] bg-red-900/40 font-bold transition-all duration-300 hover:text-red-600 hover:bg-text-red-600 hover:shadow-[0_0_35px_rgba(255,0,0,0.5)] hover:cursor-pointer text-lg md:text-5xl text-white"}>
              <a href={content.Header.DownloadCVLink} className="pt-1 pb-1 pl-4 pr-4 bg-primary" >
                <span className="inline">{content.Header.DownloadCV} </span> <FontAwesomeIcon icon={faDownload} />
              </a>
            </span>
            
            {/* The language button */}
            <div onClick={e => handleLanguageClick()} className="uppercase p-[0.125rem] bg-red-900/40 font-bold transition-all duration-300 hover:text-red-600 hover:bg-text-red-600 hover:shadow-[0_0_35px_rgba(255,0,0,0.5)] hover:cursor-pointer text-lg md:text-5xl text-white ml-4 md:ml-16">
              <div to="GeneralExperience" className="pt-1 pb-1 pl-4 pr-4 bg-primary">
                <span className='inline'>{content.Header.LanguageWithFlag}</span>
              </div>
            </div>

          </div>
            
          {/* The quote */}
          <h1 className=" pt-10 md:pt-0 m-6 md:m-0 text-3xl md:text-7xl font-black tracking-wide  text-almostWhite bg-clip-text relative text-center md:text-right md:mr-20 md:top-[8vh]">
            {content.Header.EmotionalParagraph}
          </h1>
        </div>

      </div>

      
      {/* The "About Me" Section */}
      <div className="m-5 text-center text-almostWhite md:m-20 rounded-3xl backdrop-filter backdrop-blur-md bg-white/20 relative">

        <h2 className="p-5 text-5xl font-semibold text-center">{content.Header.AboutMe}</h2>
        <p className="pb-5 m-5 text-lg text-center md:text-left">
          {ReactHtmlParser(content.Header.AboutMeDescription.p1)} <br /><br className="md:hidden" />
          {ReactHtmlParser(content.Header.AboutMeDescription.p2_pt1)} <a className="underline" href="https://tecnico.ulisboa.pt/en/" >Instituto Superior Técnico</a>{ReactHtmlParser(content.Header.AboutMeDescription.p2_pt2)} <br /><br className="md:hidden" />
          {ReactHtmlParser(content.Header.AboutMeDescription.p3)} <br /><br className="md:hidden" />
          {ReactHtmlParser(content.Header.AboutMeDescription.p4)} <br /><br className="md:hidden" />
          {ReactHtmlParser(content.Header.AboutMeDescription.p5)}
        </p>
      </div>

      <p className="bg-black md:hidden">‌‌  </p>

    </div>
  )
}

export default Header;
