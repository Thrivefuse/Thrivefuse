import React from 'react'
import '../../styles/dashboard/tutordashboard/CourseCard.css'
import LinearWithValueLabel from './ProgressBar'

function CoursesCard({courseTitle, image, progress}) {
  return (
    <div className='course-card-container shadow-md shadow-slate-600  '>
       <div className='course-inner-container'>
       <div className='img-title-div'>
            <img src={image} alt=''/>
            <span>{courseTitle}</span>
        </div>
        <div className='pt-9  w-36'>
          <LinearWithValueLabel value={progress} />
      </div>
       </div>
         </div>
  )
}

export default CoursesCard
