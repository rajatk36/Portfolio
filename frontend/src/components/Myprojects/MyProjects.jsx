import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './myprojects.css';
import { Autoplay } from 'swiper/modules';

const projects = [
  {
    title: 'Spotify clone',
    image: '/images/spotify_clone.png',
    codeLink: 'https://github.com/rajatk36/Spotify-Clone',
    projectLink:'https://spotify-clone-liard.vercel.app/'
  },
  {
    title: 'SysManager',
    image: '/images/sysmanager.png',
    codeLink: 'https://github.com/rajatk36/SysManager',
    projectLink: 'https://sys-manager.vercel.app/'
  },
  {
    title: 'CRUD Application',
    image: '/images/CRUD.png',
    codeLink: 'https://github.com/rajatk36/CRUD',
    projectLink:'https://crud-app-frontend.vercel.app/'
  },
  {
    title: 'Tic-Tac-Toe',
    image: '/images/tictactoe.png',
    codeLink: 'https://github.com/rajatk36/Tic-Tac-Toe',
    projectLink: 'https://tic-tac-toe-phi-tan.vercel.app/'
  },
  
  
  {
    title: 'Mental Health Agent',
    image: '/images/mentalhealth.jpg',
    codeLink: 'https://github.com/rajatk36/HYBRID-FUSION-MENTAL-HEALTH-CHAT-SUPPORT-AI-AGENT',
    projectLink: 'https://github.com/rajatk36/HYBRID-FUSION-MENTAL-HEALTH-CHAT-SUPPORT-AI-AGENT'
  },
  {
    title: 'Portfolio Website',
    image: '/images/portfolio.jpg', 
    codeLink: 'https://github.com/rajatk36/Portfolio',
    projectLink: 'https://portfolio-five-ecru-50.vercel.app/'
  }
];

const MyProjects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-text">Some Things I've built so far</p>
      <div className="swiper-wrapper-custom">
      <Swiper
  slidesPerView="auto"
  spaceBetween={20}
  grabCursor={true}
>        {projects.map((project, index) => (
          <SwiperSlide key={index} style={{ width: '260px' }} >
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" onClick={() => window.open(project.projectLink, "_blank")}/>
              <div className="project-info">
                <h3>{project.title}</h3>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="code-button">
                  View Code
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
};

export default MyProjects;
