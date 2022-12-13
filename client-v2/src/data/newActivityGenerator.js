function getDuration(activtiyType, distance) {
    if(activtiyType === 'Bike') {
        return distance / 15
    }

    else if(activtiyType === 'Hike') {
        return distance / 3
        
    }
    else if(activtiyType === 'Walk') {
        return distance / 2.5
    } 
    else if(activtiyType === 'Run') {
        return distance / 5
    }
}

function formatNewActivity(posting, userId) {
    return {
        distance: posting.distance,
        duration: getDuration(posting.activity.name, posting.distance),
        location: posting.location,
        date: posting.date,
        has_been_seen: false,
        user_one_id: posting.user.id,
        user_two_id: userId,
        posting_id: posting.id,
        activity_id: posting.activity.id
    }
}

export {
    formatNewActivity
}