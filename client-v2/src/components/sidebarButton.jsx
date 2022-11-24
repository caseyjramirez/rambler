import { useNavigate, useLocation } from "react-router-dom";

function SidebarButton({nav, text, raiseClick }) {
    const navigate = useNavigate();
    const { pathname: location } = useLocation();

    function renderSelectedIndicator() {
        return location === nav ? (<div className="sidebar-button-selected"></div>) : (null);
    }

    function onClick() {
        navigate(nav);
        raiseClick();
    }

    return (
        <button className="large sidebar-button mb-20 flex flex-row ai-center" onClick={onClick} >
            <h3 className="large">{text}</h3>


            {renderSelectedIndicator()}
        </button>
    );
}

export default SidebarButton;