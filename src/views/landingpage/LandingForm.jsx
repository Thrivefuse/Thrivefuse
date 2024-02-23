import React from "react";
import style from "../../styles/landingpage/LandingForm.module.css";

const LandingForm = () => {

  return (
    <section className={style.contact} id="contactUs">
      {/* <img
          src={Joy}
          alt="a joyous dark lady swinging her hand while sitting down"
          className={style.formImage}
        /> */}
      <div className={style.container}>
        <div className={style.box}>
          <h4 className={style.headtext}>Contact Us</h4>
          <h6 className={style.formSubHead}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat
            voluptatem Lorem ipsum dolor sit amet consectetur adipisicing.
          </h6>
          <p className={style.contactText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nobis
            ipsam fugiat! Fugiat nulla possimus corrupti consequuntur suscip
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque sit
            unde expedita. Consequatur, fugit quae. Fugiat non obcaecati veniam
            laudantium aliquam saepe, quas, excepturi placeat culpa vel iure
          </p>
        </div>
        <form className={"Contact-Us-Form-Frame"} action="" method="post">
          <h2>Fill The Form</h2>
          <input type="text" name="name" id="name" placeholder="Enter Name" className={style.name} />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className={style.email}
          />{" "}
          <input type="tel" name="phone" id="phone" placeholder="Phone" className={style.phone} />
          <br />
          <textarea
            name="message"
            id="message"
            rows="7"
            cols="20"
            placeholder="Message..."
            className={style.message}
          ></textarea>
          <br />
          <div className={style.btnWrapper}>
          <button type="submit" className={style.submitBtn} >Submit</button></div>
        </form>
      </div>
    </section>
  );
};

export default LandingForm;
