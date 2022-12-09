import React, { useState, useEffect } from 'react';
import { getIndustries } from '../../services/services';
import EditAccountInput from '../../components/editAccountInput';
import EditAccountDropDown from '../../components/editAccountDropDown';
import Input from '../../components/input';

function EditAccount({ discardEdit, onIndustryChange, updatedProfile, handleChange, onIsConfirming }) {
    
    const [industries, setIndustries] = useState([]);

    useEffect(() => {
        getIndustries().then(r => setIndustries(r.data));
    }, []);
    
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
                        currentIndustry={updatedProfile.industry.name}
                        data={industries}
                        onChange={onIndustryChange}
                    />

                </div>
            </div>

            <div className="breaker-hor mb-40"></div>

            <div>
                <button onClick={onIsConfirming} className='grey mr-20'>
                    <h3 className="large">Save Changes</h3>
                </button>
                <button onClick={discardEdit} className='grey'>
                    <h3 className="large">Discard</h3>
                </button>
            </div>
            
        </div>
        )
}

export default EditAccount;