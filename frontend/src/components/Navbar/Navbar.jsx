import React, { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import "./navbar.css";

const Menu = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },

];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 460);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 460);
    } ;
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
  let lastScroll = 0;

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    lastScroll = currentScroll;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  
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
const filteredMenu = isMobile
    ? Menu.filter((item) => item.name !== "Home")
    : Menu;

  return (
    <header className={`header ${isVisible ? "show" : "hide"}`}>
      <nav className="navbar">
        {filteredMenu.map((item, index) => (
          <button
            key={index}
            className="nav-button"
            onClick={() => scrollToSection(item.id)}
          >
            <span className="nav-text">{item.name} </span>
          </button>

        ))}
        <button className="nav-button" onClick={GoToLink}>
          <span className="nav-text">Resume </span>
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
