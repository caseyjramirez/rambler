import React, { useState, useEffect } from 'react';
import TextInput from "../../components/textInput";
import { useNavigate } from "react-router-dom";
import { getIndustries } from '../../services/services';
import DropDown from '../../components/dropDown';
import Error from '../../components/error';
import { validateJob } from '../../services/validation';

function JobPage({company, jobTitle, handleChange, onIndustryChange, businessCard, showJob, showEmail }) {
    const navigate = useNavigate();

    useEffect(() => {
        getIndustries().then(r => setIndustries(r.data))
    }, []);

    const [industries, setIndustries] = useState([]);
    const [error, setError] = useState('');
    const [industryIsSet, setIndustryIsSet] = useState(false)
    
    async function handleSubmit(e) {
        e.preventDefault()
        setError('')

        if(!industryIsSet) return setError('What industry do you work in?')

        const {error} = validateJob({company, jobTitle})
        if(error) return setError(error.details[0].message)
    
        showJob()
        showEmail()
        navigate('/walk/signup/email');
    }

    function handleIndustryChange(industryId) {
        setIndustryIsSet(true)
        onIndustryChange(industryId)
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
                    onChange={industryId => handleIndustryChange(industryId)}
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

            {error && <Error error={error}/>}
        </div>
        <div className="signup-right">
            {businessCard}
        </div>
    </div>
    );
}


export default JobPage;