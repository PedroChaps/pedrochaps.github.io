import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faWrench, faBriefcase, faSchool, faMedal, faPhone } from '@fortawesome/free-solid-svg-icons';

function Navbar(props) {
  
  const [current, setcurrent] = useState(props.current);
  
  const outsideBoxStyle = "uppercase p-[0.125rem] bg-red-900/40 font-bold transition-all duration-300 hover:text-red-600 hover:tracking-[0.175rem] hover:bg-text-red-600 hover:shadow-[0_0_35px_rgba(255,0,0,0.5)] hover:cursor-pointer"
  const insideBoxStyle = "pr-4 pl-4 pt-1 pb-1 bg-primary"
  return (
    <>
      <div className="fixed bottom-0 w-[100%] md:sticky md:top-0 border-b-red-600 md:border-b-2 md:m-0 md:p-0 md:h-[7vh] md:min-h-fit flex flex-row bg-black text-white justify-evenly items-center z-50">
          <div id="0" className={ outsideBoxStyle }>
            <div className= {insideBoxStyle}> 
                <span className="hidden md:inline-block">Home&nbsp;</span><FontAwesomeIcon icon={faHouseChimney}/>
            </div>
          </div>
          
          <div id="1" className={ outsideBoxStyle }>
            <div className={insideBoxStyle}> 
            <span className="hidden md:inline-block">General Experience&nbsp;</span> <FontAwesomeIcon icon={faWrench}/>
            </div>
          </div>
          
          <div id="2" className={ outsideBoxStyle }>
            <div className={insideBoxStyle}> 
            <span className="hidden md:inline-block">Career Experience&nbsp;</span> <FontAwesomeIcon icon={faBriefcase} />
            </div>
          </div>
          
          <div id="3" className={ outsideBoxStyle }>
            <div className={insideBoxStyle}> 
            <span className="hidden md:inline-block">Education&nbsp;</span> <FontAwesomeIcon icon={faSchool} /> 
            </div>
          </div>
          
          <div id="4" className={ outsideBoxStyle }>
            <div className={insideBoxStyle}> 
            <span className="hidden md:inline-block">Hobbies & Achievements &nbsp;</span><FontAwesomeIcon icon={faMedal} /> 
            </div>
          </div>
          
          <div id="5" className={ outsideBoxStyle }>
            <div className={insideBoxStyle}> 
            <span className="hidden md:inline-block">Get in touch&nbsp;</span> <FontAwesomeIcon icon={faPhone} />  
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