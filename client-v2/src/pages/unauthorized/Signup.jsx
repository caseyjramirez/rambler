import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import CitySignupPage from "./City";
import NameSignupPage from './Name';
import JobSignupPage from './Job';

function Signup() {
    const navigate = useNavigate();

    const [newProfile, setNewProfile] = useState({
        firstName: '',
        lastName: '',
        city_id: '',
        industry_id: '',
        company: '',
        jobTitle: '',
        email: '',
        password: '',
        confirmPassword: '',
        picFile: null,
        imagePreviewUrl: "",
        description: ""
    })
    const [cityQuery, setCityQuery] = useState('')

    const setUserCity = (name, id) => {
        setCityQuery(name)
        setNewProfile({...newProfile, city_id: id })
    }
    
    const setUserIndustry = id => {;
        setNewProfile({...newProfile, industry_id: id })
    }


    
    const handleChange = (e) => {
        const { name, value } = e.target
        setNewProfile({ ...newProfile, [name]: value })
    }
    
    console.log(newProfile);
    return (
        <Routes>
                <Route path='/' element={
                    <CitySignupPage 
                        setCity={setUserCity}
                        query={cityQuery}
                        setQuery={setCityQuery}
                        selectedCity={newProfile.city_id}
                    />
                }/>

                <Route path='name' element={
                    <NameSignupPage 
                        firstName={newProfile.firstName}
                        lastName={newProfile.lastName}
                        handleChange={handleChange}
                    />} 
                />

                <Route path='job' element={
                    <JobSignupPage 
                        onIndustryChange={setUserIndustry}
                        jobTitle={newProfile.jobTitle}
                        company={newProfile.company}
                        handleChange={handleChange}
                    />} 
                />

        </Routes>



    );
}

export default Signup;