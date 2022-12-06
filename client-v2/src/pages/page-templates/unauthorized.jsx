import { Outlet } from "react-router-dom";
import coverPhoto from '../../assets/testingWelcomePhoto.jpg';

function Unauthorized() {

    return (
        <div className="welcome">
        <img src={coverPhoto} alt="Testing" />
        
        <Outlet />
    </div>

    );
}

export default Unauthorized;