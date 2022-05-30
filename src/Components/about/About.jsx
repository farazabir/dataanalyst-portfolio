import React from "react";
import "./About.css";
import img from "../../Asset/img.jpg";
import { BsFillAwardFill } from "react-icons/bs/index.esm";
import {FaUserFriends} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_img">
          <div className="about_img-img">
            <img src={img} alt=""/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsFillAwardFill className="about_icon"/>
             <h5>Experience</h5>
             <small>2+ Years Working Experience</small>
            </article>
            <article className="about_card">
              <FaUserFriends className="about_icon"/>
             <h5>Clients</h5>
             <small>1000+ happy Clients</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
             <h5>Projects</h5>
             <small>More Than 100+ Completed Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi atque distinctio quo in suscipit et neque at. Qui ratione impedit minima facere modi quisquam nemo vitae ullam molestias, nesciunt, deserunt rem minus quod et mollitia laboriosam! Voluptas quidem id qui!</p>
        </div>
        <a href="#contact" className="btn btn-primary">Talk Now</a>
      </div>

      
    </section>
  );
};

export default About;
