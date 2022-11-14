import React, { useState } from 'react';
import TextInput from "../components/textInput";
import { login } from '../services/services';
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
    const navigate = useNavigate();

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginInfo({ ...loginInfo, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await login(loginInfo);
        if(data.status === 200) {
            setUser(data.data);
            navigate('/')
        }
    }

    const { email, password } = loginInfo
    return (
        <div className="card">
            <h1 className='card-title'>Login</h1>
            
            <form className="card-body-center" onSubmit={handleSubmit}>
                <TextInput
                    label="Email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <TextInput
                    label="Password"
                    onChange={handleChange}
                    name="password"
                    value={password}
                    type="password"
                />

                <button type="submit" className='blue full-span'>
                    <p className='mr-10'>Login!</p>
                    <p className=''>🥾</p>
                </button>

            </form>

        </div>
    );
}

export default Login;