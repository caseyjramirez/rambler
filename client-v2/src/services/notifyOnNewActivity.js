function notifyOnNewActivity(userId, userActivities) {
    const now = new Date().toISOString()
    
    for(let i = 0; i < userActivities.length; i++) {
        if(userActivities[i].date < now) {
            continue;
        }

        if(userActivities[i].posterId === userId && !userActivities[i].hasBeenSeen) {
            console.log(userActivities[i]);
            return true;
        }

    }
    
    return false;
}

export {
    notifyOnNewActivity
}