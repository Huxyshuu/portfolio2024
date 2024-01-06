import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';

function App() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="App">
        <Sidebar open={open} setOpen={setOpen}/>
      </div>
    </>
  )
}

export default App
