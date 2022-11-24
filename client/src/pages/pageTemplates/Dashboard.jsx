import { Outlet } from "react-router-dom";
import SidebarButton from "../../components/sidebarButton";


function Dashboard() {
    
    return (
        <div className="sidebar-layout">
        <div className="sidebar">
            <SidebarButton
                nav='/go-walk'
                emoji='🥾'
                text='Go Walk!'
            />

            <SidebarButton
                nav='/'
                emoji='🌲'
                text='Activity'
            />

            <SidebarButton
                nav='/around-me'
                emoji='📍'
                text='Around Me'
            />

            <SidebarButton
                nav='/account'
                emoji='📖'
                text='Acount'
            />

        </div>

        <div className="feed">
            <Outlet />
        </div>
    </div>
    );
}

export default Dashboard;