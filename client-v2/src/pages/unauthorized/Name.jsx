import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { loginPage, jobFromName, signupCityPage } from "../../data/welcomeNav";
import { validateName } from '../../services/validation';
import Error from '../../components/error';
import Input from '../../components/input';

function NameSignupPage({firstName, lastName, handleChange}) {
    const navigate = useNavigate();

    const [error, setError] = useState('')
    
    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        
        const {error} = validateName({firstName, lastName})
        
        if(error) return setError(error.details[0].message)
        
        
        navigate(jobFromName);
    }

    return (
        <div className="welcome-modal">
            <div className="welcome-back">
                <button onClick={() => navigate(signupCityPage)} className='black'>
                        <h3 className="">Back</h3>
                </button>
            </div>


            <form onSubmit={handleSubmit} className="flex flex-column jc-center span100h span100">
                <div className="mb-20">
                    <h1 className='mb-5'>What's your name?</h1>
                    <h3>Your name will be visible to others on Rambler.</h3>
                </div>
                <div className="breaker-hor-2 mb-20"></div>

                <div className="mb-20">
                    <Input 
                        label='First Name'
                        extraStyling='black welcome-name'
                        onChange={handleChange}
                        value={firstName}
                        name="firstName"
                        />
                    <Input 
                        label='Last Name'
                        extraStyling='black welcome-name'
                        onChange={handleChange}
                        value={lastName}
                        name="lastName"
                    />
                </div>



                <div className="span100 flex ai-center jc-center">
                    <button type='submit' className='large black span100'>
                        <h3 className="large">Next</h3>
                    </button>

                </div>

                
                {error && <Error error={error}/>}
            </form>

            <div className='welcome-redirect flex jc-center'>
                <h3>Already have an account? <span onClick={() => navigate(loginPage)} className='pointer'>Login!</span></h3>
            </div>

        </div>
    );
}

export default NameSignupPage;