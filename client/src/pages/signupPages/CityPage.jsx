import { useNavigate } from "react-router-dom";

function CitySignupPage() {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

    
        if(false) {
          navigate('/');
        }
    }
    return (
        <div className='signup'>
            <div className="signup-left">
                <h1>hello</h1>
                <form onSubmit={handleSubmit}>

                </form>
            </div>
            <div className="signup-right">
                <h1>hello</h1>
            </div>
        </div>
    );
}

export default CitySignupPage;