import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Skill from './components/Skill/Skill';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';




const App:React.FC =()=> {
  return (
    <div className="App">
      <Navbar />
        <div className='content'>
          <Home/>
          <About/>
          <Project/>
          <Skill/>
          <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
