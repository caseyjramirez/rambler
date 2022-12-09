import Hamburger from "../../components/hamburger";
import { Outlet } from "react-router-dom";
import SidebarButton from "../../components/sidebarButton";

function Authorized({ user }) {
    return (
        <div className="layout">
            <div className="sidebar-container">
                <div className="sidebar">
                    <SidebarButton
                        nav='/go'
                        text='Go!'
                    />

                    <SidebarButton
                        nav='/around-me'
                        text='Around Me.'
                    />
                    
                    <SidebarButton
                        nav='/'
                        text='Activity.'
                    />


                    <SidebarButton
                        nav='/account'
                        text='Acount.'
                        notification={!user.complete_profile}
                    />

                </div>
            </div>

            <div className="feed">
                <Outlet />
            </div>
        </div>
    );
}

export default Authorized;