import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Home.css';
import SpiderWeb from '../SpiderWeb/SpiderWeb.jsx';

const Home = () => {

 //swap content or component i have used this to maintain responsive interaction. SpiderWeb.jsx has a problem when viewd in mobile works great in desktop
  
 const [IsDesktop, setIsDesktop] = useState(false);

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
