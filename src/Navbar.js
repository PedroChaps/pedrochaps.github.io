import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faWrench, faBriefcase, faSchool, faMedal, faPhone } from '@fortawesome/free-solid-svg-icons';

function Navbar(props) {
  
  const [current, setcurrent] = useState(props.current);
  
  const outsideBoxStyle = "uppercase p-[0.125rem] bg-red-900/40 font-bold transition-all duration-300 hover:text-terciary hover:tracking-[0.175rem] hover:bg-terciary hover:shadow-[0_0_35px_rgba(255,0,0,0.5)] hover:cursor-pointer"
  const insideBoxStyle = "pr-4 pl-4 pt-1 pb-1 bg-primary"
  return (
    <>
      <div className="sticky top-0 w-screen border-b-red-600 border-b-2 h-16 m-0 p-0 min-h-fit max-h-24 flex flex-row bg-primary text-white justify-evenly items-center shadow-[0_3px_15px_rgba(255,0,0,0.5)]">
          
          <div id="0" className={ outsideBoxStyle }>
            <div className= {insideBoxStyle}> 
                Home&nbsp;<FontAwesomeIcon icon={faHouseChimney}/>
            </div>
          </div>
          
          <div id="1" className={ outsideBoxStyle }>
            <div className={insideBoxStyle}> 
            General Experience&nbsp; <FontAwesomeIcon icon={faWrench}/>
            </div>
          </div>
          
          <div id="2" className={ outsideBoxStyle }>
            <div className={insideBoxStyle}> 
            Career Experience&nbsp; <FontAwesomeIcon icon={faBriefcase} />
            </div>
          </div>
          
          <div id="3" className={ outsideBoxStyle }>
            <div className={insideBoxStyle}> 
            Education&nbsp; <FontAwesomeIcon icon={faSchool} /> 
            </div>
          </div>
          
          <div id="4" className={ outsideBoxStyle }>
            <div className={insideBoxStyle}> 
            Hobbies & Achievements &nbsp;<FontAwesomeIcon icon={faMedal} /> 
            </div>
          </div>
          
          <div id="5" className={ outsideBoxStyle }>
            <div className={insideBoxStyle}> 
            Get in touch&nbsp; <FontAwesomeIcon icon={faPhone} />  
            </div>
          </div>
          
          {/* <div id="1" className="self-center">General Experience</div>
          <div id="2">Career Experience</div>
          <div id="3">Education</div>
          <div id="4">Hobbies & Achievments</div>
          <div id="5">Get in touch</div> */}
      
      </div>
      

    </>
  )
}

export default Navbar

// State que quero (falta as linhas a voar em 3d): <div className="p-[0.125rem] bg-red-900/40 font-bold transition-all duration-300 hover:text-terciary hover:tracking-[0.25rem] hover:bg-terciary hover:shadow-[0_0_35px_rgba(255,0,0,0.5)]">