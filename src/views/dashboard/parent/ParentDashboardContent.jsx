import * as React from "react";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
import "../../../styles/board/parentdashboard/parentDashboardContent.css";

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function MainParentDashboard() {
  const ArrayOfCOurse = [
    {
      name: "Software Development",
      List: [
        "Front-End Development",
        "Backend-Development",
        "Cloud Computing",
        "Devops",
      ],
    },
    {
      name: "Core Education",
      List: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Literature",
        "Java",
        "Python",
      ],
    },
    {
      name: "Soft Skills",
      List: [
        "Communication",
        "Enterpreneur",
        "Problem Solving",
        "Team Work",
        "Leadership",
        "Emotional Intelligence",
      ],
    },
  ];
  return (
    <div className="parent-content">
      <div className="profile-head">
        <div className="parent-avatar-notification">
          <NotificationsNoneTwoToneIcon
            style={{ fontSize: "3rem", color: "var(--main-color)" }}
          />
        </div>
        <div className="parent-avatar-container">
          <Avatar {...stringAvatar("Ahmed hgd")} />
        </div>
      </div>

      <div className="parent">
        <h1>My Ward</h1>
        <div className="wards-info"></div>
      </div>
      <div className="parent">
        <h1>Explore our skills</h1>
        <div className="our-skills">
          {ArrayOfCOurse.map((outerItem, outerIndex) => (
            <div key={outerIndex} className="group-skills">
              <h3>{outerItem.name}</h3>
              <ul>
                {outerItem.List.map((innerItem, innerIndex) => (
                  <li key={innerIndex}>{innerItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
