import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getIndustries } from '../../services/services';
import { emailFromJob, loginPage, nameFromJob } from '../../data/welcomeNav';
import Input from '../../components/input';
import Dropdown from '../../components/dropdown';
import Error from '../../components/error';
import FullSpanDropDown from '../../components/fullSpanDropDown';
import { validateJob } from '../../services/validation';

function JobSignupPage({ handleChange, jobTitle, company, onIndustryChange }) {
    const navigate = useNavigate();

    const [error, setError] = useState('')
    const [industries, setIndustries] = useState([])

    useEffect(() => {
        getIndustries().then(r => setIndustries(r.data));
    }, []);

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        
        const {error} = validateJob({company, jobTitle})
        if(error) return setError(error.details[0].message)
        
        
        navigate(emailFromJob);
    }

    return (
        <div className="welcome-modal">
            <div className="welcome-back">
                <button onClick={() => navigate(nameFromJob)} className='black'>
                        <h3 className="">Back</h3>
                </button>
            </div>


            <form onSubmit={handleSubmit} className="flex flex-column jc-center span100h span100">
                <div className="mb-20">
                    <h1 className='mb-5'>What do you do?</h1>
                    <h3>Your job title and company will be visible to others on Rambler.</h3>
                </div>
                <div className="breaker-hor-2 mb-20"></div>

                <div className="mb-20">
                    <FullSpanDropDown
                        label={'Industry'}
                        extraStyling='welcome-name'
                        data={industries}
                        onChange={onIndustryChange}
                    />
                    <Input 
                        label='Job Title'
                        extraStyling='black welcome-name'
                        onChange={handleChange}
                        value={jobTitle}
                        name="jobTitle"
                        />
                    <Input 
                        label='Company'
                        extraStyling='black welcome-name'
                        onChange={handleChange}
                        value={company}
                        name="company"
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

export default JobSignupPage;