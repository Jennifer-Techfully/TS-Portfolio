import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Skill from './components/Skill/Skill';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import ScrollUpButton from './components/Scroll/ScrollupButton';


const App:React.FC =()=> {

const [done,setDone]=useState<boolean>(false)

return (
    <div className="App">
      <Navbar />
        <div className='content'>
          <Home/>
          <About/>
          <Project/>
          <Skill />
          <Contact done={done} setDone={setDone}/>
          <ScrollUpButton/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
