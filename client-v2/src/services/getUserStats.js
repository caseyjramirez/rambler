function getTopActivity(activities) {
    if (activities.length === 0) {
        return 'n/a'
    }
    
    const activityTypes = [
        {
            label: 'Walk',
            count: activities.filter(activity => activity.activity.name === 'Walk').length
        },
        {
            label: 'Hike',
            count: activities.filter(activity => activity.activity.name === 'Hike').length
        },
        {
            label: 'Bike',
            count: activities.filter(activity => activity.activity.name === 'Bike').length
        },
        {
            label: 'Run',
            count: activities.filter(activity => activity.activity.name === 'Run').length
        }
    ]
    
    let returnValue = activityTypes[0];
    
    activityTypes.forEach(at => {
        if(at.count > returnValue.count) {
            returnValue = at
        }
    })
    
    return returnValue.label;
}

function getTotalDistance(activities) {

    return activities.reduce((accumulator, object) => {
        return accumulator + object.distance;
    }, 0);
}



function getTotalActivities(activities) {
    return activities.length
}



function getMilesTillGoal() {

}




export {
    getTopActivity,
    getTotalDistance,
    getTotalActivities,
    getMilesTillGoal
}