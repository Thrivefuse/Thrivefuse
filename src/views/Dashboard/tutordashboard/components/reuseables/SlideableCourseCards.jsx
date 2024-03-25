import React from "react";
import CoursesCard from "../CoursesCard";

function SlideableCourseCards({valuesToDisplay}) {
  return <div className="id=slider scrollbar-hide flex items-center w-full h-full overflow-x-scroll scroll white-nowrap scroll-smooth ">
  {valuesToDisplay.map((value, index) => (
    <CoursesCard 
    progress={value.progress}
    image={value.image}
    courseTitle={value.courseTitle}
    />
  ))}
</div>;
}

export default SlideableCourseCards;
