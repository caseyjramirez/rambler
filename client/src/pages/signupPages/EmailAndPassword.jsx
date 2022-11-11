import TextInput from "../../components/textInput";
import { useNavigate } from "react-router-dom";

function EmailAndPasswordSignupPage({handleChange, email, password}) {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
    
        navigate('/walk/signup/email');
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

export default EmailAndPasswordSignupPage;