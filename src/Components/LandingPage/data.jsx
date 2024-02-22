import React from 'react'
import style from './landingPage.module.css';
import { Slide } from "react-slideshow-image";
export default function data() {
  return (
    <>
    <h1>Lorem Ipsum</h1>
    <Slide>
          <div
            className={style.SystemBox}
            style={{ border: "1px solid var(--main-color)" }}
          >
            <img src="" alt="" srcset="" className={style.systemImage} />
            <h3 className={style.systemTitle}>Lorem ipsum</h3>
            <p className={style.systemText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              quos delectus. Nostrum, voluptas. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sint nihil deserunt quidem. Quod,
              suscipit. Tenetur qui explicabo{" "}
            </p>
          </div>
          <div className={style.SystemBox} style={{ border: "1px solid var(--main-color)" }}>
            <img src="" alt="" srcset="" className={style.systemImage} />
            <h3 className={style.systemTitle}>Lorem ipsum</h3>
            <p className={style.systemText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              quos delectus. Nostrum, voluptas. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sint nihil deserunt quidem. Quod,
              suscipit. Tenetur qui explicabo{" "}
            </p>
          </div>
          <div className={style.SystemBox} style={{ border: "1px solid var(--main-color)" }}>
            <img src="" alt="" srcset="" className={style.systemImage} />
            <h3 className={style.systemTitle}>Lorem ipsum</h3>
            <p className={style.systemText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              quos delectus. Nostrum, voluptas. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sint nihil deserunt quidem. Quod,
              suscipit. Tenetur qui explicabo{" "}
            </p>
          </div>
          <div className={style.SystemBox} style={{ border: "1px solid var(--main-color)" }}>
            <img src="" alt="" srcset="" className={style.systemImage} />
            <h3 className={style.systemTitle}>Lorem ipsum</h3>
            <p className={style.systemText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              quos delectus. Nostrum, voluptas. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sint nihil deserunt quidem. Quod,
              suscipit. Tenetur qui explicabo{" "}
            </p>
          </div>
          </Slide>
    </>
  )
}
