import React from 'react'

import githubIcon from './static/icons/github_icon.svg';
import mailIcon from './static/icons/mail_icon.svg';
import linkedinIcon from './static/icons/linkedin_icon.svg';

function Content() {
  return (
    <div className="z-50 text-red-500 relative">

      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="text-almostWhite m-5 md:m-20 rounded-3xl backdrop-filter backdrop-blur-2xl bg-white/20 text-center">
        
        <h2 className="text-5xl text-center p-5 font-semibold">Get in touch</h2>
        <div className="text-lg text-left m-5 pb-5">
          If you liked what you saw and want to say hi or ask a question, you can reach out to me in the following places: <br/>
          <div className="flex flex-wrap justify-evenly m-5 mt-5">

            <div className="text-justify">

              <a className="underline hover:font-bold" href="mailto:pedro.chaparro@tecnico.ulisboa.pt"> 
              <img src={mailIcon} alt="e-mail" title="e-mail" width={50} height={50} className="block m-auto pb-2" />
                <p>pedro.chaparro@tecnico.ulisboa.pt</p></a>
            </div>
            <div> Linkedin </div>
            <div> Github </div>


          </div>

          
          The source code of this website is ...
          
          I have also written a README aimed for people ...
          
          The README is in the repository linked above
        </div>
      </div>

      <div className="h-[50vh]">a</div>
      
  </div>
  )
}

export default Content