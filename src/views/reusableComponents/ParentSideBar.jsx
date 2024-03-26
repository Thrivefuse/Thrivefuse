import React from 'react';
import '../../styles/dashboard/parentdashboard/sideBar.css';


 function Parent_SideBar() {
    const handleLogout = () => {
        localStorage.removeItem('userToken');
        
        console.log('User logged out');
      };
    return (
        <div className='sidebar'>
            {/* <img src={require('../../assets/svg/user.svg')} alt="User" />   */}
            {/* <img src={Re} alt='' /> */}
            <button className='btn parent-dashboard' >Dashboard</button>
            <button className='btn parent-ward' >My Wards</button>
            <button className='btn parent-investement-port'>Investment Portfolio</button>
            <button className='btn parent-settings' onClick={'useTheme'}>Settings</button>
            <h3 onClick={handleLogout}>Logout</h3>
        </div>
    )
}
export default  Parent_SideBar; 