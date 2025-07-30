import React from "react";
import { MdEmail } from "react-icons/md";
import "./navbar.css";

const Menu = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  
];

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
const resume_link = `${import.meta.env.VITE_RESUME_LINK}`;
const GoToLink =() => {
  window.open({resume_link},'_blank');
};

  return (
    <header className="header">
      <nav className="navbar">
        {Menu.map((item, index) => (
          <button
            key={index}
            className="nav-button"
            onClick={() => scrollToSection(item.id)}
          >
            {item.name}
          </button>
          
        ))}
        <button className="nav-button" onclick={GoToLink}>
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
