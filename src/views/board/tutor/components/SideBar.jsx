import React from "react";
import generalImage from "../../../../assets/blue back ground cross.jpeg";
import SideBarItem from "./reuseables/SideBarItem";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { GiCandlestickPhone } from "react-icons/gi";
import { FaClipboardCheck } from "react-icons/fa";
import "../../../../styles/dashboard/tutordashboard/TutorSideBar.css";

function SideBar() {
  return (
    <div className="sidebar-header">
      <div className="log">
        <img className="logo" src={generalImage} alt="" />
      </div>
      <div className="side-options">
        <BsGrid1X2Fill
          style={{
            width: "20px",
            height: "20px",
            marginLeft: "30px",
          }}
        />
        <button className="button">Dashboard</button>

        {/* {true && <div className="h-6 w-2 absolute left-44 bg-cyan-700 "></div>} */}
      </div>

      <div className="side-options">
        <GrResources
          style={{
            width: "20px",
            height: "20px",
            marginLeft: "30px",
          }}
        />
        <button className="button">Resources</button>
      </div>

      <div className="side-options">
        <FaBookReader
          style={{
            width: "20px",
            height: "20px",
            marginLeft: "30px",
          }}
        />
        <button className="button">Students</button>
      </div>

      <div className="side-options">
        <FaClipboardCheck
          style={{
            width: "20px",
            height: "20px",
            marginLeft: "30px",
          }}
        />
        <button className="button">Assesment</button>
      </div>
      <div className="side-options">
        <GiCandlestickPhone
          style={{
            width: "20px",
            height: "20px",
            marginLeft: "30px",
          }}
        />
        <button className="button">LiveSession</button>
      </div>
      <div className="buttons">
        <button className="settings">Settings</button>
      </div>
      <div className="buttons1">
        <button className="logout">Log out</button>
      </div>
    </div>
  );
}

export default SideBar;
