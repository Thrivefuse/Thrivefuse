import React from "react";
import CoursesCard from "../components/CoursesCard";
import generalInage from '../../../../assets/blue back ground cross.jpeg'
import GeneralCourse from "../components/reuseables/GeneralCoursee";


const activeCourses = [
{
    courseTitle: 'Literature', 
    image: generalInage,
    progress: 80,
},
{
  courseTitle: 'Mathemstics', 
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
const availableCourses = [
  {
      courseTitle: 'Geometry', 
      image: generalInage,
      progress: 0,
      description: 'This is how the world goes rouns, pls don ask any more questions plz. thats akk fo today guys'
  },
  {
    courseTitle: 'Economics', 
    image: './',
    progress: 30,
    description: 'This is how the world goes rouns, pls don ask any more questions plz. thats akk fo today guys',
  },
  {
    courseTitle: 'Corel Draw', 
    image: './',
    progress: 40,      
    description: 'This is how the world goes rouns, pls don ask any more questions plz. thats akk fo today guys',
    },
  {
    courseTitle: 'Go Lang', 
    image: './',
    progress: 20,
    description: 'This is how the world goes rouns, pls don ask any more questions plz. thats akk fo today guys',
  
  },
  {
    courseTitle: 'French', 
    image: './',
    progress: 40,
    description: 'This is how the world goes rouns, pls don ask any more questions plz. thats akk fo today guys',
  },
  ]
function Student() {
  return (
    <div>
      <div className="h-20 bg-blue-200  m-3 mb-5 shadow-md shadow-gray-500 rounded"></div>
      <p className="ml-5 font-semibold "> Registered Courses</p>
        <CoursesCard image={activeCourses[0].image} progress={activeCourses[0].progress} courseTitle={activeCourses[0].courseTitle}/>
      <p>Other available courses</p>
      <div>
        <GeneralCourse />
      </div>
    </div>
  );
}

export default Student;
