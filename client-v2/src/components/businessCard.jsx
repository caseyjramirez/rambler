import testingProfilePhoto from '../assets/testingProfilePhoto.jpg';

function BusinessCard() {
    return (
        <div className="business-card flex mb-20">
            <div className="business-card-profile-photo mr-20">
                <img src={testingProfilePhoto} alt="" />
            </div>

            <div className='business-card-content flex ai-center'>
                <div className="business-card-content-day">
                    <span className="tag blue">Wednesday</span>
                </div>

                <div>
                    <h1 className='mb-3'>Casey Ramirez</h1>
                    <p className='mb-10'>Software Engineer, Google</p>
                    <span className="tag small grey">tech</span>
                </div>

                <div className="business-card-content-details">
                    <div className="breaker-hor-2 mb-20"></div>

                    <div className="flex jc-space-between ml-20 mr-20">
                        <div className='flex flex-column ai-center'>
                            <h2>7.25 mi.</h2>
                            <p className="small">Distance</p>
                        </div>
                        
                        <div className='flex flex-column ai-center'>
                            <h2>3:00 pm</h2>
                            <p className="small">Time</p>
                        </div>

                        <div className='flex flex-column ai-center'>
                            <h2>Hike</h2>
                            <p className="small">Type</p>
                        </div>
 

                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default BusinessCard;