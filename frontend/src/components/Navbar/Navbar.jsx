import React from "react";
import {useState,useEffect} from "react"
import { MdEmail } from "react-icons/md";
import "./navbar.css";

const Menu = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 374);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 374);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
const resume_link = `${import.meta.env.VITE_RESUME_LINK}`;
const GoToLink =() => {
  window.open(resume_link,'_blank');
};

const responsiveMenu = ismobile
  ? Menu.filter((item)=> item.name !== "About")
  : Menu;

  
  return (
<header className={`header ${isVisible ? "show" : "hide"}`}>
      <nav className="navbar">
        {responsiveMenu.map((item, index) => (
          <button
            key={index}
            className="nav-button"
            onClick={() => scrollToSection(item.id)}
          >
            {item.name}
          </button>
          
        ))}
       <button className="nav-button" onClick={goToLink}>
        Resume
        </button> 
      </nav>
       
       
      
      <button
      className="nav-button email-icon"
      onClick={()=>scrollToSection("contact")}>
      <MdEmail size={20} />
      Hire Me
    </button>
     
    
    </header>
  );
};

export default Navbar;
