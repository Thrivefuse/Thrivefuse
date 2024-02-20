import React from 'react'
// import PropTypes from 'prop-types'



const AuthInput = React.memo((props) => {

  return (
    <p className="AuthInput-PTag">
        <label>{props.inputLabel}</label>
        <input 
            id={props.id} 
            defaultValue={props.defaultValue}
            onInvalid={props.onInvalid}
            name={props.name}
            type={props.inputType}
            className={props.className}
            onChange={props.onChange}
            required={props.required}
            placeholder={props.inputPlaceHolder}
            pattern={props.regexPattern}
            minLength={props.minimumLength}
            maxLength={props.maximumLength}
            spellCheck={props.spellCheck}
        />
    </p>
  )
})

AuthInput.propTypes = {}

export default AuthInput