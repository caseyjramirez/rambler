import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();


    return (
        <div className="navbar">
            {/* <p>test</p> */}
            <button onClick={() => navigate('/walk')} className="button">
                <p className="mr-10">Begin Today</p>
                <p>🥾</p>
            </button>
        </div>
    );
}

export default NavBar;