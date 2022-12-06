import React, { useState, useEffect } from 'react';
import { getIndustries } from '../../services/services';
import EditAccountInput from '../../components/editAccountInput';
import EditAccountDropDown from '../../components/editAccountDropDown';

function EditAccount({ user }) {
    
    const [updatedProfile, setUpdatedProfile] = useState(user)
    const [industries, setIndustries] = useState([])

    useEffect(() => {
        getIndustries().then(r => setIndustries(r.data));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target
        setUpdatedProfile({ ...updatedProfile, [name]: value })
    }

    const onIndustryChange = id => {;
        console.log(id);
        setUpdatedProfile({...updatedProfile, industry_id: id })
    }

    console.log(updatedProfile);
    
    return (
        <div className="account-feed edit-account">
            <div className="mb-40">
                <h1 className='mb-10'>Name</h1>
                <div className="edit-account-columns">
                    <EditAccountInput 
                        value={updatedProfile.first_name}
                        name={'first_name'}
                        label={'First Name'}
                        onChange={handleChange}
                    />
                    <EditAccountInput 
                        value={updatedProfile.last_name}
                        name={'last_name'}
                        label={'Last Name'}
                        onChange={handleChange}
                    />
                </div>

            </div>
            
            <div className="breaker-hor mb-40"></div>
            
            <div className="mb-40">
                <h1 className='mb-20'>Description</h1>
                <textarea 
                    value={updatedProfile.description}
                    name={'description'}
                    onChange={handleChange}
                />
            </div>

            <div className="breaker-hor mb-40"></div>
            
            <div className="mb-40">
                <h1 className='mb-10'>Job</h1>
                <div className="edit-account-columns">
                    <EditAccountInput 
                        value={updatedProfile.company}
                        name={'company'}
                        label={'Company'}
                        onChange={handleChange}
                    />
                    <EditAccountInput 
                        value={updatedProfile.job_title}
                        name={'job_title'}
                        label={'Job Title'}
                        onChange={handleChange}
                    />
                    <EditAccountDropDown 
                        label={'Industry'}
                        currentIndustry={user.industry.name}
                        data={industries}
                        onChange={onIndustryChange}
                    />

                </div>
            </div>
            
        </div>
    );
}

export default EditAccount;