import React from "react";
import "./Experience.css";
import { HiBadgeCheck } from "react-icons/hi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I have </h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h2>Tools</h2>
          <div className="experience_content">
            <article className="experience_details">
              <HiBadgeCheck className="experience_details-icon" />
              <div>
                <h4>Skill</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details-icon" />
              <div>
                <h4>Skill</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck  className="experience_details-icon"/>
              <div>
                <h4>Skill</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details-icon" />
              <div>
                <h4>Skill</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck  className="experience_details-icon"/>
              <div>
                <h4>Skill</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h2>Languages</h2>
          <div className="experience_content">
            <article className="experience_details">
              <HiBadgeCheck  className="experience_details-icon"/>
              <div>
                <h4>Skill</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck  className="experience_details-icon"/>
              <div>
                <h4>Skill</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck  className="experience_details-icon"/>
              <div>
                <h4>Skill</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck  className="experience_details-icon"/>
              <div>
                <h4>Skill</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <HiBadgeCheck className="experience_details-icon" />
              <div>
                <h4>Skill</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
