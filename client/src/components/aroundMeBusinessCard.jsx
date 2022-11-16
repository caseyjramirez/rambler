function AroundMeBusinessCard({ data, walkWithMe }) {

    function renderWalkWithMeButton() {
        return (
            <button onClick={walkWithMe} className="around-me-card-button">
                <p className='mr-10'>Walk with me!</p>
                <p className='mr-10'>🥾</p>
            </button>
        )
    }

    function renderCardConditionally() {
        if(data) {
            if(data.profile_photo) {
                return (
                <div>
                    <div className="around-me-card business-card-image-container">
                        <img className="business-card-image" src={data.profile_photo} alt="" />
                    </div>

                    <div className="business-card">
                        <div className="break mb-50"></div>
                        
                        <h1 className="mb-10">{data.first_name} {data.last_name}</h1>

                        <div className="mb-20">
                            <div className="flex flex-row mb-5">
                                <h3 className="mr-5">City: </h3>
                                <h3 className="fw-regular">{data.city.name}</h3>
                            </div>
                            
                            <div className="flex flex-row mb-5">
                                <h3 className="mr-5">Job: </h3>
                                <h3 className="fw-regular">{data.job_title}, {data.company}</h3>
                            </div>

                            <div className="flex flex-row mb-5">
                                <h3 className="mr-5">Industry: </h3>
                                <h3 className="fw-regular">{data.industry.name}</h3>
                            </div>
                        </div>

                        {data.description && 
                        <div className="mb-20">
                            <h3 className="mr-5 mb-5">Description:</h3>
                            <p className="around-me-card-description">{data.description}</p>
                        </div>}

                        {renderWalkWithMeButton()}
                    </div>
                </div>
                )
            } else {
                return (

                    <div className="business-card without-profile-pic">
                        
                        <h1 className="mb-10">{data.first_name} {data.last_name}</h1>

                        <div className="mb-20">
                            <div className="flex flex-row mb-5">
                                <h3 className="mr-5">City: </h3>
                                <h3 className="fw-regular">{data.city.name}</h3>
                            </div>
                            
                            <div className="flex flex-row mb-5">
                                <h3 className="mr-5">Job: </h3>
                                <h3 className="fw-regular">{data.job_title}, {data.company}</h3>
                            </div>

                            <div className="flex flex-row mb-5">
                                <h3 className="mr-5">Industry: </h3>
                                <h3 className="fw-regular">{data.industry.name}</h3>
                            </div>
                        </div>

                        {data.description && 
                        <div className="mb-20">
                            <h3 className="mr-5 mb-5">Description:</h3>
                            <p className="around-me-card-description">{data.description}</p>
                        </div>}

                        {renderWalkWithMeButton()}

                    </div>
                )
            }
        } else {
            return null
        }
    }

    return renderCardConditionally()
}

export default AroundMeBusinessCard;