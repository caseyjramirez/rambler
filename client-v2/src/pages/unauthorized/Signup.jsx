import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import CitySignupPage from "./City";
import NameSignupPage from './Name';
import JobSignupPage from './Job';
import EmailSignupPage from './Email';
import { formatNewUserData } from '../../data/newUserGenerator';
import { createNewUser } from '../../services/services';

function Signup({ setUser }) {
    const navigate = useNavigate();

    const [newProfile, setNewProfile] = useState({
        firstName: '',
        lastName: '',
        city_id: '',
        user_lat: '',
        user_lng: '',
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
    const [signupError, setSignupError] = useState('')

    console.log(newProfile);

    const setUserCity = (name, id, lat, lng) => {
        setCityQuery(name)
        setNewProfile({...newProfile, city_id: id, user_lat: lat, user_lng: lng })
    }
    
    const setUserIndustry = id => {;
        setNewProfile({...newProfile, industry_id: id })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewProfile({ ...newProfile, [name]: value })
    }

    async function handleSubmit() {
        const newUserData = formatNewUserData(newProfile);

        createNewUser(newUserData).then(r => {
            console.log(r);
            if(r.status === 201) {
                setUser(r.data)
                navigate('/')
            } else {
                if(r.response.status === 422) {
                    setSignupError('An account with that email already exists!')
                } else {
                    setSignupError('Something broke.. Go for a walk and come back later!')
                }
            }
        })
    }
    
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

                <Route path='email' element={
                    <EmailSignupPage 
                        email={newProfile.email}
                        password={newProfile.password}
                        confirmPassword={newProfile.confirmPassword}
                        handleChange={handleChange}
                        onSubmit={handleSubmit}
                        signupError={signupError}
                    />} 
                />

        </Routes>



    );
}

export default Signup;