import React from 'react'
import PropTypes from "prop-types";

const AuthInput = (props) => {

    return (
    <p className="AuthInput-PTag">
        <label>{props.inputLabel+"\t"}
            <label style={{fontSize: 15, color: "red"}}>{props.invalidInputMessage}</label>
        </label>
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
            accept={props.acceptedFileExtensions}
        />
    </p>
  )
}

AuthInput.propTypes = {
    id: PropTypes.string,
    defaultValue: PropTypes.string,
    onInvalid: PropTypes.func,
    name: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    inputPlaceHolder: PropTypes.string.isRequired,
    regexPattern: PropTypes.string,
    minimumLength: PropTypes.number,
    maximumLength: PropTypes.number,
    spellCheck: PropTypes.bool,
    invalidInputMessage: PropTypes.string,
    acceptedFileExtensions: PropTypes.string
}

export default AuthInput