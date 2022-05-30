import React from "react";
import  './Services.css';
import { BsCheckLg } from "react-icons/bs";


const services = () => {
  return (
    <section id="service">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h2>Data Analysis</h2>
          </div>
          <ul className="service_list">
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/*End of Data Analysis */}
        <article className="service">
          <div className="service_head">
            <h2>Data Visualization</h2>
          </div>
          <ul className="service_list">
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
