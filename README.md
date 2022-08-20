# My website

Welcome to the README of my website! :D

I've always seen beautiful websites scattered across the internet and one of my dreams was to have my own.  

So, in the university summer break of 2022, inspired by one of my classes' project and by coursemates websites (like @diogotcorreia [website](https://diogotc.com/) and  @jjasferreira [website](https://github.com/jjasferreira/my-website)) and the beautiful websites I've seen on the web, I decided to learn Web Development and create my personal website!  

Since I had pratically 0 experience with web styling, I've documented: 
- a general / technical overview of the website, where I explain stuff like the frameworks used;
- a roadmap that I had previously created some time before starting;
- a "step-by-step" journey / timeline of what I learned, where I learned and how I used what I learned;

This way, I'll help myself by writting down everything I've done and my ideas as well as other people who intend to create a website themselves and are as lost as I was when I first started.   
I'm obviously no where near a professional, but I'll do my best to explain what I did and the decisions I took.

Here is a table of contents:  
    🚧 TODO Create table of contents https://ecotrust-canada.github.io/markdown-toc/ 🚧 


# General Overview

- The website only has Front-end.  
- The Front-end was created using [React](https://reactjs.org/) (for the layout) and [Tailwind](https://tailwindcss.com/) (for the CSS costumization). 
- The website 

## File Structure

### Outside view
![File Structure](README_static/structure-all.png)

- `build/` - Has the content that is displayed in the [website](https://chaparro.me);
- `node_modules/` - self explanatory, has the packages used by React and Node;
- `public/` - folder to put assets that are considered "public". For instance, the images that are loaded in the website should be put there (even if the website is not open-source, the visitors can see the images, therefore they are considered public);
- `README_static/` - the images used in this `README`, not part of the actual website;
- `src/` - Where the source code is located, which is different than the `build` folder (because, for instance, compression techniques (minimizing code) are used when deploying the website to a live version);  
- `.gitignore` - files and folders that are not tracked by git (and GitHub). For instance, `/node_modules` is not tracked by git and therefore is not in the [GitHub repository](https://github.com/PedroChaps/pedrochaps.github.io);  
- `babel-plugin-macros.config.js` & `babel.config.js` - Necessary because of [Dynamically importing](https://fontawesome.com/docs/web/use-with/react/add-icons) icons from [FontAwesome](https://fontawesome.com/docs/web/use-with/react/);
- `CNAME` - needed because of the custom domain. Better explained in [Section 14](#-14.-Different-Domain);
- `package-lock.json` and `package.json` - well explained [here](https://www.geeksforgeeks.org/difference-between-package-json-and-package-lock-json-files/);
- `README.md` - This file!;
- `tailwind.config.js` - Some settings the user can define for Tailwind;  

### `Src`
![Src folder Structure](README_static/structure-src.png)

- `fonts/` - holds the fonts used for this website;
- `static/` - has the images used in website (which could be placed in the public folder);   
- `*.js` - all the components used by React in the website;
- `index.css` holds some css information, like the overall font to be used as well as some packages' styles.

## Flow of Code

Since this is a React application and it was generated using `npx create-react-app`, the workspace follows the template from the script:
- The flow starts in `Index.js`, where the `App.js` component is rendered.  
- Inside `App.js`, you can see that it is divided into multiple components. I've made the division while thinking of the logical structure the website has:  
The website has a **header**, a **navigation bar**, a part that talks about my **career and education**, etc. , therefore I've created a `Header.js`, `Navbar.js`, `CareerAndEducation.js`, etc. .  
- Entering each component, you can then see the respective content.  
Some of the components only have the `html` to be displayed, while others have even more components in order to make the code easier to read, implemented in the React `jsx` way.  

# [Roadmap](https://pedro-chaps.notion.site/fazer-website-no-GitHub-3a5ee3f6cff2424784d4042c2617bb54) 

Before starting, I had already started planning the creation of the website.  
I used Notion to take notes of the steps I wanted to take, the cool ideas I had, the amazing websites I had seen, etc. in order to keep me organized and to not miss anything.  
Most of the notes are in Portuguese because at the time it was the easiest way for me to think.  
You can find the Roadmap [here](https://pedro-chaps.notion.site/fazer-website-no-GitHub-3a5ee3f6cff2424784d4042c2617bb54).

# Timeline of what I did

## 0. My background in WebDev

First, I think it is important to state what my background is in Web Development.  
Before this project, I had only done 2 other projects related to web:  

1. A web app using the Django Framework to interact with APIs.  
    Here I learned the basics of HTML and went straight to Bootstrap without giving a look to CSS, however the main focus was the app itself any not styling the website, so I didn't really learn much.
    
2. A web app using the Flask Framework to interact with a database.  
    One of my classes' project was to do many things related to a database. Since I was the only member of the group with prior experience of the group, I was in charge of the web app that was required.  
    I re-used the same principles of the first app: I used bootstrap for the design and some html "stolen" from the classes slides and, once again, the main objective was using the interaction with the database and not the style itself, so I didn't learn much about styling.
   
## 1. The Basics  

Since my knownledge was really low, I started by learning (or reviewing) the basics: HTML, CSS and JavaScript.  

However, I decided to not put much effort into it - Since I understood the ideas, had some small prior experience and was expecting to use frameworks for CSS and JavaScript, I decided that only reading about the basics would suffice, without really applying what I had learned.  

So, what I did was read the [w3Schools](https://www.w3schools.com/default.asp) guides: [HTML](https://www.w3schools.com/html/default.asp), [CSS](https://www.w3schools.com/css/default.asp) and [JavaScript](https://www.w3schools.com/js/default.asp), by that order.  

## 2. Choosing frameworks

Having read the basics, it was time to choose a framework for CSS and JavaScript.  
Although it wasn't necessary to, I decided that they would most likely help and learning a bit of everything wouldn't hurt so I forced myself to use frameworks.

### CSS - Tailwind

From the dozens that are available, I was kind of lost on which to use.  
I had already excluded Bootstrap because I wanted to learn something new and Bootstrap wasn't that customizable.  
So by googling a bit and following @jjasferreira 's idea I decided to use Tailwind.  

From what I gathered, Tailwind is highly customizable - it's like writing pure CSS but faster (and not using pre-built complex classes) - but also has some neat features, like Dark Mode, components, etc.  

### Javascript - React  

This was a though one to choose.  
I'll be honest and say that it was kind of a random choice.  
I had already seen some videos of people using three.js for 3d graphics, so I planning to use it, and since React had a "Reach Three Fiber" that is a wrapper for three.js, I decided to learn this framework.


## 3. Learn the frameworks

Having chosen the frameworks, it was time to learn them! 
This time I decided to, besides reading, see videos instead of reading about the content. I watched the following videos and read the following content (in the presented order):  

### Tailwind

- [Firebase overview](https://www.youtube.com/watch?v=pfaSUYaSgRo) - A good overview of what Tailwind is and how it works;
- [Tailwind Docs](https://tailwindcss.com/docs/installation) - After choosing Tailwind, this was my main way of learning Tailwind, because the Docs are very well written, with good examples!  
I've given a quick read and while coding I would also check the documentation often; 

### React

- [An introduction to React](https://www.youtube.com/watch?v=hQAHSlTtcmY&list=WL&index=46) - It explains well what React is and how to use it, some of it's hooks and how to start a project with it;
- [React Docs](https://reactjs.org/docs/getting-started.html) - In the same way as Tailwind's, React's documentation is also very good and the resources they suggest are interesting too; 
- [W3Schools React Tutorial](https://www.w3schools.com/REACT/DEFAULT.ASP) - Like Html, CSS and Javascript, React was really well explained here. I prefered reading this tutorial than the oficial Docs;

### React-Three-Fiber

Later into the development of the website, I started using React-Three-Fiber because of 3D graphics. To learn it, I've read: 

- [Firebase introduction](https://www.youtube.com/watch?v=Q7AOvWpIVHU) - this video really got me thrilled to use THREE.js;
- [THREE.js Docs](https://threejs.org/docs/) - The documentation is also very good and explains the overall idea behind THREE.js;
- [THREE.js Examples](https://threejs.org/examples/#webgl_animation_keyframes) - besides documentation, the website also includes many examples from which you can learn how they were implemented by reading the source code;
- [An introdution to R3F](https://www.youtube.com/watch?v=9ZEjSxDRIik&t=1s) - Since I'm using React, it includes a wrapper around THREE.js, React-Three-Fiber. This video was the first I watched on R3F and helped me connect both concepts;
- [R3F Docs](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) - I'm not really a fan of this documentation - I found it hard to follow (maybe because I had no prior experience with React / THREE.js) and it didn't detail every available feature, instead it mentioned how to "translate" some parts of THREE.js into R3F (being more fluent in THREE.js would certainly have helped me);
- ["translating" THREE.js to R3F](https://www.youtube.com/watch?v=wxvSHOrBHbw&t=1205s) - This video explained quite well how to translate some parts of THREE.js to R3F;
- [R3F examples](https://docs.pmnd.rs/react-three-fiber/getting-started/examples) - Since I got a bit lost in the Docs, I decided it would be better to look at examples, like the ones listed in the Docs page as well as others in the [drei](https://github.com/pmndrs/drei)'s page;

## 4. Sketch Ideas

I started sketching some basic ideias of the layout of the website - This is an important step in the making, because it makes your ideas clearer and if it really complete, you basically just have to "match" the design with what you've drawn. Here are the pictures of what I drew:

![sketch 1](README_static/sketch-1.jpg)
![sketch 2](README_static/sketch-2.jpg)
![sketch 3](README_static/sketch-3.jpg)
![sketch 4](README_static/sketch-4.jpg)
![sketch 5](README_static/sketch-5.jpg)
![sketch 6](README_static/sketch-6.jpg)
![sketch 7](README_static/sketch-7.jpg)

## 5. Navbar  

Now having some theory and ideas set, it was time to start coding!  
I had already some ideias in mind that I had previously thought would look nice, so I started implementing them first.  
The first feature was the Navbar. I wanted a Navbar that wouldn't look like a Navbar at first but as the user scrolled, it would snap in place, staying at the top of the page - that could be accomplished with the `sticky` class from Tailwind.  
Besides an interactive Navbar, I also wanted the buttons in it to look a certain way. I had seen the following video 
🚧 TODO Meter video mas com integração no github 🚧
and I felt in love with the buttons; I had to have something similar in my website!  
So, talking inspiration from the video, the final Navbar was the following:

🚧 TODO Meter fotos da Navbar nos diferentes estados, sem o estado ativo 🚧

On mobile devices, I thought it was better to just let the Navbar stay fixed at the bottom of the page, because it's more easily clickable. So this was the result in mobile:

🚧 TODO fotos navbar tlm 🚧

## 6. Header / Home / About me  

After having the Navbar, the next step was creating the Home part , which would also be the "About me" part of the website. I had already planned to have four main components:   
1. My name written with a special effect;
2. An image of me (which was later changed to an animated avatar);
3. A small phrase that identifies me;
4. A biography of myself;  

Then the Navbar would be at the bottom of the Header, which made it look like it was part of the the Header.  
I decided to use a random background I had found that was just temporary.  
Out of the four, the most interesting one is the 1. .

### 6.1 Typewritter Effect 

I wanted to have my name written with a special effect and I had previously seen a typewritter effect on text, that is, the text appears being written slowly, one letter at a time.  
I started implementing it myself but after searching for videos that showed the effect, I stumbled upon this implementation 🚧 TODO Linkar implementação 🚧 that was exactly what I was thinking of!   
So, I decided to use it.  

## 7. Low Polly Plane  

Besides the amazing Navbar, the other feature I really wanted the website to have was a moving Low Polly Plane.  
I had seen this design in many places and I really enjoyed it.  

At first, I was planning to use a video as background, like this one:   
🚧 TODO meter video 🚧    
but as I was searching THREE.js tutorials on youtube, I stumbled upon this video:   
🚧 TODO meter video 🚧  
And it was EXACTLY what I was looking for: An animated Low Polly Plane that even had mouse interaction!  
So, I took a big inspiration from it and created a very similar version.  
Note that the implementation above uses [THREE.js](🚧 TODO 🚧) while what I did was with [React-Thee-Fiber](🚧 TODO 🚧), a React wrapper of THREE.js, which means that if look at the code I wrote, it will look very different that what is on the video.

At first, this plane was the background of the General Experience tab, but it was later moved.  
Here are some screenshots of it:
🚧 TODO meter fotos 🚧

## 8. Zoom out text
While creating the plane, an idea of zooming out from a piece of text appeared on my mind.    

I thought it would look cool at the end of the website, asking the user if he liked what he saw and then presenting the ways he can contact me (and other final information).  
The way I did it was by getting the user's current scroll position and changing the position of the text based on the scroll value (that is, the z-position of the text was a function of the scroll position).      
To generate the text inside a Canvas, I used [Drei's text](🚧 TODO 🚧).  

I then also added some lighting changes as the user continued scrolling, in order to make it even more interactive!   

This was the final result:
🚧 TODO meter fotos 🚧

## 9. Active Button & Smooth Scroll

Currently I had a Navbar and some content BUT the buttons on it didn't do anything!  
I wanted them to besides taking the user to the appropriate section, do it smoothly. I also wanted the current section's button to light up once the user enters it. 

While googling the best way to implement this, I was lucky to find this [amazing video](🚧 TODO 🚧) that uses the [🚧 TODO 🚧 package](🚧 TODO 🚧) and explains exactly what how to implement what I wanted.

The buttons started looking like this:
🚧 TODO Meter fotos 🚧 

## 10. Planet Earth
Note that up until this point I didn't really have a theme for my website.  

I just knew that I wanted an interactive Navbar with those gorgeous buttons and that I wanted a Low Polly moving Plane but at this point I didn't know what to do next: I didn't want to include random stuff  on my website just because they looked cool, I wanted it to have some meaning.  

After thinking and looking at other people's websites, I found this [interesting package](🚧 TODO 🚧) that implemented a Globe and had many interesting visualization features.  
One of the features was using HTML in the globe, like putting markers in specific coordinates.  

With that, I had an interesting idea: I could use this globe on the "Hobbies and Achivements" section and mark the countries I have visited.

Then, I had an amazing idea: 
> What if that *random* plane was actually the zoomed-in surface of earth and as the user scrolled, the plane would zoom out and the planed would appear?  

That sounded AMAZING in my head and could just well be the theme of the website - **Space**! 

I created a texture that looked like the geometry used on the plane and used it on the planet.  
Then I found [this package](🚧 TODO 🚧) that easily tells the user's current scroll position across some part or all of the document.  
As soon as the user crossed a certain threshold, the plane would start moving down and the animation of Earth would kick in, zooming out of the planet.  

Even though it's clear where the Plane and the Globe separate, I think it's fluid enough if the user is scrolling smoothly. I'm very happy with the result!  

🚧 TODO Fotos 🚧


## 11. Other planets 

Because of the previous idea I had, I needed to move the Plane to the "Career and Education" section. That mean't the "General Experience" section was currently empty.   

Since the theme (**Space**) was now defined, I thought it was nice to include the planets that come before Earth as well as the Moon flying across the plane - it would make sense theme-wise and I could play a bit with the animations.     

So, I added Mercury, Venus and the Moon and some reaction to the scroll movement:
- Mercury and Venus rotate as the user scrolls;
- The Moon rotates and moves across the plane, as if it was orbiting Earth. 

This was nothing special comparing to the Plane or the Globe, just three R3F meshes of which the rotation/position depends on the scroll percentage of the website.

This reaction makes the website a bit more interactive, which is always welcome!

It ended up looking like this:  
🚧 TODO fotos dos planetas 🚧

## 12. Animated Avatar

While looking for ideias, I found this [really cool article](🚧 TODO 🚧) that explains how you can create an Avatar of yourself, animate it and use it on your website.  

I thought an animated Avatar would look more interesting than a photo of myself, so I decided to switch it.  

The final result was this:  
🚧 TODO fotos avatar 🚧 

## 13. Multi-Language support

🚧 TODO 🚧

## 14. Different Domain 

🚧 TODO 🚧  

# Running Locally

It is very simple to run this project on your machine!  
If it is the first time running the project (You need to have [npm installed](🚧 TODO 🚧) on your machine):  

1. Clone this repository: `git clone 🚧 TODO 🚧`;
2. Go to the directory: `cd pedrochaps.github.io`;
3. Type `npm install` - this will install all the packages used in the application;
4. Type `npm run start`- this will start the application locally;
5. Finally, access the web app by accessing the following link in a browser: `localhost:3000`. 

If you have already ran the project, you just need to do steps 4. and 5. on the following times.

# Final thoughts

I hope you have liked my website and this README!  
If you have any doubts, comments or suggestions, don't hesitate in contacting me - I'm very happy to help! :D