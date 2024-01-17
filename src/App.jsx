import { useState } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
// import Card from './components/workCard/WorkCard';
import WorkDisplay from './components/workDisplay/WorkDisplay';
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
              
              <h1>Portfolio<span style={{color: 'var(--highlight-color)'}}>.</span></h1>
              <div id="workContent">
                <p id="workText">A small carousel of the most recent projects I&apos;ve worked on. 
                  Currently consisting mostly of hobby projects that were a 
                  good source of fun and challenge to better my skills. 
                  If the code button is grayed out, you can contact me for 
                  more information.
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
              <h1>About<span style={{color: 'var(--highlight-color)'}}>.</span></h1>
              <div>
                <p>Hi, I&apos;m a Front-End Developer located in Finland. 
                  I love programming and designing the interwebs as well as 
                  finding new interesting ways to solve problems with Python and C#. 
                  I also love to play music! I&apos;m currently studying 
                  Mehcanical Engineering in Aalto University as a B.Sc student.
                </p>
              </div>
            </div>
            <div className="section" id="skills">
              <div id="divider">
                <p id="copper-text">SKILLS</p>
                <div className="ellipse-highlight"></div>
                <div id="divider-line"></div>
                <div id="divider-icon-container">
                  <Icon id="divider-icon" icon="carbon:skill-level-intermediate" />
                </div>
              </div>
              <h1>Skills<span style={{color: 'var(--highlight-color)'}}>.</span></h1>
              <Skills />
            </div>
            <div className="section" id="contact">
              <div id="divider">
                <p id="copper-text">CONTACT</p>
                <div id="divider-line"></div>
                <div id="divider-icon-container">
                  <Icon id="divider-icon" icon="ic:outline-email" />
                </div>
              </div>
              <h1>Contact<span style={{color: 'var(--highlight-color)'}}>.</span></h1>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
