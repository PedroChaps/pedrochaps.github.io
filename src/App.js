import DocumentMeta from 'react-document-meta';
import Header from './Header';
import ContactInformation from './ContactInformation';
import Navbar from './Navbar'
import GeneralExperience from './GeneralExperience';
import ContactMeAnimation from './ContactMeAnimation';
import CareerAndEducation from './CareerAndEducation';
import HobbiesAndAchievements from './HobbiesAndAchievements.js';
import { useScrollPercentage } from 'react-scroll-percentage';

import contentMultipleLanguages from './contentMultipleLanguages';
import { useState } from 'react';


function App() {
  
  // The metadata, displayed in some parts of the browser (like the Title) and used for search engines optimization (https://www.w3schools.com/tags/tag_meta.asp).
  const meta = {
    title: 'Pedro Chaparro',
    description: 'Pedro Chaparro\'s personal website',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'Pedro, Chaparro,Pedro Chaparro,react,meta,document,html,tags',
            viewport: 'width=device-width, initial-scale=1',
            author: 'Pedro Chaparro',
            description: 'Pedro Chaparro\'s personal website',
        }
    }
  }  
  
  // A reference to the scroll position of the page. Used in some animations, passed as argument to the components that need it (https://www.npmjs.com/package/react-scroll-percentage).
  const [scrollRef, scrollPercentage] = useScrollPercentage({
    threshold: 0
  });
  
  // Gets the language stored in local storage and uses it to set the content language. 
  // If it doesn't exist, defaults to 'en'.
  // The "content" variable is the content of the website in a certain language, stored in a JSON file.
  // To set the "content", the function "setContent" is passed as an argument to the "Header" component, where there is a button used to change the language.
  // (https://www.techomoro.com/how-to-create-a-simple-multi-language-website-with-react/)
  let languageLocalStorage = localStorage.getItem("language");
  const [content, setContent] = useState(languageLocalStorage ? contentMultipleLanguages[languageLocalStorage] : contentMultipleLanguages.English);
  
  // A variable `animate` that stores whether the animations should be displayed or not, because the application is resource-heavy.
  // Also stores the animation preferences of the user in local storage.
  let animateLocalStorage = localStorage.getItem("animations") === "true";
  const [animate, setAnimate] = useState(animateLocalStorage ? animateLocalStorage : true);
  
  // There is a ref on the main div, used by the useSCrollPercentage to know the scroll position on the whole website at once.
  // The scroll percentage is passed to every component that needs it.
  // The content is passed to every component in the specified language (that can be chanced in the "Header" component).
  return (
    <div ref={scrollRef} className="h-auto bg-black">
      <DocumentMeta {...meta} />
      <base target="_blank" /> {/* Opens all links in a new tab */}
      <Header scrollPercentage={scrollPercentage} animate={animate} content={content} setContent={setContent} setAnimate={setAnimate} />
      <Navbar animate={animate} content={content} />
      <GeneralExperience scrollPercentage={scrollPercentage} animate={animate} content={content}/>
      <CareerAndEducation scrollPercentage={scrollPercentage} animate={animate} content={content}/>
      <HobbiesAndAchievements scrollPercentage={scrollPercentage} animate={animate} content={content}/>
      <ContactMeAnimation animate={animate} content={content}/>
      <ContactInformation animate={animate} content={content}/>
    </div>
  );
}
export default App;
