import React, { useState } from 'react';
import TextInput from "../../components/textInput";
import { useNavigate } from "react-router-dom";
import { validateLoginInfo } from '../../services/validation';
import Error from '../../components/error';
import CTAError from '../../components/ctaError';

function EmailAndPasswordSignupPage({handleChange, email, password, confirmPassword, businessCard, onSubmit, extraContentError, skipCTA}) {
    const navigate = useNavigate();

    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')

        const {error} = validateLoginInfo({email, password})
        if(error) return setError(error.details[0].message)
        if(confirmPassword !== password) return setError('Passwords do not match!')

        onSubmit()
    }

    return (
        <div className='signup'>
        <div className="signup-left">
            <h1 className='mb-30 fc-green'>Lets Make it Official!</h1>
            <form onSubmit={handleSubmit}>
                <TextInput
                        label="Email"
                        onChange={handleChange}
                        name="email"
                        value={email}
                    />

                <TextInput
                        label="Password"
                        onChange={handleChange}
                        name="password"
                        value={password}
                        type={'password'}
                />

                <TextInput
                        label="Confirm Password"
                        onChange={handleChange}
                        name="confirmPassword"
                        value={confirmPassword}
                        type={'password'}
                />

                <div className="btn-container">
                    <button onClick={() => navigate('/walk/signup/name')} className='blue xl'>
                        <p className=''>Back</p>
                    </button>
                    <button type="submit" className='blue xl'>
                        <p className='mr-10'>Go Walk!</p>
                        <p className=''>🥾</p>
                    </button>
                </div>
            </form>
            
            {error && <Error error={error}/>}
            {extraContentError && <CTAError error={extraContentError} action={skipCTA}/>}
        </div>
        <div className="signup-right">
            {
                businessCard
            }
        </div>
    </div>
    );
}

export default EmailAndPasswordSignupPage;