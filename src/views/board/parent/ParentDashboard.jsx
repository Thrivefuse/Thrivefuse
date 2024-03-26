import React from 'react';
import ParentSideBar from '../../reusableComponents/ParentSideBar';
import MainParentDashboard from './ParentDashboardContent';

const ParentDashboard = () => {
  // const [isDarkMode, toggleTheme] = useTheme();
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '4rem' }}>
      <ParentSideBar />
      <div >
        <MainParentDashboard />
      </div>
    </div>
  )
}

export default ParentDashboard;
