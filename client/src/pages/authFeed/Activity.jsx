import WalkCard from "../../components/walkCard";
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// ACTIVITY PAGE FEED
function Activity({ user }) {
    const navigate = useNavigate();

    

    return (
        <div className="card">
            <h1 className="card-title">Activity</h1>
            <div className="card-feed">
                {
                    user && user.walks.map(walk => <WalkCard data={walk} />)
                }
            </div>
        </div>
    );
}

export default Activity;