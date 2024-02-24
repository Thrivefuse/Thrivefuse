import React from "react";
import style from "../../styles/landingpage/landingPage.module.css";
import Header from "./header";
import Image from "../../assets/png/firstImage.png";
import Kids from "../../assets/png/kidsLearning.png";
import Program from "../../assets/png/program.png";
import Entrepreneur from "../../assets/png/enterpreneur.png";
import Data from "./data";
import "react-slideshow-image/dist/styles.css";
import LandingForm from "./LandingForm";
import "react-slideshow-image/dist/styles.css";
import Footer from "./footer";
import {
  PARENT_REGISTRATION_PAGE,
  TUTOR_REGISTRATION_PAGE,
} from "../../utils/constants";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  function navigateTo(event, toNextPage) {
    event.preventDefault();
    navigate(toNextPage);
  }

  return (
    <div className={style.container}>
      <Header />
      <section className={style.first} id="first">
        <div className={style.text}>
          <h1 className={style.headText}>
            Elevate your child's potential through skill-focused learning. Join
            us in championing inclusive growth and social protection empowering
            the future generation.
          </h1>
          <p className={style.landText}>
            Embark on a transformative educational journey with us, where your
            child's learning experience goes beyond traditional boundaries.
            We're not just shaping students; we're cultivating future leaders
            armed with practical skills. By choosing our platform, you're not
            only investing in your child's growth but actively contributing to a
            society where every individual is empowered with skills and
            protected socially. Enrich your child's education and be part of a
            movement redefining the landscape of decent work and social
            protection. Join us in fostering a brighter, more inclusive
            future...
          </p>
          <div className={style.con}>
            <button
              onClick={(event) => navigateTo(event, PARENT_REGISTRATION_PAGE)}
              className={style.cta}
            >
              Become a parent
            </button>
            <button
              onClick={(event) => navigateTo(event, TUTOR_REGISTRATION_PAGE)}
              className={style.cta}
            >
              Become a Tutor
            </button>
          </div>
        </div>
        <div className="landImage">
          <img src={Image} alt="" srcSet="" className={style.landImage} />
        </div>
      </section>

      <section className={style.thrivefuse} id="second">
        <div className={style.text2}>
          <h2 className={style.thrivefuseMessage}>
            Welcome To The Thrivefuse Online Learning Center
          </h2>
          <div className={style.all}>
            <div className={style.secondContent}>
              <div className={style.about}>
                <h6 className={style.aboutMess}>About Us</h6>
                <p className={style.textAbou}>
                  Welcome to ThriveFuse, where we are on a mission to empower
                  individuals with the support they need to navigate life's
                  challenges and uncertainties. We believe that everyone
                  deserves the opportunity to contribute to and benefit from the
                  growth of the economy. Our unique approach goes beyond
                  traditional education—we focus on providing practical skills
                  and fostering an environment of continuous learning to ensure
                  individuals are well-equipped for the dynamic demands of the
                  modern world.
                </p>
              </div>
              <div className={style.mission} id={"our mission"}>
                <h6 className={style.aboutMess}>Our Mission</h6>
                <p className={style.textAbou}>
                  ThriveFuse is committed to promoting social protection through
                  a holistic approach that combines essential skills
                  development, financial support, and a culture of adaptability.
                  Our mission is to empower individuals, irrespective of their
                  background or circumstances, with the tools they need to
                  thrive in an ever-changing economic landscape. By offering a
                  support system that goes beyond conventional education, we aim
                  to create a more resilient and inclusive society.
                </p>
              </div>
              <div className={style.vision} id={"our vision"}>
                <h6 className={style.aboutMess}>Our Vision</h6>
                <p className={style.textAbou}>
                  To be a catalyst for societal transformation, where
                  individuals are not only equipped with practical skills but
                  also supported in facing the uncertainties of life. ThriveFuse
                  envisions a world where everyone has the means to contribute
                  meaningfully to economic growth and where social protection is
                  the cornerstone of a prosperous and inclusive global
                  community. Through our vision, we aspire to redefine the
                  paradigm of support, ensuring that individuals not only
                  survive but thrive in the face of challenges.
                </p>
              </div>
              <button className={style.cta}>Learn More</button>
            </div>
          </div>
          <div className="image2">
            <img
              src={Kids}
              alt="Kids learning with entusiasm"
              className={style.enthusiastImage}
              srcSet=""
            />
          </div>
        </div>
      </section>

      <section className={style.courses} id="course">
        <h4 className={style.courseExplore}>Empowering Futures, Unleashing Potential: Explore the Mastery Within Our Skill Sets </h4>
        <div className={style.systemContainer}>
          <div
            className={style.SystemBox}
            style={{ border: "1px solid var(--main-color)" }}
          >
            <div className={style.systemImageBox}>
            <img
              src={Program}
              className={style.systemImage}
              alt="next generational black kids learning programming with much enthusiasm and also in a conducive African office making life meetup "
            /></div>
            <h3 className={style.systemTitle}>Programming</h3>
            <p className={style.systemText}>
              Ready to master the art of programming? Dive into our
              comprehensive programming courses and embark on a journey of
              innovation and skill-building. Whether you're a beginner or an
              experienced coder, our expert-led courses cover everything from
              the fundamentals to advanced techniques.{" "}
            </p>
          </div>
          <div
            className={style.SystemBox}
            style={{ border: "1px solid var(--main-color)" }}
          >
            <div className={style.systemImageBox}>
            <img
              src={Entrepreneur}
              className={style.systemImage}
              srcSet=""
              alt="next generational black kids learning Enterpreneurship skills with much enthusiasm and also in a conducive African office making life meetup and also ready to bring out the best idea in them "
            /></div>
            <h3 className={style.systemTitle}>Enterpreneurship</h3>
            <p className={style.systemText}>
              Embark on a journey of entrepreneurial discovery with our
              exclusive Enterpreneur Course!  Unleash your business prowess,
              learn strategic planning, and cultivate the mindset for success.
              Our courses empower you to navigate the dynamic business
              landscape. Elevate your entrepreneurial journey today{" "}
            </p>
          </div>
        </div>
        <Data className={style.skill} />
      </section>
      <LandingForm />

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default LandingPage;
