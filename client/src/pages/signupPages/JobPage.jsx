import React, { useState, useEffect } from 'react';
import TextInput from "../../components/textInput";
import { useNavigate } from "react-router-dom";
import { getIndustries } from '../../services/services';
import DropDown from '../../components/dropDown';

function JobPage({company, jobTitle, handleChange, onIndustryChange, businessCard}) {
    const navigate = useNavigate();

    useEffect(() => {
        getIndustries().then(r => setIndustries(r.data))
    }, []);

    const [industries, setIndustries] = useState([]);
    
    async function handleSubmit(e) {
        e.preventDefault()
    
        navigate('/walk/signup/email');
    }

    return (
        <div className='signup'>
        <div className="signup-left">
            <h1 className='mb-30'>What do you do?</h1>
            <form onSubmit={handleSubmit}>

                <DropDown 
                    label={'Industry'}
                    data={industries}
                    placeholder={'Choose your Industry'}
                    onChange={onIndustryChange}
                />


                <TextInput
                        label="Company"
                        onChange={handleChange}
                        name="company"
                        value={company}
                />

                <TextInput
                        label="Job Title"
                        onChange={handleChange}
                        name="jobTitle"
                        value={jobTitle}
                />

                <div className="btn-container">
                    <button onClick={() => navigate('/walk/signup/name')} className='blue xl'>
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


export default JobPage;