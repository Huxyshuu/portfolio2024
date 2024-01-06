import { useState } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';

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
          </div>
          <div id="about">
            <h1>About</h1>
          </div>
          <div id="work">
            <h1>Work</h1>
          </div>
          <div id="skills">
            <h1>Skills</h1>
          </div>
          <div id="contact">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
