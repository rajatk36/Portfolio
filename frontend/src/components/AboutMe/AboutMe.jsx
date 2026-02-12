
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
           I am a software engineer who enjoys building fast, intuitive, and reliable web applications with a background in IT from Delhi Technological University.
          </p>
        </div>
    <div className='profile-card'> 
       <p className='pc-1'>Available for work</p>
       <div className='header-profile'>
          <div className='pc'>
          <h1 className='pc-2'>Rajat </h1>
          <h1 className='pc-22'>Kumar</h1>
          </div>
          <div className='profile'>
            <img src="./images/profile.jpeg" alt="profile"  className="profile-img"/>
          </div>
       </div>
       <p className='pc-3'>I create real, working products from idea to launch, making sure they are fast, reliable, and ready to grow.</p>
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
