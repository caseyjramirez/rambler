import { useNavigate, Outlet } from "react-router-dom";
import SidebarButton from '../../components/sidebarButton';

function Walk() {
    const navigate = useNavigate();

    return (
        <div className="sidebar-layout">
            <div className="sidebar">
                <SidebarButton 
                    nav='/walk'
                    emoji='👋'
                    text='Login.'
                />

                <SidebarButton 
                    nav='/walk/signup'
                    emoji='🏆'
                    text='Sign up!'
                />
            </div>

            <div className="feed">
                <Outlet />
            </div>
        </div>
    );
}

export default Walk;