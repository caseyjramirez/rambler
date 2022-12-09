

function AccountFeed({ topActivity, totalDistance, totalActivities, milesTillGoal }) {
    return (            
        <div className="account-feed">
            <div className="account-feed-item top-activity flex center-center">
                <p className='account-feed-item-title white'>Top Activity:</p>
                <h2 className='white'>{topActivity && topActivity}</h2>
            </div>

            <div className="account-feed-item total-distance flex center-center">
                <p className='account-feed-item-title white'>Total Distance:</p>
                <h2 className='white'>{totalDistance && totalDistance}</h2>
            </div>

            <div className="account-feed-item total-activities flex center-center">
                <p className='account-feed-item-title white'>Total Activities:</p>
                <h2 className='white'>{totalActivities && totalActivities}</h2>
            </div>

            <div className="account-feed-item distance-to-goal flex center-center">
                <p className='account-feed-item-title white'>Miles until Goal:</p>
                <h2 className='white'>{milesTillGoal && milesTillGoal}</h2>
            </div>
        </div>
    );
}

export default AccountFeed;