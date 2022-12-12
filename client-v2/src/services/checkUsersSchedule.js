import { add } from 'date-fns'
import { renderVerb } from './renderings'

function checkUserSchedule(usersActivities, postingTime) {

    for(let i = 0; i < usersActivities.length; i++) {

        const { date: startTime, duration, id } = usersActivities[i]
        
        const endTime = add(new Date(startTime), {
            hours: duration
        })

        if(postingTime > startTime && postingTime < endTime.toISOString()) {
            return renderErrorMessage(usersActivities, id)
        }
    }
    return null
}

function renderErrorMessage(usersActivities, id) {
    let activity = usersActivities.find(activity => activity.id === id);
    return `You already have a ${renderVerb(activity.activity.name).toLowerCase()} with ${activity.user.first_name} at that time.`
}


export {
    checkUserSchedule
}