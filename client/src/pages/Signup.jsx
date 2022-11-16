import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { getCities, getIndustries, createNewUser } from '../services/services';

import CitySignupPage from "./signupPages/CityPage";
import NameAndAgeSignupPage from "./signupPages/NameAndAge";
import EmailAndPasswordSignupPage from "./signupPages/EmailAndPassword";
import JobPage from './signupPages/JobPage';
import BusinessCard from './signupPages/businessCard';

function Signup({ setUser }) {
    const navigate = useNavigate();

    const [cities, setCities] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [showJob, setShowJob] = useState(false)
    const [showEmail, setShowEmail] = useState(false)
    const [extraContentError, setExtraContentError] = useState('')
    const [signupError, setSignupError] = useState('')

    useEffect(() => {
        getCities().then(r => setCities(r.data));
        getIndustries().then(r => setIndustries(r.data))
    }, []);
    
    const [newProfile, setNewProfile] = useState({
        firstName: '',
        lastName: '',
        city: {
            id: '',
            name: ''
        },
        industry: {
            name: '',
            id: ''
        },
        company: '',
        jobTitle: '',
        email: '',
        password: '',
        confirmPassword: '',
        picFile: null,
        imagePreviewUrl: "",
        description: ""
    })

    
    const handleChange = (e) => {
        const { name, value } = e.target
        setNewProfile({ ...newProfile, [name]: value })
    }

    const setNewCity = (name, id) => {
        setNewProfile({...newProfile, city: { name, id }})
    }

    const setNewIndustry = (industryId) => {
        setNewProfile({...newProfile, industry: industries.find(industry => industry.id === industryId)})
    }

    const returnBusinessCard = () => {
        return <BusinessCard 
            data={newProfile} 
            setProfilePic={(picFile, imagePreviewUrl) => setNewProfile({...newProfile, picFile, imagePreviewUrl})}
            showJob={showJob}
            showEmail={showEmail}
            handleChange={handleChange}
            description={newProfile.description}
            highlightDescription={extraContentError}
        />
    }
    
    const handleSubmit = async e => {

        if(!newProfile.description || !newProfile.picFile) {
            if(!newProfile.description) return setExtraContentError("We noticed you're missing a Description, would you like to add one?")
            if(!newProfile.picFile) return setExtraContentError("We noticed you're missing a Profile Picture, would you like to add one?")
            else return setExtraContentError("We noticed you're missing a Description and Profile Picture, would you like to add one?")   
        }

        onCreateNewUser()
    }

    function skipCTA() {
        onCreateNewUser()
    }

    async function onCreateNewUser() {
        setExtraContentError('')

        createNewUser({
            first_name: newProfile.firstName,
            last_name: newProfile.lastName,
            city_id: newProfile.city.id,
            industry_id: newProfile.industry.id,
            company: newProfile.company,
            job_title: newProfile.jobTitle,
            email: newProfile.email,
            password: newProfile.password,
            password_confirmation: newProfile.confirmPassword,
            profile_photo: newProfile.imagePreviewUrl,
            description: newProfile.description
        }).then(r => {
            console.log(r);
            if(r.status === 201) {
                setUser(r.data)
                navigate('/')
            } else {
                if(r.response.status === 422) {
                    setSignupError('That email has already been taken!')
                } else {
                    setSignupError('Something broke.. Go for a walk and come back later!')
                }
            }
        })
    }

    return (
        <div className="card">
        <h1 className='card-title'>Sign up!</h1>
            <Routes>
                <Route path='/' element={
                    <CitySignupPage 
                        cities={cities}
                        setCity={setNewCity}
                        userCity={newProfile.city.id}
                    />} 
                />
                <Route path='name' element={
                    <NameAndAgeSignupPage 
                        firstName={newProfile.firstName} 
                        lastName={newProfile.lastName} 
                        handleChange={handleChange}
                        businessCard={returnBusinessCard()}
                    />} 
                />

                <Route path='job' element={
                    <JobPage 
                        industries={industries}
                        company={newProfile.company} 
                        jobTitle={newProfile.jobTitle} 
                        handleChange={handleChange}
                        onIndustryChange={setNewIndustry}
                        businessCard={returnBusinessCard()}
                        showJob={() => setShowJob(true)}
                        showEmail={() => setShowEmail(true)}
                    />} 
                />


                <Route path='email' element={
                    <EmailAndPasswordSignupPage 
                        handleChange={handleChange}
                        email={newProfile.email}
                        password={newProfile.password}
                        confirmPassword={newProfile.confirmPassword}
                        onSubmit={handleSubmit}
                        businessCard={returnBusinessCard()}
                        extraContentError={extraContentError}
                        skipCTA={skipCTA}
                        error={signupError}
                        setError={setSignupError}
                    />}
                />

            </Routes>
        </div>
    );
}

export default Signup;