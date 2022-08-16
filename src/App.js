import DocumentMeta from 'react-document-meta';
import Header from './Header';
import ContactInformation from './ContactInformation';
import Navbar from './Navbar'
import GeneralExperience from './GeneralExperience';
import ContactMeAnimation from './ContactMeAnimation';
import CareerAndEducation from './CareerAndEducation';
import HobbiesAndAchievements from './HobbiesAndAchievements.js';
import { useScrollPercentage } from 'react-scroll-percentage';

function App() {
  
  const meta = {
    title: 'Pedro Chaparro',
    description: 'Pedro Chaparro\'s personal website',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags',
            viewport: 'width=device-width, initial-scale=1',
            
        }
    }
  }  
  
  const [scrollRef, scrollPercentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0
  });
  
  return (
    <div ref={scrollRef} className="h-auto bg-black">
      <DocumentMeta {...meta} />
      <Header scrollPercentage={scrollPercentage}/>
      <Navbar current={"0"}/>
      <GeneralExperience scrollPercentage={scrollPercentage} />
      <CareerAndEducation scrollPercentage={scrollPercentage} />
      <HobbiesAndAchievements scrollPercentage={scrollPercentage} />
      <ContactMeAnimation/>
      <ContactInformation/>
      {/* <Canvas></Canvas>
      <Canvas></Canvas>
      <Canvas></Canvas>
      <Canvas></Canvas>
      <Footer> -> Versão do website, repo do github / source code, "Made with Love", */}
    </div>
  );
}
export default App;
