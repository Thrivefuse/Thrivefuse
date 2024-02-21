import React from 'react'
import '../../../styles/auth/signup/parentSignUp.css'
import Icon from '../../../assets/png/logo/thrive-fuse-logo-white-transparent.png'
import ReusableSignUpComponent from '../../reusableComponents/reusableSignUpComponent.jsx'

const ParentSignUp = () => {

    function handleInputChange(event){
        event.preventDefault();

    }
    return (
        <div className={'Parent-SignUp-Main-Frame'}>
            <div className={"Parent-SignUp-Inner-Frame"}>
                <div className={"Parent-Action-Preview-On-SignUp-Page"}>
                    <img src={Icon} alt="" />
                </div>
                <form className={'Parent-SignUp-Form'} action={""}>
                    <ReusableSignUpComponent handleInputChange={handleInputChange}/>
                    <div className={'SignUp-Button-Div'}>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ParentSignUp