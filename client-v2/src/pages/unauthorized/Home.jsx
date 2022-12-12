import ProductNav from "../../components/productNav";
import SidebarButton from "../../components/sidebarButton";
import { loginPage } from "../../data/welcomeNav";
import coverPhoto from '../../assets/testingWelcomePhoto.jpg';
import { useNavigate } from "react-router-dom";

function Home() {
    const nav = useNavigate();
    return (
        <div className="welcome-modal">
            <div className="flex flex-column jc-center span100h span100">
                <div className="mb-10">
                    <h1 className='mb-5'>Welcome to rambler.</h1>
                    <h3>Rambler was created by Casey Ramirez as a campstone project.</h3>
                    <div className="span-hor"></div>
                </div>

                <div className="breaker-hor black mb-20"></div>
                
                <div className="flex">
                    <div className="mr-20">
                        <button onClick={() => nav('/welcome')} type='submit' className='large black'>
                            <h3 className="large">Login</h3>
                        </button>
                    </div>
                    <div>
                        <button onClick={() => nav('/about')} type='submit' className='large black'>
                            <h3 className="large">About</h3>
                        </button>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Home;