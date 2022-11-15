import React, { useState } from 'react';
import TextInput from "../../components/textInput";
import { useNavigate } from "react-router-dom";
import { validateName } from '../../services/validation';
import Error from '../../components/error';


function NameAndAgeSignupPage({ firstName, lastName, handleChange, businessCard }) {
    const navigate = useNavigate();
    const [error, setError] = useState('')
    
    async function handleSubmit(e) {
        e.preventDefault()
        setError('')

        const {error} = validateName({firstName, lastName})

        if(error) return setError(error.details[0].message)


        navigate('/walk/signup/job');
    }


    return (
        <div className='signup'>
        <div className="signup-left">
            <h1 className='mb-30'>What's your name?</h1>
            <form onSubmit={handleSubmit}>
                <TextInput
                        label="First Name"
                        onChange={handleChange}
                        name="firstName"
                        value={firstName}
                    />

                <TextInput
                        label="Last Name"
                        onChange={handleChange}
                        name="lastName"
                        value={lastName}
                />
                <div className="btn-container">
                    <button onClick={() => navigate('/walk/signup')} className='blue xl'>
                        <p className=''>Back</p>
                    </button>
                    <button type="submit" className='blue xl'>
                        <p className=''>Next</p>
                    </button>
                </div>
            </form>

            {error && <Error error={error}/>}
        </div>
        <div className="signup-right">
            {businessCard}
        </div>
    </div>
    );
}

export default NameAndAgeSignupPage;