import React from 'react'
import PropTypes from 'prop-types'
import CustomInput from '../ReuseableComponents/CustomInput'

function TutorRegForm(props) {
  return (
    <div>
      <CustomInput type={'text'} placholder={props.FirstName}  handleChange={props.handleTutorInfo} name='firstName' required />
    </div>
  )
}

TutorRegForm.propTypes = {

}

export default TutorRegForm

