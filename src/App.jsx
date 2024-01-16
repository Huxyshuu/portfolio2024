import { useState } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Card from './components/workcard/WorkCard';
import Skills from './components/skillIcons/Skills';
import { Icon } from '@iconify/react';

function App() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="App">
        <Sidebar open={open} setOpen={setOpen}/>
        <div className="mainContent">
          <div id="home">
            <h1 id='title'>Hi,<br/>I&apos;m <span id="H">H</span>ugo,<br/>professional dumbass</h1>,
            <p>Mechanical Engineering Student / Programmer</p>
            <button>Contact me!</button>
            <div id="scrollDown">
              <p id="text-down">Scroll down for more!</p>
              <Icon icon="bx:down-arrow" id="arrow-down"/>
            </div>
            
          </div>
          <div className="section" id="workSection">
            <h1>Work</h1>
            <div id="workContent">
              <p>A small carousel of the most recent projects I&apos;ve worked on. 
                Currently consisting mostly of hobby projects that were a 
                good source of fun and challenge to better my skills. 
                If the code button is grayed out, you can contact me for 
                more information.
              </p>
              <Card />
            </div>
          </div>
          <div className="section" id="aboutSection">
            <h1>About</h1>
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
            <h1>Skills</h1>
            <Skills />
          </div>
          <div className="section" id="contact">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
