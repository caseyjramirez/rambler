import React, { useState, useEffect } from 'react';

function CompleteProfile({ completeProfile, close, user }) {
    const [missingAttributes, setMissingAttributes] = useState([])

    useEffect(() => {
        for (const [key, value] of Object.entries(user)) {            
            
            if(!value) {
                if(key === 'description') {
                    setMissingAttributes(missingAttibutes => [...missingAttibutes, 'Description'])
                } else if(key === 'profile_photo') {
                    setMissingAttributes(missingAttibutes => [...missingAttibutes, 'Profile Picture'])
                } else if(key === 'cover_photo') {
                    setMissingAttributes(missingAttibutes => [...missingAttibutes, 'Cover Photo'])
                } else if(key === 'mile_goal') {
                    setMissingAttributes(missingAttibutes => [...missingAttibutes, 'Mile Goal'])
                }
            }
          }
    }, [])

    console.log(missingAttributes, user);

    return (
        // <div className="complete-profile">
        //     <p className="small mb-10">We noticed you are still missing:</p>
        //     <div className="mb-10">
        //         {
        //             missingAttributes && missingAttributes.map(ma => <li>{ma}</li>)
        //         }
        //     </div>
        //     <p className="mb-10">Would you like to complete your account?</p>

        //     <div className="mb-10">
        //         <button onClick={completeProfile} className='red mr-20'>
        //             {/* <p className="small">Complete Profile</p> */}
        //             <h3 className="">Complete Profile</h3>
        //         </button>

        //         <button onClick={close} className='red mr-20'>
        //             <p className="small">Not Now</p>
        //         </button>
        //     </div>
        // </div>
        <div className="complete-profile">
            <p className="small mb-10">We noticed you are still some elements. Would you like to complete your account?</p>

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