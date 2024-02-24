import React from "react";
import style from "../../styles/landingpage/landingPage.module.css";
import Frontend from "../../assets/png/vibrant learning.png";
import Cloud from "../../assets/png/cloud.png";
import Backend from "../../assets/png/Backend.png";
import Enterpreneur from "../../assets/png/Enterpreneue.png";
import { Slide } from "react-slideshow-image";

export default function Data() {
  return (
    <div className={style.dataContainer}>
      <h1>Explore Courses</h1>
      <Slide className={style.Slide}>
        <div
          className={style.SystemBox}
          style={{ border: "1px solid var(--main-color)" }}
        >
          <div className={style.systemImageBox}>
            <img
              src={Frontend}
              alt=""
              srcSet=""
              className={style.systemImage}
            />
          </div>
          <h3 className={style.systemTitle}>Front-end Development</h3>
          <p className={style.systemText}>
            Transform Your Future with Code! Unleash your potential and dive
            into the exciting world of coding with us. We're not just teaching
            code; we're crafting future innovators. Join us on a transformative
            journey where creativity meets technology. Your ideas, our guidance
            – let's build something extraordinary together.{" "}
          </p>
        </div>
        <div
          className={style.SystemBox}
          style={{ border: "1px solid var(--main-color)" }}
        >
          <div className={style.systemImageBox}>
            <img src={Cloud} alt="" srcSet="" className={style.systemImage} />
          </div>
          <h3 className={style.systemTitle}>Cloud Computing</h3>
          <p className={style.systemText}>
            Unlock the potential of Cloud Computing with our cutting-edge
            course! Immerse yourself in the world of scalable solutions and
            virtualization. Whether you're a beginner or an IT professional, our
            program offers hands-on learning, real-world applications, and
            expert guidance. Elevate your career, stay ahead in the digital
            landscape, and become a sought-after Cloud Computing specialist.
            Join us on this transformative journey!{" "}
          </p>
        </div>
        <div
          className={style.SystemBox}
          style={{ border: "1px solid var(--main-color)" }}
        >
          <div className={style.systemImageBox}>
            <img src={Backend} alt="" srcSet="" className={style.systemImage} />
          </div>
          <h3 className={style.systemTitle}>Back-end Development</h3>
          <p className={style.systemText}>
            Embark on a journey into the core of digital architecture with our
            Backend Development course. At Thrivefuse, we don't just
            teach code; we cultivate problem solvers and system architects.
            Explore the art of data handling, server management, and more.
            Elevate your skills with industry insights and personalized
            mentorship. Future-proof your career  the backend awaits your
            brilliance!{" "}
          </p>
        </div>
        <div
          className={style.SystemBox}
          style={{ border: "1px solid var(--main-color)" }}
        >
          <div className={style.systemImageBox}>
            <img
              src={Enterpreneur}
              alt=""
              srcSet=""
              className={style.systemImage}
            />
          </div>
          <h3 className={style.systemTitle}>Enterpreneur</h3>
          <p className={style.systemText}>
            Embark on a journey of entrepreneurial discovery with our exclusive
            Enterpreneur Course! 🚀 Unleash your business prowess, learn
            strategic planning, and cultivate the mindset for success. Our
            courses empower you to navigate the dynamic business landscape.
            Elevate your entrepreneurial journey today{" "}
          </p>
        </div>
      </Slide>
    </div>
  );
}
