import React, { useEffect, useState } from 'react';
import Icon from '../../../assets/png/logo/thrive-fuse-logo-white-transparent.png'
import ReusableSignUpComponent from '../../reusableComponents/reusableSignUpComponent.jsx'
import '../../../styles/auth/signup/tutorSignUp.css'
import axios from 'axios';
import { EMAIL_REGEX_PATTERN, PASSWORD_REGEX_PATTERN, SERVER_BASE_URL } from '../../../utils/constants.js';

const initialTutorSignUpData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    skillChoice: '',
    tutorsResume: File,
    professionalQualification: File
}

const TutorSignUp = () => {
    const [progressState, setProgressState] = useState(0)
    const [qualificationsFileInfo, setQualificationsFileInfo] = useState('')
    const [resumeFileInfo, setResumeFileInfo] = useState('')
    const [tutorSignUpData, setTutorSignUpData] = useState(initialTutorSignUpData)

    const progressStyle = {
        backgroundColor: '#2257bf',
        color: 'white'
    }

   useEffect(()=>console.log('Hello'), [resumeFileInfo])
    function handleInputChange(event){
        event.preventDefault();
        setTutorSignUpData((prevState)=>({
            ...prevState, [event.target.name]: event.target.value,
        }))   
        console.log(' ==> ', event.target.value);
    }
    
    function sendSignUpDataToBackend(event){
        event.preventDefault();
        const data = new FormData()
        data.append('firstName', tutorSignUpData.firstName)
        data.append('lastName', tutorSignUpData.lastName)
        data.append('email', tutorSignUpData.email)
        data.append('password', tutorSignUpData.password)
        data.append('phoneNumber', tutorSignUpData.phoneNumber)
        data.append('tutorsResume', tutorSignUpData.tutorsResume)
        data.append('professionalQualification', tutorSignUpData.professionalQualification)

        axios.post(`${SERVER_BASE_URL}/tutor/register`, data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    function changeProgressState(event, value){
        event.preventDefault();
        setProgressState(progressState+value)
    }

    function handleQualificationsFileChange(event){
        event.preventDefault();
        setQualificationsFileInfo(getFileInfo(qualificationsFileInfo, event));
    }

    function handleResumeFileChange(event){
        event.preventDefault();
        setResumeFileInfo(getFileInfo(resumeFileInfo, event));
    }

    function getFileInfo(fileInfo, event) {
        (fileInfo) = '';
        const infoBuilder = [];
        infoBuilder.push(`File name: ${event.target.files[0].name ? event.target.files[0].name :'No Name'}, file size: ${returnFileSize(event.target.files[0].size)}.`);
        fileInfo = infoBuilder.join();
    
        function returnFileSize(number) {
            if (number < 1024) {
                return `${number}bytes`;
            } else if (number >= 1024 && number < 1048576) {
                return `${(number / 1024).toFixed(1)}KB`;
            } else if (number >= 1_048_576) {
                return `${(number / 1_048_576).toFixed(1)}MB`;
            }
        }
        return fileInfo;
    }

    return (
        <div className={'Tutor-SignUp-Main-Frame'}>
            <div className={"Tutor-SignUp-Inner-Frame"}>
                <div className={"Logo-View-On-SignUp-Page"}>
                    <img src={Icon} alt="" />
                </div>
                <form onSubmit={sendSignUpDataToBackend} className={'Tutor-SignUp-Form'}>
                    {/*{progressState === 0 &&*/}
                        <div className="Progress-Bar-Main-Frame">
                            <div style={progressState >= 0 ? progressStyle : undefined} className="Circle1">1</div>
                            <div className="Main-Bar-Frame">
                                <div style={progressState > 0? progressStyle: undefined} className="Bar1"/>
                                <div style={progressState > 1? progressStyle: undefined} className="Bar2"/>
                            </div>
                            <div className="Circle2">2</div>
                        </div>
                    {/*}*/}
                    <div className={'Tutor-SignUp-Component'}>
                        {progressState === 0 && <ReusableSignUpComponent 
                            emailRegex={EMAIL_REGEX_PATTERN} 
                            passwordRegex={PASSWORD_REGEX_PATTERN} 
                            signUpData={tutorSignUpData} handleInputChange={handleInputChange}  
                        />}
                        <div className="Page-2">
                            {progressState === 1 &&
                                <>
                                    <div className={'Select-Wrapper'}>
                                        <label htmlFor="Skill-Selection">Select A Skill</label>
                                        <select 
                                            name={'skillChoice'} defaultValue={'Please Pick A Skill'} 
                                            id={'Skill-Selection'} onChange={handleInputChange}
                                            required
                                        >
                                            {/* <option default>Please select A skill</option> */}
                                            <option value="Programming">Programming</option>
                                            <option value="Entrepreneurship and Business Development">Entrepreneurship and Business Development</option>
                                            <option value="Emotional Intelligence">Emotional Intelligence</option>
                                            <option value="Critical Thinking">Critical Thinking</option>
                                        </select>
                                    </div>
                                    <div className={'File-Upload-Wrapper'}>
                                        <label htmlFor="Qualification-File">Click To Upload Qualification </label>
                                        <input 
                                            onChange={handleQualificationsFileChange} type="file" 
                                            name="professionalQualification" id="Qualification-File"
                                            required accept={'.pdf, .docx, .doc, .txt, .rtf, .jpg, .png'}
                                        />
                                        <span id='Qualification-Info'>{qualificationsFileInfo}</span>
                                    </div>
                                    <div className={'File-Upload-Wrapper'}>
                                        <label htmlFor="Resume-Info">Click To Upload Resume</label>
                                        <input  
                                            onChange={handleResumeFileChange} type="file" 
                                            name="tutorsResume" id="Resume-Info"
                                            required accept={'.pdf, .docx, .doc, .txt, .rtf, .jpg, .png'}
                                        />
                                        <span id='Resume-Info'>{resumeFileInfo}</span>
                                    </div>
                                </>
                            }
                        </div>                        
                        <div className={'Tutor-SignUp-Button-Div'}>
                            {progressState === 0 && <button onClick={(event)=>{
                                event.preventDefault();
                                changeProgressState(event, 1)
                            }}>Next</button>}
                            {progressState === 1 && <button onClick={(event)=>{
                                event.preventDefault();
                                changeProgressState(event, -1);
                            }}>Back</button>}
                            {progressState === 1 && <button type={'submit'}>Sign Up</button>}

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default TutorSignUp;