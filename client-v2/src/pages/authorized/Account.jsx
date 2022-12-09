import AccountFeed from './AccountFeed';
import EditAccount from './EditAccount';
import React, { useState, useEffect } from 'react';
import { formatUpdateAccountData } from '../../data/updateAccount';
import defaultCoverPhoto from '../../assets/default-header.jpg'
import defaultProfilePhoto from '../../assets/default-profile-photo.jpg'
import Input from '../../components/input';
import Error from '../../components/error';
import CompleteProfile from '../../components/completeProfile';
import { updateUser, updateActivityGoal, setCompleteProfile } from '../../services/services';
import { useNavigate } from 'react-router-dom';
import { getTopActivity, getTotalDistance, getTotalActivities } from '../../services/getUserStats';

import SetGoal from '../../components/setGoal';
import { set } from 'date-fns/esm';

function Account({user, setUser, setNewActivityGoal, setUserProfileAsComplete}) {

    const [isEditing, setIsEditing] = useState(false)
    const [isSettingGoal, setIsSettingGoal] = useState(false)
    const [isConfirming, setIsConfirming] = useState(false);
    const [updatedProfile, setUpdatedProfile] = useState(user)
    const [activityGoal, setActivityGoal] = useState(user.mile_goal || 0)
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [topActivity, setTopActivity] = useState(null)
    const [totalDistance, setTotalDistance] = useState(null)
    const [totalActivities, setTotalActivities] = useState(null)
    const [milesTillGoal, setMilesTillGoal] = useState(null)

    const [isShowingCompleteProfile, setIsShowingCompleteProfile] = useState(true)

    useEffect(() => {
        setTopActivity(getTopActivity(user.activities))
        setTotalDistance(`${getTotalDistance(user.activities)} mi.`)
        setTotalActivities(getTotalActivities(user.activities))
        setMilesTillGoal(() => (
            activityGoal ? (
                activityGoal > getTotalDistance(user.activities) ? `${activityGoal - getTotalDistance(user.activities)} mi.` : 'Goal Complete!'
            ) : ('Set a goal.')
        ))
    }, [user.activities, activityGoal])
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setUpdatedProfile({ ...updatedProfile, [name]: value })
    }

    const onIndustryChange = id => {;
        console.log(id);
        setUpdatedProfile({...updatedProfile, industry_id: id })
    }

    function completeProfile() {
        setIsEditing(true)
        setIsShowingCompleteProfile(false)
        setCompleteProfile({id: user.id})
        setUserProfileAsComplete()
    }
    
    function changeProfilePic(e) {
        e.preventDefault();
        
        let reader = new FileReader();
        let infile = e.target.files[0];
        
        reader.onloadend = () => {
            setUpdatedProfile({...updatedProfile, picFile: infile, profile_photo: reader.result});
        };
        
        reader.readAsDataURL(infile);
    }

    function changeCoverPic(e) {
        e.preventDefault();

        let reader = new FileReader();
        let infile = e.target.files[0];

        reader.onloadend = () => {
          setUpdatedProfile({...updatedProfile, picFileCover: infile, cover_photo: reader.result});
        };
        
        reader.readAsDataURL(infile);
    }

    function setNewGoal(miles) {
        updateActivityGoal({
            id: user.id,
            mile_goal: miles
        })
        setActivityGoal(miles)
        setNewActivityGoal(miles)
    }
    
    function renderProfilePhotoImage() {
        return updatedProfile && updatedProfile.profile_photo ? updatedProfile.profile_photo : defaultProfilePhoto;
    }

    function renderCoverPhotoImage() {
        return updatedProfile && updatedProfile.cover_photo ? updatedProfile.cover_photo : defaultCoverPhoto;
    }

    async function updateAccount() {
        setError('')
        const updatedAccount = formatUpdateAccountData(updatedProfile, password);
        const data = await updateUser(user.id, updatedAccount)
        
        if(data.status === 202) {
            setUser(data.data)
            setPassword('')
            setIsEditing(false)
            setIsConfirming(false)            
        } else if(data.response.status === 401) {
            setError('Incorrect Password!')
        } else {
            setError('Something went wrong... come back and try again later!')
        }
    }

    return (
        <div className="account">
            <SetGoal 
                currentActivityGoal={activityGoal}
                isOpen={isSettingGoal}
                onClose={() => setIsSettingGoal(false)}
                setNewGoal={setNewGoal}
                setActivityGoal={setActivityGoal}
            />

            <div className="account-header">
                {isEditing ? (
                    <>
                        <h3 className='white'>Update Cover Image</h3>
                        <input className='profile-photo-image' onChange={changeCoverPic} type="file" accept="image/*" />
                    </>
                ) : null}
                <img src={renderCoverPhotoImage()} alt="" />
            </div>
            
            {/* HERE IS WHERE EDITING FOR MOBILE */}
            
            <div className="account-info mb-20">
                <div className="account-profile-img">
                    {isEditing ? (
                        <>
                            <h3 className='white'>Update Profile Image</h3>
                            <input className='profile-photo-image' onChange={changeProfilePic} type="file" accept="image/*" />
                        </>
                    ) : null}
                    <img className='' src={renderProfilePhotoImage()} alt="" />
                </div>
                
                <div className="flex mb-10 span100 jc-space-between">
                    <div className='account-info-text ml-40'>
                            <h1 className='large mb-20'>{user.first_name} {user.last_name}</h1>
                            
                            <div className="flex mb-20">
                                <div className='mr-10'>
                                    <span className="tag grey">{user.city.label}</span>
                                </div>
                                <div>
                                    <span className="tag grey">{user.industry.name}</span>
                                </div>
                            </div>
                            
                        <p className='large'>{user.job_title}, {user.company}</p>
                    </div>

                    <div>
                        {
                            !isEditing ? (
                                <div className="flex mt-10">
                                    <div className='mr-20'>
                                        <button onClick={() => setIsSettingGoal(true)} className='grey span100'>
                                            <h3 className="large">Set Goal</h3>
                                        </button>
                                    </div>

                                    <div>
                                        <button onClick={() => {
                                            setIsEditing(true)
                                            setIsShowingCompleteProfile(false)
                                        }} className='grey span100'>
                                            <h3 className="large">Edit Profile</h3>
                                        </button>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>

            {
                isShowingCompleteProfile && !user.complete_profile ? 
                <div className="account-confirm-profile mb-20">
                    <CompleteProfile 
                        user={user}
                        completeProfile={completeProfile}
                        close={() => setIsShowingCompleteProfile(false)}
                    />
                </div> : null
            }


            <div className="account-container">
                {isEditing ? 
                    isConfirming ? 
                    <div className="account-feed edit-account">
                        <div className="mb-20">
                            <h1 className='mb-10'>Confirm Password</h1>
                            <h3>Enter your password to confirm cahnges.</h3>
                        </div>
                        <div className="breaker-hor-2 mb-20"></div>
                            <div className="mb-40">
                                <Input 
                                    label='Password'
                                    type='password'
                                    extraStyling='black welcome-input'
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    name="password"
                                />
                                {error && <Error error={error}/>}
                            </div>
                
                            <div>
                                <button onClick={updateAccount} className='grey mr-20'>
                                    <h3 className="large">Save Changes</h3>
                                </button>
                                <button onClick={() => setIsEditing(false)} className='grey'>
                                    <h3 className="large">Discard</h3>
                                </button>
                            </div>
                        </div>
                        :
                        <EditAccount
                            onIndustryChange={onIndustryChange}
                            updatedProfile={updatedProfile}
                            handleChange={handleChange}
                            password={password}
                            setPassword={setPassword}
                            onIsConfirming={() => setIsConfirming(true)}
                            discardEdit={() => setIsEditing(false)}
                        />
                : 
                <AccountFeed 
                    topActivity={topActivity}
                    totalDistance={totalDistance}
                    totalActivities={totalActivities}
                    milesTillGoal={milesTillGoal}
                />}
            </div>
        </div>



    )
}

export default Account;