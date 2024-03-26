import React from "react";
import LinearWithValueLabel from "../../reusableComponents/ProgressBar";



const activeCourses = [
{
    courseTitle: 'Literature', 
    image: './',
    progress: 80,
},
{
  courseTitle: 'Mathematics', 
  image: './',
  progress: 30,
},
{
  courseTitle: 'Physics', 
  image: './',
  progress: 40,
},
{
  courseTitle: 'Java', 
  image: './',
  progress: 20,
},
{
  courseTitle: 'Python', 
  image: './',
  progress: 40,
},
]
function Courses() {
  return (
    <div>
      <div className="h-20 bg-blue-200  m-3 mb-5 shadow-md shadow-gray-500 rounded"></div>
      <p className="ml-5 font-semibold "> Registered Courses</p>
      <div className="flex flex-row snap-proximity snap-x ">
      <div className="course-card-container shadow-md shadow-slate-600 snap-center">
        <div className="course-inner-container " >
          <div className="img-title-div">
            <img src={activeCourses[0].image} alt="" />
            <span>{activeCourses[0].courseTitle}</span>
          </div>
          <div className="pt-9  w-36">
            <LinearWithValueLabel value={activeCourses[0].progress} />
            {/* <span>{activeCourses[0].progress}%</span> */}
          </div>
        </div>
      </div>

      </div>
      
    </div>
  );
}

export default Courses;
