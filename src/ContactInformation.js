import React from 'react'

import githubIcon from './static/icons/contactMe/github_icon.svg';
import mailIcon from './static/icons/contactMe/mail_icon.svg';
import linkedinIcon from './static/icons/contactMe/linkedin_icon.svg';
import discordIcon from './static/icons/contactMe/discord_icon2.svg';

function Content() {
  return (
    <div className="z-[45] text-red-500 relative pt-[200vh] pb-[5vh]">

      <div id="ContactInformation" className="text-black m-5 md:m-20 rounded-3xl backdrop-filter backdrop-blur-2xl bg-white/20 text-center">
        
        <h2 className="text-5xl text-center p-5 font-semibold">Get in touch</h2>
        <div className="text-lg text-left m-5 pb-5">
          If you liked what you saw, want to say hi, want to ask a question or give a suggestion, don't hesitate and talk to me! <br/> 
          If you are an employer, currently I <span className="">am</span> <span className="text-red-500">not</span> looking for a job, but we can still have a conversation! <br/>
          {/* If you are an employer, currently, I <span className="text-green-600">am</span> <span className="hidden">not</span> looking for a job! So, if you are interested get in touch with me! <br/> */}
          You can reach out to me in the following places: <br/>
          <div className="flex flex-wrap justify-around items-center m-5 mt-10">

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

          <hr className='m-16'/>
          
          <p>This website is open-source! <br/>
          You can find the source code of this website <a className="underline hover:font-bold" href="https://github.com/PedroChaps/pedrochaps.github.io">here</a>.</p> <br/>
          
          <p>I have also written a guide to help others that are on the same position I was, who wanted to create a website but had no clue how to start. <br/>
          It is the README of the repository linked above.</p> <br/>
          
          <p className="text-center"> Last updated: 2022-08-15 </p>
          <p className="text-center"> Made with ❤️ by Pedro Chaparro </p>
        </div>
      </div>

      
      
  </div>
  )
}

export default Content