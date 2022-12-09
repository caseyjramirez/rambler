import React, { useState, useEffect } from 'react';

function CompleteProfile({ completeProfile, close, user }) {

    function getList() {
        let returnValue = [];

        for (const [key, value] of Object.entries(user)) {            
            if(!value) {
                if(key === 'description') {
                    returnValue.push('Description')
                } else if(key === 'profile_photo') {
                    returnValue.push('Profile Picture')
                } else if(key === 'cover_photo') {
                    returnValue.push('Cover Photo')
                } else if(key === 'mile_goal') {
                    returnValue.push('Mile Goal')
                }
            }
        }
        return returnValue
    }

    return (
        <div className="complete-profile">
            <p className="small mb-10">We noticed you are still missing:</p>
            <div className="mb-10">
                {
                    getList().map(ma => <li>{ma}</li>)
                }
            </div>
            <p className="mb-10">Would you like to complete your account?</p>

            <div className="mb-10">
                <button onClick={completeProfile} className='red mr-20'>
                    {/* <p className="small">Complete Profile</p> */}
                    <h3 className="">Complete Profile</h3>
                </button>

                <button onClick={close} className='red mr-20'>
                    <p className="small">Not Now</p>
                </button>
            </div>
        </div>

    );
}

export default CompleteProfile;