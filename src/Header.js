import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Typewriter from "typewriter-effect";
import TypeWriterEffect from 'react-typewriter-effect';

function Header() {
  
  const [myName, setMyName] = useState("");
  const finalName = "Pedro Chaps";
  

  
  return (
    <div className="min-h-[93vh] relative bg-primary bg-[url(./static/slanted_gradient_rotated.svg)] bg-no-repeat bg-center bg-cover">

      <div className="grid gap-2 grid-cols-2 md:grid-cols-4 md:min-w-[40vh] md:min-h-[50vh]">

        <div className="col-span-1">
          {/* <h1 className="invisible text-7xl font-black tracking-wide font-AvenirPro bg-Smoke bg-clip-text text-transparent uppercase relative top-[16vh] left-[16vh]">CHAPS_</h1> */}
          <h1 className=" text-3xl md:text-7xl font-black tracking-wide bg-[url('https://thumbs.gfycat.com/MassiveFlawlessBlackbear-size_restricted.gif')] bg-clip-text text-transparent uppercase relative top-[8vh] left-[3vh] md:top-[16vh] md:left-[16vh] md:text-left">
            <Typewriter options={{ cursor: "_", loop: true, delay: "250" }} onInit={(typewriter) => {
              typewriter.typeString('Pedro<br>Chaps')
                .pauseFor(1500).deleteAll()
                .typeString("ola :D")
                .pauseFor(1500)
                .start()
            }} />
          </h1>
        </div>

        <img className="md:col-span-1 border-2 rounded-xl md:rounded-3xl border-solid shadow-[0_0_35px_rgba(0,0,0,0.5)] border-secondary md:h-auto max-h-80 md:max-h-[40vh] relative top-[4vh] right-[4vh] md:top-[8vh] md:left-[8vh]" src="https://media-exp1.licdn.com/dms/image/C4D03AQGZsQosLsCbmw/profile-displayphoto-shrink_800_800/0/1640011070913?e=1664409600&v=beta&t=3aTV64yyfkdlHlmeT-D_TU_Tn8k3oAE8eZBVBBglP9w" />

        <div className="col-span-2">
          {/* <h1 className="invisible text-7xl font-black tracking-wide font-AvenirPro bg-Smoke bg-clip-text text-transparent uppercase relative top-[16vh] left-[16vh]">CHAPS_</h1> */}
          <h1 className=" pt-10 md:pt-0 m-6 md:m-0 text-3xl md:text-7xl font-black tracking-wide  text-almostWhite bg-clip-text relative text-center md:text-right md:mr-20 md:top-[16vh]">
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
        <p className="text-lg text-left m-5 pb-5">
          Hi! My name is Pedro Chaparro and I'm from Portugal 🇵🇹.<br/><br className="md:hidden"/>
          I'm a student @ <a className="underline" href="https://tecnico.ulisboa.pt/en/">Instituto Superior Técnico</a>, taking a Computer Science and Engineering degree who aims to enroll in a Master's Degree.<br/><br className="md:hidden"/>
          I like programming in general and I'm really interested in the CyberSecurity field - I've been a finalist in two National events that lead me to European events in Prague, Czech Republic 🇨🇿, and in Vienna, Austria 🇦🇹.<br/><br className="md:hidden"/>
          I really enjoy learning new stuff and helping others. I consider myself a hard worker!<br/><br className="md:hidden"/>
          You can learn a bit more about myself by keep scrolling or clicking the buttons bellow, enjoy :D.
        </p>
      </div>
      
      <p>‌‌  </p>

      
      
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