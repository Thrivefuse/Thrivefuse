import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import AuthInput from './AuthInput'

const ReusableSignUpComponent = React.memo((props) => {
    useEffect(()=>console.log('Hello at Reusable'), [])
    
  return (
    <>
        <AuthInput 
            onChange={props.handleInputChange} inputLabel={'First Name'} 
            inputPlaceHolder={'Bob'} inputType={'text'}
            required={true}
        />
        <AuthInput 
            onChange={props.handleInputChange} inputLabel={'Last Name'} 
            inputPlaceHolder={'Dylan'} inputType={'text'}
            required={true}
        />
        <AuthInput 
            onChange={props.handleInputChange} inputLabel={'Email'} 
            inputPlaceHolder={'dylanbob@gmail.com'} inputType={'email'}
            required={true} regexPattern={props.emailRegex}
        />
        <AuthInput 
            onChange={props.handleInputChange} inputLabel={'Password'} 
            inputPlaceHolder={'*********'} inputType={'password'}
            required={true} regexPattern={props.passwordRegex}
        />
        <AuthInput 
            onChange={props.handleInputChange} inputLabel={'Phone Number'} 
            inputPlaceHolder={'+234 703 617 461 7'} inputType={'tel'}
            required={true}
        />
    </>
  )
})

ReusableSignUpComponent.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    buttonComponent: PropTypes.element
}

export default ReusableSignUpComponent;