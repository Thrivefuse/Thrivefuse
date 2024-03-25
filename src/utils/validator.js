import {
    EMAIL_REGEX_PATTERN,
    EMPTY_STRING, INVALID_EMAIL_FORMAT_MESSAGE,
    INVALID_PASSWORD_FORMAT_MESSAGE,
    INVALID_PASSWORD_MESSAGE,
    PASSWORD_REGEX_PATTERN
} from "./constants";

export class InputValidationFilter {
    validate(event){

    }
}

export class PasswordValidator extends InputValidationFilter{

    constructor(event, setInvalidPasswordMessage) {
        super();
        this.validate(event, setInvalidPasswordMessage)
    }

    validate(event, setInvalidPasswordMessage) {
        let passwordEventTarget = event.target;
        passwordEventTarget.setCustomValidity(EMPTY_STRING);
        if (passwordEventTarget.checkValidity()){
            if (!PASSWORD_REGEX_PATTERN.test(passwordEventTarget.value)){
                setInvalidPasswordMessage(INVALID_PASSWORD_MESSAGE);
                passwordEventTarget.setCustomValidity(INVALID_PASSWORD_FORMAT_MESSAGE);
                passwordEventTarget.reportValidity();
            }
            else{
                setInvalidPasswordMessage(EMPTY_STRING)
            }
        }
    }
}

export class EmailValidator extends InputValidationFilter{

    constructor(event, setInvalidEmailMessage) {
        super();
        this.validate(event, setInvalidEmailMessage)
    }

    validate(event, setInvalidEmailMessage) {
        let emailEventTarget = event.target;
        emailEventTarget.setCustomValidity(EMPTY_STRING);
        if (!EMAIL_REGEX_PATTERN.test(emailEventTarget.value)){
            console.log(EMAIL_REGEX_PATTERN.test(emailEventTarget.value))
            setInvalidEmailMessage(INVALID_EMAIL_FORMAT_MESSAGE)
            emailEventTarget.setCustomValidity(INVALID_EMAIL_FORMAT_MESSAGE)
            emailEventTarget.reportValidity();
        }
        else {
            setInvalidEmailMessage(EMPTY_STRING);
        }
    }
}

export class FileValidator extends InputValidationFilter{

    constructor(event) {
        super();
        this.validate(event);
    }

    validate(event) {
        super.validate(event);
    }
}
export class DateValidator extends InputValidationFilter{
    constructor(event) {
        super();
        this.validate(event);
    }

    validate(event) {
        super.validate(event);
    }
}
