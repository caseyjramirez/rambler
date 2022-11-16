import React, { useState, useEffect } from 'react';
import testImage from '../../assets/test-header.jpg'
import placeholderProfilePhoto from '../../assets/place-holder.jpeg'
import { Outlet, useNavigate, Routes, Route } from "react-router-dom";
import EditProfile from '../../components/editProfile';
import ConfirmPassword from '../../components/confirmPassword';
import { updateUser, getCities, getIndustries } from '../../services/services'


function Account({ user, setUser }) {
    const navigate = useNavigate();

    
    useEffect(() => {
        if(user) {
            setUpdatedProfile(user)
        } else {
            navigate('/rambler')
        }

        getCities().then(r => setCities(r.data));
        getIndustries().then(r => setIndustries(r.data))
    }, [])
    
    
    const [updatedProfile, setUpdatedProfile] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [cities, setCities] = useState([]);
    const [industries, setIndustries] = useState([]);

    console.log(updatedProfile);

    // const setNewCity = (name, id) => {
    //     setUpdatedProfile({...updatedProfile, city: { name, id }})
    // }

    const setNewCity = (cityId) => {
        setUpdatedProfile({...updatedProfile, city: cities.find(city => city.id === cityId)})
    }

    const setNewIndustry = (industryId) => {
        setUpdatedProfile({...updatedProfile, industry: industries.find(industry => industry.id === industryId)})
    }

    function renderCoverPhotoImage() {
        // return user.imagePreviewUrl ? data.imagePreviewUrl : testImage;
        return testImage;
    }

    function renderProfilePhotoImage() {
        return user.profile_photo ? user.profile_photo : placeholderProfilePhoto;
    }

    function renderButton() {
        return !isEditing ? (
            <button onClick={onEditProfile} className='edit-profile-button blue-light'>
                <p className=''>Edit Profile</p>
            </button>
        ) : (null)
    }

    function onEditProfile() {
        setIsEditing(true)
        navigate('edit')
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUpdatedProfile({ ...updatedProfile, [name]: value })
    }

    async function onSaveChanges() {        
        navigate('confirm')
    }

    async function onDiscardChanges() {
        navigate('/account')
        setIsEditing(false)
    }

    async function onConfirmChanges() {
        const data = await updateUser(user.id, {
            first_name: updatedProfile.first_name,
            last_name: updatedProfile.last_name,
            city_id: updatedProfile.city.id,
            industry_id: updatedProfile.industry.id,
            company: updatedProfile.company,
            job_title: updatedProfile.job_title,
            email: updatedProfile.email,
            profile_photo: updatedProfile.profile_photo,
            description: updatedProfile.description,
            password: password,
            password_confirmation: password

        })
        setPassword('')
        
        console.log(data);
        
        if(data.status === 202) {
            setUser(data.data)
            navigate('/account')
            setIsEditing(false)
            setError('')
            
        } else if(data.response.status === 401) {
            setError('Incorrect Password!')
        } else {
            setError('Something went wrong... come back and try again later!')
        }

    }


    return (
        <div className="card history">
            <img src={renderCoverPhotoImage()} alt="profile-header" className="profile-header" />
            
            <div className='header'>

                <img src={renderProfilePhotoImage()} alt="profile" className="profile-picture" />
                <div className="header-content">
                    {renderButton()}
                    <h1 className='mb-10'>{user.first_name} {user.last_name}</h1>
                    <div className="flex mb-5 header-content-details">
                        <p className='mr-5 city'>{user.city.label}</p>
                        <p className='mr-5'>|</p>
                        <p className='mr-5'>{user.job_title}, {user.company}</p>
                    </div>

                </div>
            </div>

            <Routes>
                <Route path='/edit' element={
                    updatedProfile && <EditProfile
                    user={updatedProfile}
                    handleChange={handleChange}
                    onSaveChanges={onSaveChanges}
                    onDiscardChanges={onDiscardChanges}
                    cities={cities}
                    industries={industries}
                    setCity={setNewCity}
                    setIndustry={setNewIndustry}
                />} 
                />
                <Route path='/confirm' element={
                    <ConfirmPassword
                        password={password}
                        setPassword={setPassword}
                        onConfirmChanges={onConfirmChanges}
                        error={error}
                    />} 
                />
            </Routes>
            
            <Outlet />
        </div>
    );
}

export default Account;