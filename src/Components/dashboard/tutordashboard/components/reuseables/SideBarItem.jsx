import React from 'react'

function SideBarItem({icon, name, condition}) {
  return (
    <div className="side-options flex flex-row">
        {icon}
        <button className="ml-5 hover:bg-cyan-100 pr-3 pl-3 focus:bg-cyan-100">
        {name}
        </button>
        {condition && <div className="h-6 w-2 ml-8 bg-cyan-700 "></div>}
  </div>
  )
}

export default SideBarItem
