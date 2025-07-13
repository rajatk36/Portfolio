import React, { useState, useEffect } from'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Home.css';
import Spiderweb from '../SpiderWeb/SpiderWeb.jsx'

const Home = () => {

 const [IsDesktop, setIsDesktop] = useState(false);  // this is because the canvas effect is not interacting well in lower screen resolutions touch movement also interacts with scroll and canvas effect so for now i am using canvas effect only for desktops

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth > 768);
    checkIsDesktop(); // initial check
    window.addEventListener('resize', checkIsDesktop);

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  if (IsDesktop) {
    return ( 
      <Spiderweb/>
    );
  }

  const lnkedin_link = `${import.meta.env.VITE_APP_LINKEDIN}`;
  const instagram_link = `${import.meta.env.VITE_APP_INSTAGRAM}`;
  const github_link = `${import.meta.env.VITE_APP_GITHUB}`;
  return (
      <div className="home">
        <div className="text-area">
          <h1>Hello 👋,</h1>
          <h1> I'm a web Developer</h1>
          <p className='description'>I build things for web</p>
          <div className="social-icons">
            <a href={lnkedin_link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={instagram_link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href={github_link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
  );
};

export default Home;
