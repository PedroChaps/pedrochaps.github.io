import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faWrench, faBriefcase, faMedal, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function Navbar(props) {
  
  const outsideBoxStyle = "uppercase p-[0.125rem] bg-red-900/40 font-bold transition-all duration-300 hover:text-red-600 hover:tracking-[0.175rem] hover:bg-text-red-600 hover:shadow-[0_0_35px_rgba(255,0,0,0.5)] hover:cursor-pointer"
  const insideBoxStyle = "pr-4 pl-4 pt-1 pb-1 bg-primary"

  return (
    <>
      <div className="fixed bottom-0 w-[100%] md:sticky md:top-0 border-b-red-600 md:border-b-2 md:m-0 md:p-0 h-[8vh] md:h-[7vh] md:min-h-fit flex flex-row bg-black text-white justify-evenly items-center z-50">
          <div id="0" className={ outsideBoxStyle }>
            <Link to="Header" spy={true} smooth={'easeOutQuad'} duration={1500} className={insideBoxStyle}> 
                <span className="hidden md:inline-block">Home&nbsp;</span><FontAwesomeIcon icon={faHouseChimney}/>
            </Link>
          </div>
          
          <div className={ outsideBoxStyle }>
            <Link to="GeneralExperience" spy={true} smooth={'easeOutQuad'} offset={-50} duration={1500} className={insideBoxStyle}> 
            <span className="hidden md:inline-block">General Experience&nbsp;</span> <FontAwesomeIcon icon={faWrench}/>
            </Link>
          </div>
          
          <div className={ outsideBoxStyle }>
            <Link to="CareerAndEducation" spy={true} smooth={'easeOutQuad'} offset={-50} duration={1500} className={insideBoxStyle}> 
            <span className="hidden md:inline-block">Career & Education &nbsp;</span> <FontAwesomeIcon icon={faBriefcase} />
            </Link>
          </div>
          
          {/* <div className={ outsideBoxStyle }>
            <div className={insideBoxStyle}> 
            <span className="hidden md:inline-block">Education&nbsp;</span> <FontAwesomeIcon icon={faSchool} /> 
            </div>
          </div> */}
          
          <div  className={ outsideBoxStyle }>
          <Link to="HobbiesAndAchievements" spy={true} smooth={'easeOutQuad'} offset={0} duration={1500} className={insideBoxStyle}> 
            <span className="hidden md:inline-block">Hobbies & Achievements &nbsp;</span><FontAwesomeIcon icon={faMedal} /> 
            </Link>
          </div>
          
          <div  className={ outsideBoxStyle }>
            <Link to="ContactInformation" spy={true} smooth={'easeOutQuad'} offset={-200} duration={1500} className={insideBoxStyle}> 
            <span className="hidden md:inline-block">Get in touch&nbsp;</span> <FontAwesomeIcon icon={faPhone} />  
            </Link>
          </div>
          
          {/* <div id="1" className="self-center">General Experience</div>
          <div id="2">Career Experience</div>
          <div id="3">Education</div>
          <div id="4">Hobbies & Achievments</div>
          <div id="5">Get in touch</div>
          ContactInformation */}
      
      </div>
      

    </>
  )
}

export default Navbar

// State que quero (falta as linhas a voar em 3d): <div className="p-[0.125rem] bg-red-900/40 font-bold transition-all duration-300 hover:text-terciary hover:tracking-[0.25rem] hover:bg-terciary hover:shadow-[0_0_35px_rgba(255,0,0,0.5)]">