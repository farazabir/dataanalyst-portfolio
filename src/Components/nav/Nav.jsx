import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsHddNetwork } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav("#")} className={activeNav === "#" ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#" ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? 'active' : ''}>
        <BiBook />
      </a>
      <a href="#service" onClick={() => setActiveNav("#service")} className={activeNav === "#service" ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav("#poftfolio")} className={activeNav === "#portfolio" ? 'active' : ''}>
        <BsHddNetwork />
      </a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? 'active' : ''}>
        <BiMessageRoundedDetail />
      </a>
    </nav>
  );
};

export default Nav;
