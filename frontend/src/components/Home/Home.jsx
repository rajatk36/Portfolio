import React, { useState, useEffect } from'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Home.css';
import Spiderweb from '../SpiderWeb/SpiderWeb.jsx'

const Home = () => {

 const [IsDesktop, setIsDesktop] = useState(false); 

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth > 768);
    checkIsDesktop();
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
        <div className='home-text-mob'>
          <h2 className='mob-head1'>Hello there,</h2>
          <h1 className='mob-head2'>I'm a web Developer</h1>
          <p className='para'>I build things for web</p>
          <div className="social-icons-mob">
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
