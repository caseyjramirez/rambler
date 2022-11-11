import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { getCities } from "../services/services";
import CitySignupPage from "./signupPages/CityPage";
import NameAndAgeSignupPage from "./signupPages/NameAndAge";
import EmailAndPasswordSignupPage from "./signupPages/EmailAndPassword";

function Signup() {
    const navigate = useNavigate();
    
    const [newProfile, setNewProfile] = useState({
        firstName: '',
        lastName: '',
        city: '',
        email: '',
        password: ''
    })
    console.log(newProfile);

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewProfile({ ...newProfile, [name]: value })
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
    }


    return (
        <div className="card">
        <h1 className='card-title'>Sign up!</h1>
            <Routes>
                <Route path='/' element={<CitySignupPage setCity={e => setNewProfile({...newProfile, city: e})} />} />
                <Route path='name' element={<NameAndAgeSignupPage 
                    firstName={newProfile.firsName} 
                    lastName={newProfile.lastName} 
                    handleChange={handleChange}/>} 
                />
                <Route path='email' element={<EmailAndPasswordSignupPage 
                    handleChange={handleChange}/>} 
                    email={newProfile.email}
                    password={newProfile.password}
                />

            </Routes>
        </div>
    );
}

export default Signup;