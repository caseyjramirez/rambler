import { getDate } from '../data/daySelector';

function validateNewPosting(day, activityId, location, distance, time) {
    if(!day) {
        return 'Select a day!'
    }
    
    if(!activityId) {
        return 'Select an activity!'
    }

    if(!location) {
        return 'Choose a starting point.'
    }

    if(!distance) {
        return 'Choose a distance.'
    }

    if(!time) {
        return 'Choose a starting time.'
    }

    if(parseInt(time) < 5) {
        return 'Activites must start after 5am.'
    }

    if(parseInt(time) >= 21) {
        return 'Activites must start before 9pm.'
    }

    if(distance < .25) {
        return 'Activites must be atleast .25 mi long.'
    }
    if(distance > 60) {
        return 'Activites cannot be over 60 mi long.'
    }
    
    const dateOfDay = getDate(day);        
    const date = new Date(`${dateOfDay} ${time}`)
    const now = new Date()
    
    if(date < now) {
        return 'Choose a future date'
    }
    
}

export {
    validateNewPosting
}