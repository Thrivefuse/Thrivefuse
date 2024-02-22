import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.brandName}>ThriveFuse</h1>
        <p className={style.footerText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          nostrum molestiae aliquid eum dicta officiis fuga est ratione. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Sit repudiandae
          maxime, illo maiores ut ratione eveniet inventore, quo ullam ipsa
          magnam quibusdam error esse. Quasi, ad vero! Distinctio, nisi officia.
        </p>
      </div>
      <div className={style.box1}>
        <h1 className={style.company}>Company</h1>
        <ul className={style.ul}>
          <li>
            <Link to="" className={style.a}>About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="" className={style.a}>Careers </Link>
          </li>{" "}
          <li>
            {" "}
            <Link to="" className={style.a}>Press</Link>
          </li>
          <li>
            {" "}
            <Link to="" className={style.a}>News</Link>
          </li>
        </ul>
      </div>
      <div className={style.box2}>
        <h1 className={style.social}>Social</h1>
        <ul className={style.ul}>
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Behance</li>
          <li>Dribble</li>
        </ul>
      </div>
      {/* <div>
        &copy; Thrive Fuse Inc. All rights reserved.
      </div> */}
    </div>
  );
}

export default Footer;
