import React, {useState} from 'react'
import '../../../styles/auth/signup/parentSignUp.css'
import Icon from '../../../assets/png/logo/thrive-fuse-logo-white-transparent.png'
import ReusableSignUpComponent from '../../reusableComponents/reusableSignUpComponent.jsx'
import axios from "axios";
import {SERVER_BASE_URL} from "../../../utils/constants";


const initialSignUpData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
}
const ParentSignUp = () => {

    const [signUpData, setSignUpData] = useState(initialSignUpData)

    function handleInputChange(event){
        event.preventDefault();
        setSignUpData((prevState)=>({
            ...prevState, [event.target.id]: event.target.name,
        }))
    }

    function handleFormSubmission(event) {
        console.log("In submit")
        event.preventDefault();
        axios.post(`${SERVER_BASE_URL}/parent/register`, signUpData)
            .then((response) => {
                // if (response.data.statusCode === 201)
                //     console.log(response.data)
                console.log(response.data)
            }).catch((error)=>{
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
                        <button type="submit" style={{height : '3rem'}}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ParentSignUp;
