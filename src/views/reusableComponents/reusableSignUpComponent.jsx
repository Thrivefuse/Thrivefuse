import React from 'react'
import PropTypes from 'prop-types'
import AuthInput from './AuthInput'

const ReusableSignUpComponent = React.memo((props) => {
    
  return (
    <div className={"Reusable-Sign-Up-Component-Frame"}>
        <AuthInput 
            onChange={props.handleInputChange} inputLabel={'First Name'} 
            inputPlaceHolder={'Bob'} inputType={'text'}
            required={true} name={'firstName'} id={'firstName'}
        />
        <AuthInput 
            onChange={props.handleInputChange} inputLabel={'Last Name'} 
            inputPlaceHolder={'Dylan'} inputType={'text'}
            required={true} name={'lastName'} id={'lastName'}
        />
        <AuthInput 
            onChange={props.handleInputChange} inputLabel={'Email'} 
            inputPlaceHolder={'dylanbob@gmail.com'} inputType={'email'}
            required={true} regexPattern={props.emailRegex} 
            name={'email'} id={'email'}
        />
        <AuthInput 
            onChange={props.handleInputChange} inputLabel={'Password'} 
            inputPlaceHolder={'*********'} inputType={'password'}
            required={true} regexPattern={props.passwordRegex}
            name={'password'} id={'password'}
        />
        <AuthInput 
            onChange={props.handleInputChange} inputLabel={'Phone Number'} 
            inputPlaceHolder={'+234 703 617 461 7'} inputType={'tel'}
            required={true} name={'phoneNumber'} id={'phoneNumber'}
        />
    </div>
  )
})

ReusableSignUpComponent.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    buttonComponent: PropTypes.element
}

export default ReusableSignUpComponent;