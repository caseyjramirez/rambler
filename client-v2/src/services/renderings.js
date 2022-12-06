// pass along data.activity.name

function renderVerb(activityName) {
    if (activityName === 'bike' || activityName === 'Bike') {
        return 'Bike Ride'
    } else {
        return activityName
    }
}

export {
    renderVerb
}