import defaultProfilePhoto from '../assets/default-profile-photo.jpg'
import { getDay, getTime } from '../data/daySelector';

function BusinessCard({data, onClick, cta = 'Learn More'}) {

    function getDayFromDate() {
        return getDay(data.date)
    }

    function getTimeFromDate() {
        return getTime(data.date)
    }

    function renderDistance() {
        if(data.distance.toString().length === 1) {
            return `0${data.distance}`
        } else {
            return data.distance
        }
    }

    return (
        <div className="business-card flex mb-20">
            <div className="business-card-profile-photo mr-20">
                <img src={data.user.profile_photo || defaultProfilePhoto} alt="" />
                
                <div className="business-card-cta">
                    <button onClick={onClick ? (() => onClick(data.id)) : null} className='white span100'>
                            <h3 className="">{cta}</h3>
                    </button>
                </div>
            </div>

            <div className='business-card-content flex ai-center'>
                <div className="business-card-content-day">
                    <span className="tag blue">{getDayFromDate()}</span>
                </div>

                <div>
                    <h1 className='mb-3'>{data.user.first_name} {data.user.last_name}</h1>
                    <p className='mb-10'>{data.user.job_title}, {data.user.company}</p>
                    <span className="tag small grey">{data.user.industry}</span>
                </div>

                <div className="business-card-content-details">
                    <div className="breaker-hor-2 mb-20"></div>

                    <div className="flex jc-space-between ml-20 mr-20">
                        <div className='flex flex-column ai-center'>
                            <h2>{renderDistance()} mi.</h2>
                            <p className="small">Distance</p>
                        </div>
                        
                        <div className='flex flex-column ai-center'>
                            <h2>{getTimeFromDate()}</h2>
                            <p className="small">Time</p>
                        </div>

                        <div className='flex flex-column ai-center'>
                            <h2>{data.activity.name}</h2>
                            <p className="small">Type</p>
                        </div>
 

                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default BusinessCard;