import { Outlet } from "react-router-dom";
import { notifyOnNewActivity } from "../../services/notifyOnNewActivity";
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
                        notification={notifyOnNewActivity(user.id, user.activities)}
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