import React, {useState} from 'react';
import '../../styles/dashboard/sideBar.css';
// import ADD from '../../assets/png/logo/thrive-fuse-logo-white-transparent.png';


export default function SideBar() {
    const [showDashBoard, setShowDashBoard] = useState(false);
    let isVisible = {
        display : 'block',
    }
    const toggle = () => {
        setShowDashBoard(!isVisible);
      };
  return (
    <div className='sidebar'>   
      {/* <img src={require('../../assets/svg/user.svg')} alt="User" />   */}
        {/* <img src={Re} alt='' /> */}
        <div className='sidebar-box1'>
        <button className='btn parent-dashboard' onClick={toggle}>Dashboard</button>
        <button className='btn parent-ward' >My Wards</button>
        <button className='btn parent-investement-port'>Investment Portfolio</button>
        </div>


        <button className='btn parent-settings'>Settings</button>
        <h3>Logout</h3>
    </div>
  )
}
