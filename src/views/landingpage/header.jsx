import  React  from  'react';
import style from '../../styles/landingpage/header.module.css';
import { HashLink as Link } from "react-router-hash-link";




const Header = () => {

    return (
      <div className={style.Header}>
        <h1 className={style.brandName}>ThriveFuse</h1>
        <ul className={style.info}>
            <li className={style.list}>  <Link  className={style.a }   to="#first" >Home</Link></li>
            <li className={style.list}>  <Link  className={style.a }  to='#second'>About-Us</Link></li>
            <li className={style.list}>  <Link  className={style.a }  to='#our mission'>Our-Mission</Link></li>
            <li className={style.list}>  <Link  className={style.a }  to='#our vision'>Our-Vision</Link></li>
            <li className={style.list}>  <Link  className={style.a }  to='#course'>Course</Link></li>
        </ul>
          <ul className={style.cta}>
            <li><button>Log in</button></li>
        </ul>
      </div>
    );
}
export default Header;