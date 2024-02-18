import { type } from '@testing-library/user-event/dist/type';
import { string } from 'prop-types'
import React from 'react'

interface InputProps  {
    name?: string;
    type?: string;
    placeholder: string;
    className?: string;
    value?: string;
    onCHange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
const  CustomInput: React.FC<InputProps> = (props) => {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        type={props.type || "text"}
        className={`defaultClassName ${props.className || ""}`}
        value={props.value || ""}
        onChange={props.onChange}

      />
    </div>
  )
}

export default custominput


