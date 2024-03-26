import React from 'react'

import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function Slider({valueToSlide}) {
    const slideLeft = () => {
        // const slider = document.getElementById("leftSlide");
        // slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        // const slider = document.getElementById("rightSlide");
        // slider.scrollLeft = slider.scrollLeft + 500
    }
  return (
    <div className="relative ml-3  flex items-center">
    <GrFormPrevious id="leftSlide" className="opacity-50 cursor-pointer hover:opacity-100" size={47} color="#4682B4"  onClick={slideLeft}/>
    {valueToSlide}

    <MdNavigateNext id="rightSlide" className="opacity-50 cursor-pointer hover:opacity-100" size={47} color="#4682B4" onClick={slideRight} />
      </div>
  )
}

export default Slider
