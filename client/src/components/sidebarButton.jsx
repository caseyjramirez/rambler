import { useNavigate } from "react-router-dom";

function SidebarButton({nav, text, emoji}) {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(nav)} className="span">
            <p className="mr-10">{text}</p>
            <p>{emoji}</p>
        </button>
    );
}

export default SidebarButton;