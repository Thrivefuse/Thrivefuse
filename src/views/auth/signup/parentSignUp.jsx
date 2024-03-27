import React, {useState} from 'react'
import '../../../styles/auth/signup/parentSignUp.css'
import Icon from '../../../assets/png/logo/thrive-fuse-logo-white-transparent.png'
import ReusableSignUpComponent from '../../reusableComponents/reusableSignUpComponent.jsx'
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {
    DEPLOYED_SERVER_BASE_URL, EMPTY_STRING, PASSWORD_REGEX_PATTERN,
    INVALID_PASSWORD_MESSAGE, INVALID_PASSWORD_FORMAT_MESSAGE,
    EMAIL_REGEX_PATTERN, INVALID_EMAIL_FORMAT_MESSAGE
} from "../../../utils/constants";
import { useNavigate } from 'react-router-dom';

const initialSignUpData = {
    firstName: EMPTY_STRING,
    lastName: EMPTY_STRING,
    email: EMPTY_STRING,
    password: EMPTY_STRING,
    phoneNumber: EMPTY_STRING,
}
const ParentSignUp = () => {

    const [signUpData, setSignUpData] = useState(initialSignUpData)
    const navigate = useNavigate()
    const [invalidEmailMessage, setInvalidEmailMessage] = useState(EMPTY_STRING)
    let [invalidPasswordMessage, setInvalidPasswordMessage] = useState(EMPTY_STRING)


    function verifyPasswordValidity(event) {
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

    function verifyEmailValidity(event) {
        let emailEventTarget = event.target;
        emailEventTarget.setCustomValidity(EMPTY_STRING);
        if (!EMAIL_REGEX_PATTERN.test(emailEventTarget.value)){
            console.log(EMAIL_REGEX_PATTERN.test(emailEventTarget.value))
            setInvalidEmailMessage(INVALID_EMAIL_FORMAT_MESSAGE)
            emailEventTarget.setCustomValidity(INVALID_EMAIL_FORMAT_MESSAGE)
            emailEventTarget.reportValidity();
        }
        else {
            setInvalidEmailMessage(EMPTY_STRING)
        }
    }

    function handleInputChange(event){
        if (event.target.id === "password")
            verifyPasswordValidity(event)
        if (event.target.id === "email")
            verifyEmailValidity(event)
        else {

        }
        event.preventDefault();
        setSignUpData((prevState)=>({
            ...prevState, [event.target.id]: event.target.value,
        }))
    }

    function handleFormSubmission(event) {
        toast.info("In Submit", {position: "top-right"})
        event.preventDefault();
        axios.post(`${DEPLOYED_SERVER_BASE_URL}/parent/register`, signUpData)
        .then((response) => {
            toast.success("Successful Registration",
                {
                    position: "top-right",
                    hideProgressBar: false,
                    pauseOnFocusLoss: false,
                    pauseOnHover: false,
                    style: {
                        height: "20vh",
                        width: "40vw",

                    },
                    icon: {
                        theme: 'colored',
                    }
                }
            )
            if(response.data.statusCode === 201) {
                toast.success("Successful Registration", {position: "top-right"})
                navigate("/sign-up-next-steps")
            }
            console.log(response.data)
        })
        .catch((error)=>{
            toast.error("Unsuccessful Registration", {position: "top-right"})
            console.log("error message"+error.message)
        })
    }

    function handleInvalidData(event) {

    }

    return (
        <div className={'Parent-SignUp-Main-Frame'}>
            <ToastContainer/>
            <div className={"Parent-SignUp-Inner-Frame"}>
                <div className={"Parent-Action-Preview-On-SignUp-Page"}>
                    <img src={Icon} alt="Logo-View-On-SignUp-Page" />
                </div>
                <form onSubmit={handleFormSubmission} className={'Parent-SignUp-Form'}>
                    <ReusableSignUpComponent
                        handleInputChange={handleInputChange} onInvalid={handleInvalidData}
                        invalidPasswordMessage={invalidPasswordMessage} invalidEmailMessage={invalidEmailMessage}
                    />
                    <div className={'SignUp-Button-Div'}>
                        <button type="submit" style={{height : '3rem'}}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ParentSignUp;
/*
*
* */