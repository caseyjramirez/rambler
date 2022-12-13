function notifyOnNewActivity(userId, userActivities) {
    const now = new Date().toISOString()
    
    for(let i = 0; i < userActivities.length; i++) {
        if(userActivities[i].date < now) {
            continue;
        }

        if(userActivities[i].poster_id === userId && !userActivities[i].has_been_seen) {
            return true;
        }

    }
    
    return false;
}

export {
    notifyOnNewActivity
}