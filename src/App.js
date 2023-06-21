import './App.css';
import React from 'react';
import Banner from './components/banner/Banner';
import Navbar from "./components/navbar/Navbar"
import About from './components/about/About';
import Skill from './components/skills/Skill';
import Project from './components/project/project';
import More from './components/more/More';

function App() {

  

  return (
<>
<div className="w-full h-auto bg-bodyColor relative font-bodyFont text-white">
    <div className='max-w-creen-2xl mx-auto px-16'>
    <Navbar />
    <Banner />
    <About />
    <Skill />
    <Project/>
    <More />
    


    </div>
</div>
</>
  );
}

export default App;