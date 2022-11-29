import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { aroundMe, jobFromName, loginPage } from "../../data/welcomeNav";
import { validateLoginInfo } from '../../services/validation';

import Error from '../../components/error';
import Input from '../../components/input';



function EmailSignupPage({ email, password, confirmPassword, handleChange, onSubmit, signupError }) {
    const navigate = useNavigate();


    const [error, setError] = useState('')
    
    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        
        const {error} = validateLoginInfo({email, password})
        if(error) return setError(error.details[0].message)
        
        if(confirmPassword !== password) return setError('Passwords do not match!')

        onSubmit()
    }

    return (
        <div className="welcome-modal">
            <div className="welcome-back">
                <button onClick={() => navigate(jobFromName)} className='black'>
                        <h3 className="">Back</h3>
                </button>
            </div>


            <form onSubmit={handleSubmit} className="flex flex-column jc-center span100h span100">
                <div className="mb-20">
                    <h1 className='mb-5'>Let's Make it official.</h1>
                    <h3>Your Email will be not be visible to others on Rambler.</h3>
                </div>
                <div className="breaker-hor-2 mb-20"></div>

                <div className="mb-20">
                    <Input 
                        label='Email'
                        extraStyling='black welcome-name'
                        onChange={handleChange}
                        value={email}
                        name="email"
                    />

                    <Input 
                        label='Password'
                        type='password'
                        extraStyling='black welcome-name'
                        onChange={handleChange}
                        value={password}
                        name="password"
                    />

                    <Input 
                        label='Confirm'
                        type='password'
                        extraStyling='black welcome-name'
                        onChange={handleChange}
                        value={confirmPassword}
                        name="confirmPassword"
                    />
                </div>



                <div className="span100 flex ai-center jc-center">
                    <button type='submit' className='large black span100'>
                        <h3 className="large">Go!</h3>
                    </button>

                </div>

                
                {error && <Error error={error}/>}
                {signupError && <Error error={signupError}/>}
            </form>

            <div className='welcome-redirect flex jc-center'>
                <h3>Already have an account? <span onClick={() => navigate(loginPage)} className='pointer'>Login!</span></h3>
            </div>

        </div>
    );
}

export default EmailSignupPage;