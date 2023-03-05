import React, { useState } from 'react'

import githubIcon from './static/icons/contactMe/github_icon.svg';
import mailIcon from './static/icons/contactMe/mail_icon.svg';
import linkedinIcon from './static/icons/contactMe/linkedin_icon.svg';
import discordIcon from './static/icons/contactMe/discord_icon2.svg';

import ReactHtmlParser from 'react-html-parser';



function Content({ content }) {
  
  // The unique token given to my website by Pageclip
  const PAGECLIP_PUBLICSITEKEY = 'W49q7tKuHaeH0T8hx01WgM3XOhk573CU';
  
  // A state variable to know if the submit button of the form was pressed
  const [wasClicked, setWasClicked] = useState(false);
  
  // State variables that hold the values of the form inputs
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  
  // The styles of the button, depending on if the button was clicked or not
  const normalButtonStyle = "transition-all transition-300 border-2 border-black hover:font-bold hover:bg-slate-300 focus:ring-2 focus:ring-black focus:outline-none rounded-lg p-2 m-4 outline-black text-center";
  const submittedButtonStyle = "transition-all transition-300 border-2 border-green-700 bg-green-400 font-bold ring-2 ring-green-500 rounded-lg p-2 m-4 outline-black text-center";
  
  // The text presented in the button, depending on if the button was clicked or not
  const normalText = ReactHtmlParser(content.ContactMe.pt3form6);
  const submittedText = ReactHtmlParser(content.ContactMe.pt3form7);
  
  // The function that handles the click on the submit button.
  // It changes the state of the button to let the user know that the form was submmited, it submits the form and prevents the default behavior of the form (which is submitting it and refreshing the page).
  function handleSubmit(e) {

    setWasClicked(true);
    // After some time, the button goes back to "normal"
    setTimeout(() => {
      setWasClicked(false);
    }, 5000);
    
    // The data to be sent to the server
    var data = {
      name: formName,
      email: formEmail,
      message: formMessage
    }
    
    // The API function that sends the data to the server
    window.Pageclip.send(PAGECLIP_PUBLICSITEKEY, 'default', data, function (error, response) {
      console.log('saved?', !!error, '; response:', error || response)
    })
    
    // Resets the form inputs
    setFormName("");
    setFormEmail("");
    setFormMessage("");
    
    // Prevents the default behavior of the form
    e.preventDefault();
  }
  
  return (
    <div className="z-[45] text-red-500 relative pt-[200vh]  pb-[25vh] md:pb-[5vh]">
      
      {/* The section that contains all the information, showing only a specific part depending on the clicked button */}
      <div id="ContactInformation" className="text-black m-5 md:m-20 rounded-3xl backdrop-filter backdrop-blur-2xl bg-white/20 text-center">

        {/* The title of the Component */}
        <h2 className="text-5xl text-center p-5 font-semibold">{ReactHtmlParser(content.ContactMe.Title)}</h2>

        {/* All the information of the Component */}
        <div className="text-lg text-center md:text-left m-5 pb-5">
          {ReactHtmlParser(content.ContactMe.pt1)} <br className="md:hidden" />

          {ReactHtmlParser(content.ContactMe.pt2NotAvailable1)} <span className="text-red-500">{ReactHtmlParser(content.ContactMe.pt2NotAvailable2)}</span> {ReactHtmlParser(content.ContactMe.pt2NotAvailable3)} <br className="md:hidden" />
          {/* {ReactHtmlParser(content.ContactMe.pt2Available1)} <span className="text-green-600">{ReactHtmlParser(content.ContactMe.pt2Available2)}</span> <span className="hidden">{ReactHtmlParser(content.ContactMe.pt2Available3)}</span> {ReactHtmlParser(content.ContactMe.pt2Available4)} <br className="md:hidden"/> */}
          {ReactHtmlParser(content.ContactMe.pt3)} <br />
          <div className="flex flex-wrap justify-around items-center m-5 mt-10 gap-5 md:gap-0">

            <div className="text-justify">

              <a className="underline hover:font-bold" href="mailto:pedro.chaparro@tecnico.ulisboa.pt">
                <img src={mailIcon} alt="e-mail" title="e-mail" width={65} height={50} className="block m-auto pb-2" />
                <p>pedro@chaparro.pt</p></a>
            </div>
            
            <div className="text-justify">

              <a className="underline hover:font-bold" href="https://www.linkedin.com/in/pedro-chaparro/" > 
              <img src={linkedinIcon} alt="LinkedIn" title="LinkedIn" width={50} height={50} className="block m-auto pb-2" />
                <p>Pedro Chaparro</p></a>
            </div>
            
            <div className="text-justify">

              <a className="underline hover:font-bold" href="https://github.com/PedroChaps" > 
              <img src={githubIcon} alt="GitHub" title="GitHub" width={50} height={50} className="block m-auto pb-2" />
                <p>PedroChaps</p></a>
            </div>
            
            <div className="text-justify">

              <p> 
              <img src={discordIcon} alt="Discord" title="Discord" width={50} height={50} className="block m-auto pb-2" />
                <p>PedroChaps#3703</p></p>
            </div>

          </div>

          {ReactHtmlParser(content.ContactMe.pt3form1)}
          
          {/* The Contact Form */}
          <div className="m-5">
            <form className="text-center min-w-[200px]" onSubmit={handleSubmit}>

              <div>
                <div className="md:inline-block md:w-[15%] md:mr-5 text-left">
                  <label>{ReactHtmlParser(content.ContactMe.pt3form2)}</label>
                  <div className="">
                    <input type="text" name="name" placeholder={ReactHtmlParser(content.ContactMe.pt3form5ph1)} value={formName} onChange={(e) => setFormName(e.target.value)} className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5" required />
                  </div>
                </div>

                <div className="mt-5 md:mt-0 inline-block md:w-4/12 text-left">
                  <label>{ReactHtmlParser(content.ContactMe.pt3form3pt1)} <span className="text-sm text-slate-500">{ReactHtmlParser(content.ContactMe.pt3form3pt2)}</span></label>
                  <div className="inline w-1/4">
                    <input type="email" name="email" placeholder={ReactHtmlParser(content.ContactMe.pt3form5ph2)} value={formEmail} onChange={(e) => setFormEmail(e.target.value)} className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5" />
                  </div>
                </div>

              </div>
              <div className="mt-5 text-left md:text-center">
                <label>{ReactHtmlParser(content.ContactMe.pt3form4)}</label>
                <div className="h-36">
                  <textarea type="message" name="message" rows="2" placeholder={ReactHtmlParser(content.ContactMe.pt3form5ph3)} value={formMessage} onChange={(e) => setFormMessage(e.target.value)} className="bg-gray-50 border border-gray-300 rounded-lg w-full md:w-1/2 h-full p-2.5 resize-none" required /></div>
              </div>
              {/* <!-- This button will have a loading spinner. Keep the inner span for best results. --> */}
              <button type="submit" className={wasClicked ? submittedButtonStyle : normalButtonStyle}> 
                <span>{wasClicked ? submittedText : normalText}</span>
              </button>
            </form>
          </div>

          <hr className='m-16 border-black'/>
          
          <p>{ReactHtmlParser(content.ContactMe.pt4)} <br/>
          {ReactHtmlParser(content.ContactMe.pt5)} <a className="underline hover:font-bold" href="https://github.com/PedroChaps/pedrochaps.github.io" >{ReactHtmlParser(content.ContactMe.pt6)}</a>.</p> <br/>
          
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