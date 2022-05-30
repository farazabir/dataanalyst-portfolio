import React from "react";
import "./Portfolio.css";
import img from '../../Asset/img.jpg'

const Poftfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={img} alt=''/>
            <h3>This is item title</h3>
           <div className="portfolio_item-cta">
           <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
           </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={img} alt=''/>
            <h3>This is item title</h3>
           <div className="portfolio_item-cta">
           <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
           </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={img} alt=''/>
            <h3>This is item title</h3>
           <div className="portfolio_item-cta">
           <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
           </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={img} alt=''/>
            <h3>This is item title</h3>
           <div className="portfolio_item-cta">
           <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
           </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={img} alt=''/>
            <h3>This is item title</h3>
           <div className="portfolio_item-cta">
           <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
           </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={img} alt=''/>
            <h3>This is item title</h3>
           <div className="portfolio_item-cta">
           <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
           </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Poftfolio;
