import React  from 'react';
import '../../styles/Dashboard/sideBar.css';
// import ADD from '../../assets/png/logo/thrive-fuse-logo-white-transparent.png';


export default function SideBar() {
    
    const showDashBoard (){
        const [showDashBoard, setShowDashBoard] = useState(false);
    }
  return (
    <div className='sidebar'>   
      {/* <img src={require('../../assets/svg/user.svg')} alt="User" />   */}
        {/* <img src={Re} alt='' /> */}
        <button className='btn parent-dashboard' onClick={showDashBoard}>Dashboard</button>
        <button className='btn parent-ward' >My Wards</button>
        <button className='btn parent-investement-port'>Investment Portfolio</button>



        <button className='btn parent-settings'>Settings</button>
        <h3>Logout</h3>
    </div>
  )
}
