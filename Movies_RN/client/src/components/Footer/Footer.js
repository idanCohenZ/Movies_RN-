import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaPinterestSquare,
  FaGooglePlusSquare
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>You are at the right place !!</h3>
        <p>
          Movies Right Now is a blog website where you will find all the latest
          movies ranking, descriptions and even yours truly custom movies to
          watch. So if you look for the greatest stories ever told, look no
          further. Enjoy.
        </p>
        <ul className="socials">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100000838672232">
              <FaFacebookSquare style={{ fontSize: "30px" }} />
            </a>
          </li>

          <li>
            <span> My Email: Idan856@gmail.com </span>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/idancohenzada/">
              <FaLinkedin style={{ fontSize: "30px" }} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; Idan Cohen Zada 2022
          <a href="#"> Click me to get to the top ☝ </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
