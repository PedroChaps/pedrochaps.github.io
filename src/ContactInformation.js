import React from 'react'

import githubIcon from './static/icons/contactMe/github_icon.svg';
import mailIcon from './static/icons/contactMe/mail_icon.svg';
import linkedinIcon from './static/icons/contactMe/linkedin_icon.svg';
import discordIcon from './static/icons/contactMe/discord_icon2.svg';

import ReactHtmlParser from 'react-html-parser';

function Content({ content }) {
  return (
    <div className="z-[45] text-red-500 relative pt-[200vh] pb-[5vh]">

      <div id="ContactInformation" className="text-black m-5 md:m-20 rounded-3xl backdrop-filter backdrop-blur-2xl bg-white/20 text-center">
        
        <h2 className="text-5xl text-center p-5 font-semibold">{ReactHtmlParser(content.ContactMe.Title)}</h2>
        <div className="text-lg text-center md:text-left m-5 pb-5">
        {ReactHtmlParser(content.ContactMe.pt1)} <br className="md:hidden"/>
          
        {ReactHtmlParser(content.ContactMe.pt2NotAvailable1)} <span className="text-red-500">{ReactHtmlParser(content.ContactMe.pt2NotAvailable2)}</span> {ReactHtmlParser(content.ContactMe.pt2NotAvailable3)} <br className="md:hidden"/>
          {/* {ReactHtmlParser(content.ContactMe.pt2Available1)} <span className="text-green-600">{ReactHtmlParser(content.ContactMe.pt2Available2)}</span> <span className="hidden">{ReactHtmlParser(content.ContactMe.pt2Available3)}</span> {ReactHtmlParser(content.ContactMe.pt2Available4)} <br className="md:hidden"/> */}
          {ReactHtmlParser(content.ContactMe.pt3)} <br/>
          <div className="flex flex-wrap justify-around items-center m-5 mt-10 gap-5 md:gap-0">

            <div className="text-justify">

              <a className="underline hover:font-bold" href="mailto:pedro.chaparro@tecnico.ulisboa.pt"> 
              <img src={mailIcon} alt="e-mail" title="e-mail" width={65} height={50} className="block m-auto pb-2" />
                <p>pedro.chaparro@tecnico.ulisboa.pt</p></a>
            </div>
            
            <div className="text-justify">

              <a className="underline hover:font-bold" href="https://www.linkedin.com/in/pedro-chaparro/"> 
              <img src={linkedinIcon} alt="LinkedIn" title="LinkedIn" width={50} height={50} className="block m-auto pb-2" />
                <p>Pedro Chaparro</p></a>
            </div>
            
            <div className="text-justify">

              <a className="underline hover:font-bold" href="https://github.com/PedroChaps"> 
              <img src={githubIcon} alt="GitHub" title="GitHub" width={50} height={50} className="block m-auto pb-2" />
                <p>PedroChaps</p></a>
            </div>
            
            <div className="text-justify">

              <p> 
              <img src={discordIcon} alt="Discord" title="Discord" width={50} height={50} className="block m-auto pb-2" />
                <p>PedroChaps#3703</p></p>
            </div>

          </div>

          <hr className='m-16 border-black'/>
          
          <p>{ReactHtmlParser(content.ContactMe.pt4)} <br/>
          {ReactHtmlParser(content.ContactMe.pt5)} <a className="underline hover:font-bold" href="https://github.com/PedroChaps/pedrochaps.github.io">{ReactHtmlParser(content.ContactMe.pt6)}</a>.</p> <br/>
          
          <p>{ReactHtmlParser(content.ContactMe.pt7)}</p> 
          
          <hr className='m-16 border-black'/>
          
          <p className="text-center"> {ReactHtmlParser(content.ContactMe.pt8)} </p>
          <p className="text-center"> {ReactHtmlParser(content.ContactMe.pt9)} </p>
        </div>
      </div>

      
      
  </div>
  )
}

export default Content