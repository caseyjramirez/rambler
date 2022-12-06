import CoverPhoto from '../../assets/default-header.jpg'
import testingProfilePhoto from '../../assets/testingProfilePhoto.jpg';

function AccountFeed({ user }) {
    return (
        <div className="account-feed">
            <div className="account-feed-item top-activity flex center-center">
                <p className='account-feed-item-title white'>Top Activity:</p>
                <h2 className='white'>Hiking</h2>
            </div>

            <div className="account-feed-item total-distance flex center-center">
                <p className='account-feed-item-title white'>Total Distance:</p>
                <h2 className='white'>30.00 mi</h2>
            </div>

            <div className="account-feed-item total-activities flex center-center">
                <p className='account-feed-item-title white'>Total Activities:</p>
                <h2 className='white'>20</h2>
            </div>

            <div className="account-feed-item distance-to-goal flex center-center">
                <p className='account-feed-item-title white'>Miles until Goal:</p>
                <h2 className='white'>Set Goal</h2>
            </div>
        </div>
    );
}

export default AccountFeed;