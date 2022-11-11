import TextInput from "../../components/textInput";
import { useNavigate } from "react-router-dom";

function EmailAndPasswordSignupPage({handleChange, email, password, confirmPassword}) {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
    
        navigate('/rambler');
    }

    return (
        <div className='signup'>
        <div className="signup-left">
            <h1 className='mb-30 fc-green'>Lets Make it Official!</h1>
            <form onSubmit={handleSubmit}>
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
                        type={'password'}
                />

                <TextInput
                        label="Confirm Password"
                        onChange={handleChange}
                        name="confirmPassword"
                        value={confirmPassword}
                        type={'password'}
                />

                <div className="btn-container">
                    <button onClick={() => navigate('/walk/signup/name')} className='blue xl'>
                        <p className=''>Back</p>
                    </button>
                    <button type="submit" className='blue xl'>
                        <p className='mr-10'>Go Walk!</p>
                        <p className=''>🥾</p>
                    </button>
                </div>
            </form>
        </div>
        <div className="signup-right">
        </div>
    </div>
    );
}

export default EmailAndPasswordSignupPage;