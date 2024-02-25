import React, {useState} from 'react'
import '../../../styles/auth/signup/parentSignUp.css'
import Icon from '../../../assets/png/logo/thrive-fuse-logo-white-transparent.png'
import ReusableSignUpComponent from '../../reusableComponents/reusableSignUpComponent.jsx'
import axios from "axios";
import {SERVER_BASE_URL} from "../../../utils/constants";
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';


const initialSignUpData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
}
const ParentSignUp = () => {

    const [signUpData, setSignUpData] = useState(initialSignUpData)
    const navigate = useNavigate()
    function handleInputChange(event){
        event.preventDefault();
        setSignUpData((prevState)=>({
            ...prevState, [event.target.id]: event.target.value,
        }))
    }

    function handleFormSubmission(event) {
        console.log("In submit")
        console.log(signUpData)
        event.preventDefault();
        axios.post(`${SERVER_BASE_URL}/parent/register`, signUpData)
        .then((response) => {
            if(response.data.statusCode === 201)
                navigate("/sign-up-next-steps")
            console.log(response.data)
        })
        .catch((error)=>{
            console.log("error message"+error.message)
        })
    }

    return (
        <div className={'Parent-SignUp-Main-Frame'}>
            <div className={"Parent-SignUp-Inner-Frame"}>
                <div className={"Parent-Action-Preview-On-SignUp-Page"}>
                    <img src={Icon} alt="Logo-View-On-SignUp-Page" />
                </div>
                <form onSubmit={handleFormSubmission} className={'Parent-SignUp-Form'}>
                    <ReusableSignUpComponent handleInputChange={handleInputChange}/>
                    <div className={'SignUp-Button-Div'}>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ParentSignUp;
