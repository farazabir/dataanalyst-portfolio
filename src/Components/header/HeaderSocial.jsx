import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function HeaderSocial() {
  return (
    <div className="header_social">
      <a href="https://linkedin.com" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://facebook.com" target="blank">
        <BsFacebook />{" "}
      </a>
      <a href="https://github.com" target="blank">
        {" "}
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocial;
