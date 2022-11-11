import testImage from '../../assets/test-profile-photo.jpg'
function BusinessCard() {
    const desc = "The reset styles given here are intentionally very generic. There isn't any default color or background set for the body element, for example. I don't particularly recommend that you just use this in its unaltered state in your own projects."
    return (
        <div>
            <div className="business-card-image-container">
                <img className="business-card-image" src={testImage} alt="" />
            </div>

            <div className="business-card">
                <div className="break mb-50"></div>
                <h1 className="mb-10">Casey Ramirez</h1>

                <div className="mb-20">
                    <div className="flex flex-row mb-5">
                        <h3 className="mr-5">City: </h3>
                        <h3 className="fw-regular">Dallas</h3>
                    </div>
                    
                    <div className="flex flex-row mb-5">
                        <h3 className="mr-5">Job: </h3>
                        <h3 className="fw-regular">Software Engineer, Google</h3>
                    </div>

                    <div className="flex flex-row">
                        <h3 className="mr-5">Email: </h3>
                        <h3 className="fw-regular">test@email.com</h3>
                    </div>
                </div>


                <div className="flex flex-row mb-5">
                    <h3 className="mr-5">Description: <span className="fw-regular">{desc}</span></h3>
                </div>
            </div>
        </div>
    );
}

export default BusinessCard;