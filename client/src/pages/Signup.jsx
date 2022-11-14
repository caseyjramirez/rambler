import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { getCities, getIndustries } from '../services/services';

import CitySignupPage from "./signupPages/CityPage";
import NameAndAgeSignupPage from "./signupPages/NameAndAge";
import EmailAndPasswordSignupPage from "./signupPages/EmailAndPassword";
import JobPage from './signupPages/JobPage';
import BusinessCard from './signupPages/businessCard';

function Signup() {
    const navigate = useNavigate();

    const [cities, setCities] = useState([]);
    const [industries, setIndustries] = useState([]);

    useEffect(() => {
        getCities().then(r => setCities(r.data));
        getIndustries().then(r => setIndustries(r.data))
    }, []);
    
    const [newProfile, setNewProfile] = useState({
        city: {
            id: '',
            name: ''
        },
        firstName: '',
        lastName: '',
        company: '',
        jobTitle: '',
        industry: {
            name: '',
            id: ''
        },
        email: '',
        password: '',
        confirmPassword: '',
        picFile: null,
        imagePreviewUrl: "",
    })

    console.log(newProfile);

    const [showJob, setShowJob] = useState(false)
    const [showEmail, setShowEmail] = useState(false)
    const [showExtra, setShowExtra] = useState(false)
    
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
        />
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
    }

    return (
        <div className="card">
        <h1 className='card-title'>Sign up!</h1>
            <Routes>
                <Route path='/' element={
                    <CitySignupPage 
                        cities={cities}
                        setCity={setNewCity} 
                    />} 
                />
                <Route path='name' element={
                    <NameAndAgeSignupPage 
                        firstName={newProfile.firsName} 
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
                        businessCard={returnBusinessCard()}
                    />}
                />

            </Routes>
        </div>
    );
}

export default Signup;