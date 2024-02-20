import React from "react";
import style from "./landingPage.module.css";
import Header from "../Header/header";
import Image from "../../assets/png/firstImage.png";
import Kids from "../../assets/png/kidsLearning.png";
import Program from "../../assets/png/program.png";
import Enterpreneur from "../../assets/png/enterpreneur.png";
<<<<<<< HEAD:src/Components/LandingPage/landingPage.jsx
import Skills from "./data";
import "react-slideshow-image/dist/styles.css";
import LandingForm from "./LandingForm/LandingForm";
import Footer from "../Footer/footer";
=======
import "react-slideshow-image/dist/styles.css";
>>>>>>> 49aa63e5fc7f1ce83fb80bdbfa6e13751e2eb79b:src/Components/LandingPage/index.jsx

function LandingPage() {
  return (
    <>
      <Header />
      <section className={style.first} id="first">
        <div className="text">
          <h1 className={style.headText}>
          Elevate your child's potential through skill-focused learning. Join us in championing inclusive growth and social protection—empowering the future generation.
          </h1>
          <p className={style.landText}>
          Embark on a transformative educational journey with us, where your child's learning experience goes beyond traditional boundaries. We're not just shaping students; we're cultivating future leaders armed with practical skills. By choosing our platform, you're not only investing in your child's growth but actively contributing to a society where every individual is empowered with skills and protected socially. Enrich your child's education and be part of a movement redefining the landscape of decent work and social protection. Join us in fostering a brighter, more inclusive future...
          </p>
          <div className={style.con}>
            <button className={style.cta}>Become a parent</button>
            <button className={style.cta}>Become a Tutor</button>
          </div>
        </div>
        <div className="landImage">
          <img src={Image} alt="" srcset="" className={style.landImage} />
        </div>
      </section>

      <section className={style.thrivefuse} id="second">
        <div className={style.text2}>
          <h2 className={style.thrivefuseMessage}>
            Welcome To The Thrivefuse Online Learning Center
          </h2>
          <div className={style.about}>
            <h6 className={style.aboutMess}>About Us</h6>
            <p className={style.textAbou}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              voluptate ab voluptas, officiis nobis necessitatibus tenetur animi
              nam sit, commodi possimus eligendi est laboriosam molestiae
            </p>
          </div>
          <div className={style.mission}>
            <h6 className={style.aboutMess}>Our Mission</h6>
            <p className={style.textAbou}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              dolore eos dolores a pariatur maxime obcaecati at aspernatur,
              dolorem accusamus assumenda repudiandae facere excepturi sapiente
              architecto voluptate vel. Perferendis, nobis.
            </p>
          </div>
          <button className={style.cta}>Learn More</button>
        </div>
        <div className="image2">
          <img
            src={Kids}
            alt="Kids learning with entusiasm"
            className={style.enthusiastImage}
            srcset=""
          />
        </div>
      </section>

      <section className={style.courses} id="course">
        <h4 className={style.courseExplore}>Explore Courses</h4>
        <div className={style.systemContainer}>
          <div
            className={style.SystemBox}
            style={{ border: "1px solid var(--main-color)" }}
          >
            <img
              src={Program}
              alt="next generational black kids learning programming with much enthusiasm and also in a conducive African office making life meetup "
              className={style.systemImage}
            />
            <h3 className={style.systemTitle}>Lorem Ipsum</h3>
            <p className={style.systemText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              quos delectus. Nostrum, voluptas. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sint nihil deserunt quidem. Quod,
              suscipit. Tenetur qui explicabo{" "}
            </p>
          </div>
          <div
            className={style.SystemBox}
            style={{ border: "1px solid var(--main-color)" }}
          >
            <img
              src={Enterpreneur}
              alt="next generational black kids learning Enterpreneurship skills with much enthusiasm and also in a conducive African office making life meetup and also ready to bring out the best idea in them "
              srcset=""
              className={style.systemImage}
            />
            <h3 className={style.systemTitle}>Lorem ipsum</h3>
            <p className={style.systemText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              quos delectus. Nostrum, voluptas. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sint nihil deserunt quidem. Quod,
              suscipit. Tenetur qui explicabo{" "}
            </p>
          </div>
        </div>
        <Skills className={style.skill} />
      </section>
      <LandingForm />

      <section>
        <Footer />
      </section>
    </>
  );
}

export default LandingPage;
