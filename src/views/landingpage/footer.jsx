import React from "react";
import style from "../../styles/landingpage/footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={style.container}>
      <div>
        <h1 className={style.brandName}>ThriveFuse</h1>
        <p className={style.footerText}>
          Thank you for exploring our learning platform! 🌟 Stay connected for
          updates, new courses, and exciting educational content. Follow us on
          social media for daily inspiration and learning tips. Your journey to
          knowledge and growth continues with us!
        </p>
      </div>
      <div className={style.footerLinks}>
        <div className={style.box1}>
          <h1 className={style.company}>Company</h1>
          <ul className={style.ul}>
            <li>
              <Link to="" className={style.a}>
                About Us
              </Link>
            </li>
            <li>
              {" "}
              <Link to="" className={style.a}>
                Careers{" "}
              </Link>
            </li>{" "}
            <li>
              {" "}
              <Link to="" className={style.a}>
                Press
              </Link>
            </li>
            <li>
              {" "}
              <Link to="" className={style.a}>
                News
              </Link>
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
      </div>
      {/* <div>
        &copy; Thrive Fuse Inc. All rights reserved.
      </div> */}
    </footer>
  );
}

export default Footer;
