import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Typewriter from "typewriter-effect";

function Header() {
  
  const [myName, setMyName] = useState("");
  const finalName = "Pedro Chaps";
  

  
  return (
    <div className="flex items-start min-h-[80vh]">
      <img className="self-start" src="https://media-exp1.licdn.com/dms/image/C4D03AQGZsQosLsCbmw/profile-displayphoto-shrink_800_800/0/1640011070913?e=1664409600&v=beta&t=3aTV64yyfkdlHlmeT-D_TU_Tn8k3oAE8eZBVBBglP9w" className="max-w-xs h-auto"/>
      
      <Typewriter options={{cursor: "_", loop:true}} onInit={(typewriter) => {typewriter.typeString("Pedro Chaps").pauseFor(1500).deleteAll().typeString("ola :D").pauseFor(1500).start()}}/>

    </div>
  )
}

export default Header;