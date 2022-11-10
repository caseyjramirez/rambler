import { useNavigate } from "react-router-dom";
import TextInput from "../components/textInput";
import { Routes, Route } from "react-router-dom";

import CitySignupPage from "./signupPages/CityPage";
import NameAndAgeSignupPage from "./signupPages/NameAndAge";
import EmailAndPasswordSignupPage from "./signupPages/EmailAndPassword";

function Signup() {
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
    }


    return (
        <div className="card">
        <h1 className='card-title'>Sign up!</h1>
            <Routes>
                <Route path='/' element={<CitySignupPage />} />
                <Route path='name' element={<NameAndAgeSignupPage />} />
                <Route path='email' element={<EmailAndPasswordSignupPage />} />

            </Routes>
        </div>
    );
}

export default Signup;