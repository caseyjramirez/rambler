import { useNavigate, Outlet } from "react-router-dom";

function Walk() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="sidebar-layout">
                <div className="sidebar">

                    <button onClick={() => navigate('/walk')} className="button span text-center">
                        <p className="mr-10">Login.</p>
                        <p>👋</p>
                    </button>

                    <button onClick={() => navigate('/walk/signup')} className="button span text-center">
                        <p className="mr-10">Sign Up!</p>
                        <p>🏆</p>
                    </button>

                </div>

                <div className="feed">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Walk;