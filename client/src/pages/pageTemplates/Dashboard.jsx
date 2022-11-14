import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SidebarButton from "../../components/sidebarButton";


function Dashboard({ user }) {
    
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
                nav='/history'
                emoji='📖'
                text='History'
            />

        </div>

        <div className="feed">
            <Outlet />
        </div>
    </div>
    );
}

export default Dashboard;