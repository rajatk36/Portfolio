import React, { useEffect, useRef } from 'react';
import './SpiderWeb.css';

const SpiderWeb = () => {
  const canvasRef = useRef(null);
  const bannerRef = useRef(null);
  const dots = useRef([]);
  const arrayColors = ['#eee', '#545454', '#596d91', '#bb5a68', '#696541'];

  useEffect(() => {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;

    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
    };

    const initDots = () => {
  const width = window.innerWidth;

  let dotCount = 50; // default for large screens

  if (width <= 1200) dotCount = 40;
  if (width <= 992) dotCount = 35;
  if (width <= 768) dotCount = 30;
  if (width <= 480) dotCount = 25;

  dots.current = [];
  for (let i = 0; i < dotCount; i++) {
    dots.current.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 5,
      color: arrayColors[Math.floor(Math.random() * arrayColors.length)]
    });
  }
};


    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.current.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const handleMouseMove = (event) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
      const mouse = {
        x: event.pageX - banner.getBoundingClientRect().left,
        y: event.pageY - banner.getBoundingClientRect().top
      };

      dots.current.forEach(dot => {
        const distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 200) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleMouseOut = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
    };

    resizeCanvas();
    initDots();
    drawDots();

    banner.addEventListener('mousemove', handleMouseMove);
    banner.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', () => {
      resizeCanvas();
      initDots();
      drawDots();
    });

    return () => {
      banner.removeEventListener('mousemove', handleMouseMove);
      banner.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
   const lnkedin_link = `${import.meta.env.VITE_APP_LINKEDIN}`;
  const instagram_link = `${import.meta.env.VITE_APP_INSTAGRAM}`;
  const github_link = `${import.meta.env.VITE_APP_GITHUB}`;

  return (
    <main> 
    <div className="banner" ref={bannerRef}>
    <canvas id="dotsCanvas" ref={canvasRef}></canvas> {/* ✅ canvas closed properly */}
    
    <div className="text-area">
      <h2 className='head2'>Hello🙋‍♂️there,</h2>
      <h1 className='head1'>I'm a web Developer</h1>
      <p className='para'>I build things for web</p>
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
</main>

  );
};

export default SpiderWeb;
