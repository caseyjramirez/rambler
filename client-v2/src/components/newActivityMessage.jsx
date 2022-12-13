import { renderVerb } from "../services/renderings"

function NewActivityMessage({ activities, userId, onClick }) {
    
    const now = new Date().toISOString()
    
    const newActivities = activities.filter(activity => {
        if(activity.date > now && activity.poster_id === userId && !activity.has_been_seen) {
            return true
        } else {
            return false
        }
    })

    function renderMessage() {
        if(newActivities.length > 1) {
            return 'You have multiple new activities scheduled.'
        } else {
            return `You have a new ${renderVerb(newActivities[0].activity.name).toLowerCase()} with ${newActivities[0].user.first_name}.`
        }
    }



    return (
        <div className="new-activity-message-container flex jc-space-between ai-center">
            <div className="new-activity-message-notification"></div>
            <p className="new-activity-message">{renderMessage()}</p>
            <div>
                <button onClick={onClick} className="blue small new-activity-message-button">
                    <p>close</p>
                </button>
            </div>
        </div>
    )
}

export default NewActivityMessage;