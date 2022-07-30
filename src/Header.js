import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Typewriter from "typewriter-effect";
import TypeWriterEffect from 'react-typewriter-effect';

function Header() {
  
  const [myName, setMyName] = useState("");
  const finalName = "Pedro Chaps";
  

  
  return (
    <div className="min-h-[93vh] relative bg-primary bg-[url('https://s6.aconvert.com/convert/p3r68-cdx67/tjv9s-qlcrm.svg')] bg-no-repeat bg-center bg-cover backdrop-blur-3xl">
      
      
      
      <div className="flex items-start flex-wrap min-h-[60vh]">

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

      </div>
      
      <div className="min-h-[30vh]">
        
      </div>
      
      <div className="flex flex-wrap flex-row text-white justify-evenly items-center">
        <p>
          Get back to this page
        </p>
        <p>
          Check the skills I have and the tools I use
        </p>
        <p>
          
        </p>
        
      </div>

    </div>
  )
}

export default Header;

// https://pa1.narvii.com/7626/af774c898a7854805d1743924a5a7a7cf4a37cd4r1-434-250_hq.gif
// https://i.gifer.com/ChD.gif