import AccountFeed from './AccountFeed';
import EditAccount from './EditAccount';
import React, { useState } from 'react';

import CoverPhoto from '../../assets/default-header.jpg'
import testingProfilePhoto from '../../assets/testingProfilePhoto.jpg';


function Account({user}) {
    const [isEditing, setIsEditing] = useState(true)


    return (
        <div className="account">
        <div className="account-header">
            <img src={CoverPhoto} alt="" />
        </div>

        <div className="account-container">
            <div className="account-info mb-20">
                <div className='flex mb-20'>
                    <img className='' src={testingProfilePhoto} alt="" />
                    
                    <div className="flex mb-10 span100 jc-space-between">
                        <div className='ml-40'>
                            <h1 className='large mb-10'>{user.first_name} {user.last_name}</h1>
                            <p className='xlarge'>{user.job_title}, {user.company}</p>
                        </div>
                        <div>
                            <button onClick={() => setIsEditing(true)} className='grey mr-20'>
                                <h3 className="large">Edit</h3>
                            </button>
                            <button className='grey'>
                                <h3 className="large">Set Goal</h3>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="breaker-hor-2"></div>
            </div>

            {
                isEditing ? 
                <EditAccount 
                    user={user}
                />
                : 
                <AccountFeed 
                    user={user}
                />
            }
        </div>
    </div>







    );
}

export default Account;