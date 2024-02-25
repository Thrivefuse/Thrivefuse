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
            Ready to level up your skills?  Fill in the details, tell us your
            learning preferences, and drop us a line. We're excited to tailor
            your educational journey just for you! Let's make learning awesome
            together!
          </h6>
          <p className={style.contactText}>
            Embark on a learning adventure with us! Share your current skill
            set, let us know which courses caught your eye, and drop a note if
            you have any questions or special requests. We're here to make your
            learning experience exceptiona
          </p>
        </div>
        <form className={style.ContactUsFormFrame} action="" method="post">
          <h2>Fill The Form</h2>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            className={style.name}
            required
          />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className={style.email}
            required
          />{" "}
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            className={style.phone}
            required
          />
          <br />
          <textarea
            name="message"
            id="message"
            rows="7"
            cols="20"
            placeholder="Message..."
            className={style.message}
            required
          ></textarea>
          <br />
          <div className={style.btnWrapper}>
            <button type="submit" className={style.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LandingForm;
