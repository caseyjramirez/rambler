import { useNavigate } from "react-router-dom";

function SidebarButton({nav, text}) {
    const navigate = useNavigate();
    return (
        <button className="large sidebar-button mb-20" onClick={() => navigate(nav)} >
            <h3 className="large">{text}</h3>
        </button>
    );
}

export default SidebarButton;