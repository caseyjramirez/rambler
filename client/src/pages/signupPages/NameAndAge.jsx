import React from 'react';
import TextInput from "../../components/textInput";
import { useNavigate } from "react-router-dom";


function NameAndAgeSignupPage({ firstName, lastName, handleChange, businessCard }) {
    const navigate = useNavigate();
    
    async function handleSubmit(e) {
        e.preventDefault()
    
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
        </div>
        <div className="signup-right">
            {businessCard}
        </div>
    </div>
    );
}

export default NameAndAgeSignupPage;