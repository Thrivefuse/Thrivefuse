import React from 'react'
import '../../../../styles/dashboard/tutordashboard/CourseCard.css';
import LinearWithValueLabel from './ProgressBar'

function CoursesCard({courseTitle, image, progress}) {
  return (
    <div id={courseTitle} className=' bg-white rounded mt-2 mr-9 mb-7 shadow-md shadow-slate-600 w-60 pr-5 inline-block cursor-pointer hover:scale-105 ease-in-out-duration-300'>
       <div className=' ml-5 mt-3' >
       <div className='img-title-div flex pt-4'  >
            <img src={image} alt='' width={35} height={35}/>
            <span className='ml-24'>{courseTitle}</span>
        </div>
        <div className='pt-9  w-44 mb-4 ml-2 '>
          <LinearWithValueLabel value={progress} />
      </div>
       </div>
         </div>
  )
}

export default CoursesCard
