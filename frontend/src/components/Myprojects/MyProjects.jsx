import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './myprojects.css';
import { Autoplay } from 'swiper/modules';

const projects = [
  {
    title: 'Portfolio Website',
    image: '/images/portfolio.jpg', 
    codeLink: 'https://github.com/rajatk36/Portfolio',
  },
  {
    title: 'Mental Health Agent',
    image: '/images/mentalhealth.jpg',
    codeLink: 'https://github.com/rajatk36/HYBRID-FUSION-MENTAL-HEALTH-CHAT-SUPPORT-AI-AGENT',
  },
  {
    title: 'Billing App',
    image: '/images/Billing_app.jpg',
    codeLink: 'https://github.com/rajatk36/Billing-App',
  },
  {
    title: 'ToDo App',
    image: '/images/ToDo_app.jpg',
    codeLink: 'https://github.com/rajatk36/ToDo-App',
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
              <img src={project.image} alt={project.title} className="project-image" />
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
