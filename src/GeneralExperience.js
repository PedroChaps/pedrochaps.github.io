import React, { useState, Suspense } from 'react'
import { Canvas } from "@react-three/fiber";

import { Stars, OrthographicCamera } from '@react-three/drei';


import Mercury from './Mercury';
import Venus from './Venus';
import Moon from './Moon';

import pythonLogo from './static/icons/programming/python_icon.svg';
import cLogo from './static/icons/programming/c_icon.svg';
import djangoLogo from './static/icons/programming/django_icon.svg';
import flaskLogo from './static/icons/programming/flask_icon.svg';
import javaLogo from './static/icons/programming/java_icon.svg';
import jsLogo from './static/icons/programming/javascript_icon.svg';
import pgsqlLogo from './static/icons/programming/pgsql_icon.svg';
import reactLogo from './static/icons/programming/react_icon.svg';
import tailwindLogo from './static/icons/programming/tailwind_icon.svg';
import threeJsLogo from './static/icons/programming/threejs_icon.svg';
import bootstrapLogo from './static/icons/programming/bootstrap_icon.svg';

import alcatelLogo from './static/icons/otherSkills/alcatel_icon.svg';
import ciscoLogo from './static/icons/otherSkills/cisco_icon.svg';
import juniperLogo from './static/icons/otherSkills/juniper-networks_icon.svg';
import premiereLogo from './static/icons/otherSkills/premiere-cc_icon.svg';
import cryptohackLogo from './static/icons/otherSkills/cryptohack_logo.jpg';
import gimpLogo from './static/icons/otherSkills/gimp_icon.svg';



function GeneralExperience( {scrollPercentage} ) {
      
    const [clicked1, setClicked1] = useState(true);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    
    const chosenStyle = "col-span-1  text-4xl md:text-5xl text-center p-5 font-semibold text-black underline hover:cursor-pointer"
    const notChosenStyle = "col-span-1 text-4xl md:text-5xl text-center p-5 font-semibold hover:text-black hover:cursor-pointer"
    
    function handleClick1() {
        if (!clicked1) {
            setClicked1(true);
            setClicked2(false);
            setClicked3(false);
        }
        else 
            setClicked1(false);
    }
    
    function handleClick2() {
        if (!clicked2) {
            setClicked1(false);
            setClicked2(true);
            setClicked3(false);
        }
        else
            setClicked2(false);
    }
    
    function handleClick3() {
        if (!clicked3) {
            setClicked1(false);
            setClicked2(false);
            setClicked3(true);
        }
        else
            setClicked3(false);
    }
    
    return (
        <div id="GeneralExperience" className="relative">

            <div className=" text-white z-[1] bg-transparent">
                <h1 id="GeneralExperience" className="left-[0%] right-[0%] absolute z-[1] -top-10 md:top-10 pt-10 md:pt-0 m-6 md:m-0 text-3xl md:text-7xl font-black tracking-wide  text-almostWhite text-center md:text-right md:mr-20 md:mt-12">
                    General Experience
                </h1>
                <h2 className="absolute z-[1] left-[0%] right-[0%] md:top-32 pt-10 md:pt-0 m-6 md:m-0 text-lg md:text-3xl font-black tracking-wide  text-almostWhite text-center md:text-right md:mr-20 md:mt-12"> Have a look at the skills I have and the tools I use </h2>
                <h3 onClick={e => { setClicked1(false); setClicked2(false); setClicked3(false) }} className="absolute z-[1] top-48 md:top-52 left-[0%] right-[0%] md:right-4 md:pt-0 md:m-0 font-black tracking-wide  hover:text-slate-600 text-center md:text-right md:mr-20 md:mt-10 text-red-700 hover:cursor-pointer">Play with the background</h3>

                <div className="absolute z-[1] top-48 text-almostWhite m-5 md:m-20 rounded-3xl left-[0%] right-[0%] backdrop-filter backdrop-blur-lg bg-white/20 text-center center">

                    <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 justfiy-evenly items-center">
                        <div onClick={() => handleClick1()} className={clicked1 ? chosenStyle : notChosenStyle}>Programming</div>
                        <div onClick={() => handleClick2()} className={clicked2 ? chosenStyle + " md:border-l-[1px] md:border-r-[1px]" : notChosenStyle + " md:border-l-[1px] md:border-r-[1px]"}>Soft Skills</div>
                        <div onClick={() => handleClick3()} className={clicked3 ? chosenStyle : notChosenStyle}>Other Skills</div>
                    </div>
                    <div className={clicked1 ? "text-lg text-left m-5 pb-5" : "hidden"}>

                        <div className="flex flex-wrap justify-evenly" name="My Stack">
                            <img src={pythonLogo} alt="Python" title="Python" width={50} height={50} className="inline " />
                            <img src={cLogo} alt="C" title="C" width={50} height={50} className="inline" />
                            <img src={javaLogo} alt="Java" title="Java" width={50} height={50} className="inline" />
                            <img src={pgsqlLogo} alt="Pgsql" title="PgSql" width={50} height={50} className="inline" />
                            <img src={jsLogo} alt="Js" title="Js" width={50} height={50} className="inline " />
                            <div className="md:border-l-[1px] md:border-r-[1px]"></div>
                            <img src={djangoLogo} alt="Django" title="Django" width={50} height={50} className="hidden md:inline" />
                            <img src={bootstrapLogo} alt="Bootstrap" title="Bootstrap" width={50} height={50} className="hidden md:inline" />
                            <img src={flaskLogo} alt="Flask" title="Flask" width={50} height={50} className="hidden md:inline" />
                            <img src={reactLogo} alt="React" title="React" width={80} height={80} className="hidden md:inline" />
                            <img src={tailwindLogo} alt="Tailwind" title="Tailwind" width={50} height={50} className="hidden md:inline" />
                            <img src={threeJsLogo} alt="ThreeJs" title="ThreeJs" width={50} height={50} className="hidden md:inline" />
                        </div>
                        
                        <hr className="m-9 md:hidden"/>
                        <div className="flex flex-wrap justify-evenly md:hidden" name="My Stack">
                            
                            <img src={djangoLogo} alt="Django" title="Django" width={50} height={50} className="inline" />
                            <img src={bootstrapLogo} alt="Bootstrap" title="Bootstrap" width={50} height={50} className="inline" />
                            <img src={flaskLogo} alt="Flask" title="Flask" width={50} height={50} className="inline" />
                            <img src={reactLogo} alt="React" title="React" width={80} height={80} className="inline" />
                            <img src={tailwindLogo} alt="Tailwind" title="Tailwind" width={50} height={50} className="inline" />
                            <img src={threeJsLogo} alt="ThreeJs" title="ThreeJs" width={50} height={50} className="inline" />
                        </div>
                        
                        <br />
                        <hr className="md:hidden"/>
                        
                        <br /><br />

                        <div className="pl-4 text-center md:text-left">
                            <div className="md:flex items-start gap-4">
                                <img src={pythonLogo} alt="logo" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>Python</b> - it's by far the language I'm more confortable with. <br />I've started programming with Python since the start of my university course and I've used it on a daily basis. <br />I've made a total of 4 subject's projects as well as an external project where I taught myself <b className="text-green-400">DjangO</b> and <b className="text-purple-400">Bootstrap</b>. Besides that, I use Python for everything related to CyberSecurity and general scripting.</p>
                            </div>
                            <div className="md:flex items-start gap-4 m-4 md:m-0">
                                <img src={cLogo} alt="logo" width={50} height={50} className="hidden md:inline md:invisible ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <a className="underline hover:font-bold" href="https://github.com/PedroChaps/FP-Project-1">Tic-Tac-Toe (19.3v/20v)</a> <br/>
                                <a className="underline hover:font-bold" href="https://github.com/PedroChaps/FP-Project-2">Nine men's morris (18.7v/20v)</a> <br/>
                                <p><a className="underline hover:font-bold" href="https://github.com/PedroChaps/DB-project">Vending Machines' Manager (18.2v/20v)</a> <a className="underline hover:font-bold" href="http://web2.ist.utl.pt/ist199298/projetoBD-2021_2022-Entrega3.cgi/">(website)</a></p>
                                <a className="underline hover:font-bold" href="https://github.com/PedroChaps/AI-project">Search Algorithms in AI (18.7v/20v)</a> <br/>
                            </div>
                            

                            <div className="md:flex items-start gap-4">
                                <img src={cLogo} alt="logo" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>C</b> - I also started coding with C early in my course. <br />I was able to understand better how high-level languages work "behind the scenes" as well as multi-threading with mutexes. <br />I've had 3 subject's projects based on the C language. </p>
                            </div>
                            <div className="md:flex items-start gap-4 m-4 md:m-0">
                                <img src={cLogo} alt="logo" width={50} height={50} className="hidden md:inline md:invisible ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <a className="underline hover:font-bold" href="https://github.com/PedroChaps/IAED-Project-1">Kanban Board (20v/20v)</a> <br/>
                                <a className="underline hover:font-bold" href="https://github.com/PedroChaps/IAED-Project-2">simple File System (19.3v/20v)</a> <br/>
                                <a className="underline hover:font-bold" href="https://github.com/PedroChaps/OS-project">complex File System (19v/20v)</a> <br/>
                            </div>

                            <div className="md:flex items-start gap-4">
                                <img src={javaLogo} alt="logo" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>Java</b> - I learned Java one year into the course. I really like the idea of Object-Oriented Programming and the fact that Java uses a virtual machine which means it can be run (almost) everywhere!<br /> I also learned about design patterns and made a project for the class.</p>
                            </div>
                            <div className="md:flex items-start gap-4 m-4 md:m-0">
                                <img src={pgsqlLogo} alt="logo" width={50} height={50} className="hidden md:inline md:invisible ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <a className="underline hover:font-bold" href="https://github.com/PedroChaps/OOP-project">Warehouse's Manager (16.7v/20v)</a> <br/>
                            </div>

                            <div className="md:flex items-start gap-4">
                                <img src={pgsqlLogo} alt="logo" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>PgSQL</b> - On the end of the second year, I learned about PgSQL and relational databases in general. <br /> I had a semester-long project that went from designing an app in ER-models to creating a web app using <b className="text-black">Flask</b> (with Python) to interact with the database.
                                </p>
                            </div>
                            <div className="md:flex items-start gap-4 m-4 md:m-0">
                                <img src={javaLogo} alt="logo" width={50} height={50} className="hidden md:inline md:invisible ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p><a className="underline hover:font-bold" href="https://github.com/PedroChaps/DB-project">Vending Machines' Manager (18.2v/20v)</a> <a className="underline hover:font-bold" href="http://web2.ist.utl.pt/ist199298/projetoBD-2021_2022-Entrega3.cgi/">(website)</a></p>
                            </div>

                            <div className="md:flex items-start gap-4">
                                <img src={jsLogo} alt="logo" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>Javascript</b> - I decided to teach myself Javascript because I had always wanted to create a website. From what I gathered, it's a powerful scripting tool like Python but more used for web interaction with HTML and CSS, using frameworks or just vanilla Javascript.<br />
                                    Since I was in a "learning new stuff" mood, besides Javascript, I also learned about <b className="text-cyan-500">React</b>, <b className="text-cyan-600">Tailwind</b> and <b>Three.js</b> which joined together made this website possible! :D
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className={clicked2 ? "text-lg text-left m-5 pb-5" : "hidden"}>

                        <br /><br />

                        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-10 text-center md:text-justify">

                            <p className=""> <b>Learn new stuff </b> - As I mentioned in my Bio, I consider myself a person who likes to learn a bit from everything. So, I'm not afraid to face new challenges and to look for new things to learn, as long as the road is interesting. <br /> An example of this is this website. Even though I had basically 0 experience with web applications, I had always found amazing some of the websites people have created and so I wanted to have one for myself; That made me learn many new stuff!
                            </p>

                            <p className=""> <b> Help others </b> - I also really enjoy helping other people, the feeling of grattitude or the "Eureka moment" people have really means a lot. <br/> For instance, I've helped fellow coursemates with questions they had and I've contributed for my <a className="underline hover:font-bold" href="https://resumos.leic.pt/">course's community summary</a> of all the subjects. Besides that, I've also <a className="underline hover:font-bold" href="https://www.notion.so/pedro-chaps/MY-FITNESS-JOURNEY-5e3eb18b413d4931a63725ba6cabd296">posted my weight loss project</a> as a way to inspire others to achieve their goals.
                            </p>

                            <p className=""> <b> Organization & Time management </b> - I'm a really organized person. I like taking notes of all the important information so I can better focus on a task without losing track of what I did and what I need to do. I also write down lists of To-Dos and Diagrams in order become better organized.
                            You can have a look at the <a className="underline hover:font-bold" href="https://pedro-chaps.notion.site/fazer-website-no-GitHub-3a5ee3f6cff2424784d4042c2617bb54">Roadmap</a> I made to create this website.  <br/>
                            Besides notes, I'm all about Calendars and Reminders! I like registering every task so I don't miss any and I like to be as efficient as possible with my time so I don't get overloaded. <br/>
                            For instance, I prefer to start (and finish) university projects as soon as possible.
                            </p>

                            <p className=""> <b> Strong communication & collaboration </b> - I consider myself communicative and a 1worker. If I'm discussing something with others, I always have in attention what they're saying and if I'm explaining something, I give every effort to make everyone clearly understand what I'm transmitting. <br/> To take an example, I've given math tutoring classes to many high school students.
                            </p>

                            <p className=""> <b> Hard worker </b> - I am also a hard worker and a dedicated person who gives his maximum.<br/> I always try my best to find the best solution for a given problem and if I start falling behind, I will study hard to get up on my feet. <br/> For instance, as of today (2022-08-03) I am in the top 8 of a class of ~140 people.
                            </p>

                            <p className=""> <b> Creative </b> - I think that I am a very creative person. When someone talks to me about a problem, I start thinking of multiple solutions right away, some more intersting, others more radical and one or two out of the box. When I get my ideias, I try to explore them and build on top of them, getting even more ideas!  
                            </p>
                        </div>

                    </div>

                    <div className={clicked3 ? "text-lg text-left m-5 pb-5" : "hidden"}>

                        <div className="flex flex-wrap justify-evenly" name="My Stack">
                            <img src={alcatelLogo} alt="Alcatel" title="Alcatel" width={100} height={100} className="inline" />
                            <img src={ciscoLogo} alt="Cisco" title="Cisco" width={100} height={100} className="inline" />
                            <img src={juniperLogo} alt="Juniper" title="Juniper" width={100} height={50} className="inline" />
                            <div className="md:border-l-[1px] md:border-r-[1px]"></div>
                            <img src={cryptohackLogo} alt="Cryptohack" title="Gimp" width={75} height={50} className="hidden md:inline" />
                            <img src={gimpLogo} alt="Gimp" title="Gimp" width={100} height={50} className="hidden md:inline" />

                            <img src={premiereLogo} alt="Premiere Pro CC" title="Premiere Pro CC" width={50} height={50} className="hidden md:inline " />
                        </div>
                        
                        <hr className="m-9 md:hidden"/>
                        <div className="flex flex-wrap justify-evenly md:hidden">
                            
                        <img src={cryptohackLogo} alt="Cryptohack" title="Cryptohack" width={75} height={50} className="inline" />
                            <img src={gimpLogo} alt="Gimp" title="Gimp" width={100} height={50} className="inline" />
                            <img src={premiereLogo} alt="Premiere Pro CC" title="Premiere Pro CC" width={50} height={50} className="inline " />
                        </div>

                        <br />
                        <hr className="md:hidden"/>
                        
                        <br /><br />

                        
                        {/* <div className="md:flex items-start gap-4">
                                <img src={pythonLogo} alt="logo" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>Python</b> - it's by far the language I'm more confortable with. <br />I've started programming with Python since the start of my university course and I've used it on a daily basis. <br />I've made a total of 4 subject's projects as well as an external project where I teached myself <b className="text-green-400">Django</b> and <b className="text-purple-400">Bootstrap</b>. Besides that, I use Python for everything related to CyberSecurity and general scripting.</p>
                            </div><br /> */}
                        
                        {/* <div className="flex flex-wrap justify-evenly items-start "></div> */}
                        {/* <div className="pl-4 text-center md:text-left">
                                <div className="md:flex items-start gap-4"> */}
                        <div className="pl-4 text-center md:text-left">

                            <div className="flex items-start flex-wrap md:flex-nowrap justify-evenly md:gap-4">
                                <img src={alcatelLogo} alt="logo" width={100} height={100} className="" />
                                <div></div>
                                <img src={ciscoLogo} alt="logo" width={100} height={100} className="" />
                                <div></div>
                                <img src={juniperLogo} alt="logo" width={100} height={100} className="" />
                                <p className=""> <b>Networking / SysAdmin </b> - Since I started a Research Investigator role in my university, I gained experience as a Systems Administrator. I have experience with networking equipment, like switches (from Juniper and Alcatel) and access points (from Cisco).
                                    I've already configured, installed and maintained equipments like those.
                                    Besides that, I also created scripts that help monitor the network and manage the equipments more efficiently.
                                </p>
                            </div><br />

                            <div className="md:flex items-start gap-4">
                                <img src={cryptohackLogo} alt="logo" width={50} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <div></div>
                                <p className=""> <b> Cryptography </b> - One of my specializations in the CTFs I play is Cryptography. I've learned about Symmetric Ciphers, RSA, Diffie-Hellman, Elliptic Curves, etc. . <br />As of today (2022-08-02), I am the portuguese top 5 in the <a className="underline hover:font-bold" href="https://cryptohack.org/scoreboard/">CryptoHack</a> website, one of the best platforms where you can learn about all kinds of cryptography in a gamified way.
                                </p>
                            </div><br />

                            <div className="md:flex items-start gap-4">
                                <img src={gimpLogo} alt="logo" width={67} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>Photo Editing</b> - Since I was young, I started using GIMP to do image manipulation as a hobby in a funny manner.
                                </p>
                            </div><br />

                            <div className="md:flex items-start gap-4">
                                <img src={premiereLogo} alt="logo" width={67} height={50} className="ml-auto mr-auto pb-5 md:pb-0 md:ml-0 md:mr-0" />
                                <p className=""> <b>Video Editing</b> - When I first started learning image editing, I also learned how to do video editing through Premiere Pro CC as a funny hobby. This skill was already useful in school and university projects.

                                </p>
                            </div><br />

                        </div>


                    </div>
                    
                </div>
                
                
                
            </div>
            
            
            <div className="h-[201rem] md:h-[75rem]"> 
            <Suspense fallback={<div> I am Loading... </div>}>
                <Canvas camera={{ fov: 75, near: 0.1, far: 1000}} style={{ background: "black", top: "0", zIndex: "0"}}>{/*TODO: add position: [0,0,0], */}
                    <OrthographicCamera/>
                    {/* <OrbitControls/> */}
                    <Stars radius={100} depth={100} />
                    <ambientLight intensity={0.05} color={"0xffffff"} />
                    <directionalLight intensity={1} color={0xffffff} position={[2, 2, 1]} />
                    <Suspense fallback={null}>
                        <Mercury scrollPerc={scrollPercentage} />
                    </Suspense>
                    <Suspense fallback={null}>
                        <Venus scrollPerc={scrollPercentage} />
                    </Suspense>
                    <Suspense fallback={null}>
                        <Moon scrollPerc={scrollPercentage} />
                    </Suspense>
                </Canvas>
            </Suspense>
            </div>
            
        </div>
    
    // <div className="bg-black bg-cover text-white ">
    //     <p> a </p> 
    //     <h1 className=" pt-10 md:pt-0 m-6 md:m-0 text-3xl md:text-7xl font-black tracking-wide  text-almostWhite text-center md:text-left md:ml-20 md:mt-28">
    //         General Experience
    //     </h1>
    //     <h2> Have a look at the skills I have and the tools I use </h2> 
        
    //     <div>
            
            
    //     </div>
        
        
    // </div>
  )
}

export default GeneralExperience


/* 
General Experience

    Have a look at the skills I have and the tools I use

    
    
        Programming Languages
        
            Python
                
                Flask (Link website da uni & source code)
                Django (Link repo candidatura RNL, criar um novo porque aquele tem info que pode dar expose)
                Link repos projetos (se existirem, se não meter os projetos em repos) - 2 FP, 1 IA
                MUITO cibersec
                "
                    Python is the language I use the most and have the most experience.
                    I've had two subjects on which I was taught python and needed to use the language for projects.
                "
            
            C
                General C
                Mutexes
                Link repos projetos (se existirem, se não meter os projetos em repos) - 2 IAED, 1 SO   
            
            Java
                Taught in a OOP view, where I also learned about Design Patterns
                Link repos projetos (se existirem, se não meter os projetos em repos) - 1 PO
              
            Bootstrap    
                
            PGsql
                As part of the Databases subject, I learned about PGsql and the relational database model in general.
                
                Meter projeto BD
            
            Javascript & React & Tailwind
            
                Using this three tools, I made this website. 
            
            
        
        Soft Skills
        
            learning new stuff (exemplo deste website, "why not?")
            help others (like helping fellow classmates, I've already contributed to the course "resumos (em ingles)" website, wrote a README taht explains in detail how I created this website)
            hard worker (top X do curso, média X)
            
            "Forte capacidade de comunicação e colaboração"
            "Inglês"
            
            "
                As I mentioned in my bio, I like to learn... .
                Besides that, I also believe...
            "
        
        
        Other Skills
        
            GIMP
                I know how to do image manipulation using GIMP.
            
            Adobe Premier Pro
                I've also learned how to do video editing using Adobe Premier Pro.

            Networking
                I have experience with networking equipment, like switches (from Juniper and Alcatel) and access points (from Cisco).
                I've already configured, installed and maintained equipments like those.

*/