import { useState } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
// import Card from './components/workCard/WorkCard';
import WorkDisplay from './components/workDisplay/WorkDisplay';
import ImageDisplay from './components/imageDisplay/ImageDisplay';
import ContactForm from './components/contactForm/ContactForm';
import Skills from './components/skillIcons/Skills';
import './fonts/Fonts.scss';
import { Icon } from '@iconify/react';

function App() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="App">
        <Sidebar open={open} setOpen={setOpen}/>
        <div id="sidebarMargin">
          <div id="home">
            <h1 id='title'>Hi,<br/>I&apos;m <span id="H">H</span>ugo,<br/>engineering student</h1>,
            <p>Mechanical Engineer/ Programmer</p>
            <button>Contact me!</button>
            <div id="scrollDown">
              <p id="text-down">Scroll down for more!</p>
              <Icon icon="bx:down-arrow" id="arrow-down"/>
            </div>
          </div>

          <div className="mainContent">
            <div className="section" id="workSection">
              <div id="divider">
                <p id="copper-text">WORK</p>
                <div id="divider-line"></div>
                <div id="divider-icon-container">
                  <Icon id="divider-icon" icon="ic:baseline-work-outline" />
                </div>
              </div>
              
              <h1>Portfolio<span className="greenDot">.</span></h1>
              <div id="workContent">
                <p id="workText">A small set of hand-picked projects that I&apos;ve been working on. 
                  Consisting mostly of hobby and school projects that were fun, taughtful and a great 
                  challenge to better my skills.
                  <br/><br/>
                  View the projects for more information on them.
                </p>
                {/* <Card /> */}
                <WorkDisplay />
              </div>
              <div className="ellipse-gray"></div>
            </div>
            <div className="section" id="aboutSection">
              <div id="divider">
                <p id="copper-text">ABOUT</p>
                <div id="divider-line"></div>
                <div id="divider-icon-container">
                  <Icon id="divider-icon" icon="mdi:user-circle-outline" />
                </div>
                <div className="ellipse-copper"></div>
              </div>
              <h1>About<span className=".greenDot">.</span></h1>
              <div id="aboutContent">
                <p>Greetings! I&apos;m a second-year bachelor student majoring in 
                  mechanical engineering at Aalto University in Finland. 
                  I thrive on the excitement of programming, design, and the constant quest 
                  for innovative solutions to both creative and logical challenges.

                  <br/><br/>

                  Beyond my academic pursuits, I&apos;ve delved into computer science 
                  during my free time, immersing myself in the intricacies of languages like 
                  Python and C. 
                  Driven by my enthusiasm, I&apos;ve embraced web development through 
                  engaging hobby projects, culminating in the creation of this portfolio 
                  and several other captivating websites. Looking ahead, I am keen on 
                  transitioning from mechanical engineering to software engineering, 
                  aiming to pursue my M.Sc. in computer science.

                  <br/><br/>

                  Away from the screen and code, you&apos;ll find me passionately 
                  engaged in playing the piano, gaming, powerlifting, exploring 3D 
                  modeling, and marveling at the vast wonders of space! Whether 
                  you&apos;re an employer, a friend, or just a curious visitor, 
                  welcome to my world of endless possibilities.
                </p>
                <ImageDisplay images={[{image: "/blender1.png", desc: "Blender model of 2B pod from a game", alt: "Model of a robot"}, 
                                       {image: "/blender2.png", desc: "Mechanical spider model", alt: "Model of a spider"},
                                       {image: "/blender3.png", desc: "Blender model of a small japanese house", alt: "Model of a house"},
                                       {image: "/piano1.jpeg", desc: "Piano & cat", alt: "Picture of a piano and a cat"}, 
                                       {image: "/piano2.jpeg", desc: "Raspberry Pi lights on a piano", alt: "Rainbow lights on a piano"},]}/>
              </div>
            </div>
            <div className="section" id="skillSection">
              <div id="divider">
                <p id="copper-text">SKILLS</p>
                <div className="ellipse-highlight"></div>
                <div id="divider-line"></div>
                <div id="divider-icon-container">
                  <Icon id="divider-icon" icon="carbon:skill-level-intermediate" />
                </div>
              </div>
              <h1>Skills<span className=".greenDot">.</span></h1>
              <div>
                <p>Down below are skills, tools and software that I&apos;m proficient with
                  and that I use in my projects.
                </p>
                <Skills />
              </div>
            </div>
            <div className="section" id="contactSection">
              <div id="divider">
                <p id="copper-text">CONTACT</p>
                <div id="divider-line"></div>
                <div id="divider-icon-container">
                  <Icon id="divider-icon" icon="ic:outline-email" />
                </div>
              </div>
              <h1>Contact<span className=".greenDot">.</span></h1>
              {/* <ContactForm /> */}
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
