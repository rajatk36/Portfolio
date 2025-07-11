import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';

import AboutMe from './components/AboutMe/AboutMe.jsx';
import MyProjects from './components/Myprojects/MyProjects.jsx';
import Contact from './components/Contact/Contact.jsx';
import SpiderWeb from './components/SpiderWeb/SpiderWeb.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home"><SpiderWeb /></section>
      <section id="about" className="section-with-background">
       
        <AboutMe />
      </section>

      <section id="projects" className="section-with-background">
        <MyProjects />
      </section>

      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
