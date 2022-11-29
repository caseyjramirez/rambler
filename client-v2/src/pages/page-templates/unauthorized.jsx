import { Outlet } from "react-router-dom";
import coverPhoto from '../../assets/testingWelcomePhoto.jpg';
import Input from '../../components/input';
import { useNavigate } from 'react-router-dom';

function Unauthorized() {
    const navigate = useNavigate();

    return (
        <div className="welcome">
        <img src={coverPhoto} alt="Testing" />
        
        <Outlet />
    </div>

    );
}

export default Unauthorized;