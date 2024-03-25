// import {EmailValidator, FileValidator, PasswordValidator} f!rom "./validator";

export class ValidatorFilter {

    constructor() {
        this.validatorMap = new Map();
        // this.validatorMap.set("password", new PasswordValidator());
        // this.validatorMap.set("email", new EmailValidator());
        // this.validatorMap.set("file", new FileValidator());
    }

    getFilter(value) {
        return this.validatorMap.get(value);
    }

}
