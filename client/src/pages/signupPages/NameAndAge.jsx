import TextInput from "../../components/textInput";
import { useNavigate } from "react-router-dom";


function NameAndAgeSignupPage({ firstName, lastName, handleChange }) {
    const navigate = useNavigate();
    
    async function handleSubmit(e) {
        e.preventDefault()
    
        navigate('/walk/signup/email');
    }

    return (
        <div className='signup'>
        <div className="signup-left">
            <h1 className='mb-30'>What's your name?</h1>
            <form onSubmit={handleSubmit}>
                <TextInput
                        label="First Name"
                        onChange={handleChange}
                        name="firstName"
                        value={firstName}
                    />

                <TextInput
                        label="Last Name"
                        onChange={handleChange}
                        name="lastName"
                        value={lastName}
                />

                <button type="submit" className='blue full-span-go-walk'>
                    <p className='mr-10'>Go Walk!</p>
                    <p className=''>🥾</p>
                </button>
            </form>
        </div>
        <div className="signup-right">
        </div>
    </div>
    );
}

export default NameAndAgeSignupPage;