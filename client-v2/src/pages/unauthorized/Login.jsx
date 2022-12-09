import React, { useState } from 'react';
import Input from '../../components/input';
import Error from '../../components/error';
import { useNavigate } from 'react-router-dom';
import { productPage, signupCityPage } from '../../data/welcomeNav';
import { login } from '../../services/services'

function Login({setUser}) {
    const navigate = useNavigate();
    
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')


    const handleSubmit = async e => {
        e.preventDefault();
        const data = await login(loginInfo);

        if(data.status === 200) {
            setUser(data.data);
            navigate('/')
        } else {
            setError('Email or Password incorrect!')
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginInfo({ ...loginInfo, [name]: value })
    }

    const { email, password } = loginInfo
    return (
        <div className="welcome-modal">
            <div className="welcome-back">
                <button onClick={() => navigate(productPage)} className='black'>
                        <h3 className="">Back</h3>
                </button>
            </div>


            <form onSubmit={handleSubmit} className="flex flex-column jc-center span100h span100">
                
                <div className="mb-20">
                    <h1 className='mb-5'>Login</h1>
                    <h3>Enter your email and password to begin.</h3>
                </div>
                <div className="breaker-hor-2 mb-20"></div>

                <div className="mb-20">
                    <Input 
                        label='Email'
                        extraStyling='black welcome-input'
                        onChange={handleChange}
                        value={email}
                        name="email"
                    />
                    <Input 
                        label='Password'
                        extraStyling='black'
                        type='password'
                        onChange={handleChange}
                        value={password}
                        name="password"
                    />
                </div>


                <div className="span100 flex ai-center jc-center">
                    <button type='submit' className='large black span100'>
                        <h3 className="large">Login</h3>
                    </button>

                </div>

                
                {error && <Error error={error}/>}
            </form>

            <div className='welcome-redirect flex jc-center'>
                <h3>Don't have an account? <span onClick={() => navigate(signupCityPage)} className='pointer'>Sign up!</span></h3>
            </div>


        </div>
    );
}

export default Login;