import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faWrench, faBriefcase, faMedal, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function Navbar( {content} ) {
  
  // The Buttons' Styling, inspired by https://www.youtube.com/watch?v=LSNoRzojcQo
  const outsideBoxStyle = "uppercase p-[0.125rem] bg-red-900/40 font-bold transition-all duration-300 hover:text-red-600 hover:tracking-[0.175rem] hover:bg-text-red-600 hover:shadow-[0_0_35px_rgba(255,0,0,0.5)] hover:cursor-pointer"
  const insideBoxStyle = "pr-4 pl-4 pt-1 pb-1 bg-primary"

  return (
    <>
      {/* The Navbar. Clicking in buttons has a smooth scroll effect and when in a section, the corresponding button is lit up. This is achieved by using https://www.npmjs.com/package/react-scroll */}
      <div className="fixed bottom-0 w-[100%] md:sticky md:top-0 border-b-red-600 md:border-b-2 md:m-0 md:p-0 h-[8vh] md:h-[7vh] md:min-h-fit flex flex-row bg-black text-white justify-evenly items-center z-50">
        
          {/* The "Home" button */}
          <div id="0" className={ outsideBoxStyle }>
            <Link to="Header" spy={true} smooth={'easeOutQuad'} duration={1500} className={insideBoxStyle}> 
                <span className="hidden md:inline-block">{content.Navbar.Home}&nbsp;</span><FontAwesomeIcon icon={faHouseChimney}/>
            </Link>
          </div>
          
          {/* The "General Experience" button */}
          <div className={ outsideBoxStyle }>
            <Link to="GeneralExperience" spy={true} smooth={'easeOutQuad'} offset={-50} duration={1500} className={insideBoxStyle}> 
            <span className="hidden md:inline-block">{content.Navbar.GeneralExperience}&nbsp;</span> <FontAwesomeIcon icon={faWrench}/>
            </Link>
          </div>
          
          {/* The "Career & Education" button */}
          <div className={ outsideBoxStyle }>
            <Link to="CareerAndEducation" spy={true} smooth={'easeOutQuad'} offset={-50} duration={1500} className={insideBoxStyle}> 
            <span className="hidden md:inline-block">{content.Navbar.CareerAndEducation} &nbsp;</span> <FontAwesomeIcon icon={faBriefcase} />
            </Link>
          </div>
          
          {/* The "Hobbies & Achievements" button */}
          <div  className={ outsideBoxStyle }>
          <Link to="HobbiesAndAchievements" spy={true} smooth={'easeOutQuad'} offset={0} duration={1500} className={insideBoxStyle}> 
            <span className="hidden md:inline-block">{content.Navbar.HobbiesAndAchievements} &nbsp;</span><FontAwesomeIcon icon={faMedal} /> 
            </Link>
          </div>
          
          {/* The "Contact Me" button */}
          <div  className={ outsideBoxStyle }>
            <Link to="ContactInformation" spy={true} smooth={'easeOutQuad'} offset={-200} duration={1500} className={insideBoxStyle}> 
            <span className="hidden md:inline-block">{content.Navbar.GetInTouch}&nbsp;</span> <FontAwesomeIcon icon={faPhone} />  
            </Link>
          </div>
      
      </div>
      

    </>
  )
}

export default Navbar