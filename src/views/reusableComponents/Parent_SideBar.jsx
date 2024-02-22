import React, {useState} from 'react';
import '../../styles/Dashboard/sideBar.css';


export default function Parent_SideBar() {

    const [showDashBoard, setShowDashBoard] = useState(false);

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