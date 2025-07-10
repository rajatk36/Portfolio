import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Home.css';

const Home = () => {
  
   const lnkedin_link = "https://www.linkedin.com/in/rajat-kumar-76b020261/";
  const instagram_link = "https://www.instagram.com/rajatkumar_007/";
  const github_link = "https://github.com/rajatk36";
  
  return (
      <div className="home">
        <div className="text-area">
          <h2>Hello 👋,</h2>
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
