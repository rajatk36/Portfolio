// 📁 src/components/AboutMe.jsx
import React from 'react';
import 'devicon/devicon.min.css';
import './aboutme.css';

const skills = [
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Express.js", icon: "devicon-express-original colored" }, 
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "VS Code", icon: "devicon-vscode-plain colored" },
];

const AboutMe = () => {
  return (
    <div className="main" >
        <div className="about-text">
          <h1 className='about-title'>About Me</h1>
          <p className="about-description">
           As A Web Developer, I Am Responsible For Designing And Developing Web Pages. My Primary Focus Is To Create Responsive, User-Friendly Experiences That Meet The Needs Of A Diverse Online Audience.
          </p>
      </div>
       <div className="skills-section">
      <h1 className="skills-title">My Skills</h1>
      <p className='skills-title1'>Technologies I've been working with recently      </p>
      <ul className="skills-grid">
        {skills.map(skill => (
          <li key={skill.name} title={skill.name} className="skill-card">
            <i className={skill.icon} aria-label={skill.name}></i>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default AboutMe;
