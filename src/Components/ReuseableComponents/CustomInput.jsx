import { type } from '@testing-library/user-event/dist/type';
import { string } from 'prop-types'
import React from 'react'

const custominput = (props: InputProps) => {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        type={props.type || "text"}
        className={props.className}

      />
    </div>
  )
}

export default custominput


