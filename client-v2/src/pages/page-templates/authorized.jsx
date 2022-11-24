import Hamburger from "../../components/hamburger";
import { Outlet } from "react-router-dom";
import SidebarButton from "../../components/sidebarButton";

function Authorized() {
    return (
        <div className="layout">
            <div className="sidebar">
                <SidebarButton
                    nav='/go'
                    text='Go!'
                />

                <SidebarButton
                    nav='/'
                    text='Activity.'
                />

                <SidebarButton
                    nav='/around-me'
                    text='Around Me.'
                />

                <SidebarButton
                    nav='/account'
                    text='Acount.'
                />

            </div>

            <div className="feed">
                <Outlet />
            </div>
        </div>
    );
}

export default Authorized;