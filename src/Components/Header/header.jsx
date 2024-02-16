// import  React, { useState }  from  'react';
import style from './header.module.css';
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from 'react-router-dom';




const Header = () => {
    // const [linkClicked, setLinkClicked] = useState(false);
    // const handleLinkClicked = () =>{
    //     setLinkClicked(true);
    // };

    return (
        <BrowserRouter>
      <div className={style.Header}>
        <h1 className={style.brandName}>ThriveFuse</h1>
        <ul className={style.info}>
            <li>  <Link  className={style.a }   to="#first" >Home</Link></li>
            <li>  <Link  className={style.a }  to='#second'>About Us</Link></li>
            <li>  <Link  className={style.a }  to='#course'>Course</Link></li>
            <li>  <Link  className={style.a }  to=''>About Us</Link></li>
        </ul>
        <ul className={style.cta}>
            <li><button>Log in</button></li>
            <li><button className={style.signup}>Sign-Up</button></li>
        </ul>
      </div>
      </BrowserRouter>
    );
  }
  
  export default Header;
  