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
              <h1>About<span style={{color: 'var(--highlight-color)'}}>.</span></h1>
              <div>
                {/* <p>Hi, I&apos;m a Front-End Developer located in Finland. 
                  I love programming and designing the interwebs as well as 
                  finding new interesting ways to solve problems with Python and C#. 
                  I also love to play music! I&apos;m currently studying 
                  Mehcanical Engineering in Aalto University as a B.Sc student.
                </p> */}
                <p>Hi, I&apos;m a mechanical engineering student from Finland.
                  Currently studying as a second year bachelor student in Aalto University.
                  I love programming, desigining and finding new innovative ways to solve creative
                  and logical problems. 

                  <br/><br/>

                  I&apos;ve studied computer science on my freetime as well
                  as taken a few courses in University, such as Python and C.
                  Through passionate hobby projects I&apos;ve also to love web development
                  and have created this portfolio along with a few other websites.

                  I&apos;m planning on continuing my studies from mechanical engineering into
                  software engineering and doing my M.Sc. in computer science.

                  <br/><br/>

                  I&apos;m also passionate about playing the piano, games, powerlifting, 
                  3D modeling and space!
                    
                </p>
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
              <h1>Skills<span style={{color: 'var(--highlight-color)'}}>.</span></h1>
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
              <h1>Contact<span style={{color: 'var(--highlight-color)'}}>.</span></h1>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
