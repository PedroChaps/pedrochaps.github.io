import { useState } from 'react';
import DocumentMeta from 'react-document-meta';
import Header from './Header';
import Content from './Content';
import Navbar from './Navbar'
import GeneralExperience from './AnimatedBg1';
import AnimatedBg1 from './AnimatedBg1';

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
  

  return (
    <div className="h-auto">
      <DocumentMeta {...meta} />
      <Header/>
      <Navbar current={"0"}/>
      <AnimatedBg1/>
      <Content/>
      {/* <Canvas></Canvas>
      <Canvas></Canvas>
      <Canvas></Canvas>
      <Canvas></Canvas>
      <ContactMe/> */}
    </div>
  );
}
export default App;



{/* <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
  <p className="text-3xl text-gray-700 font-bold mb-5">
    Olá! :D
  </p>
  <p className="text-gray-500 text-lg">
    Este website é do Pedro Chaparro hehehehehe
  </p>
</div> */}