function ActivityOnCalendar({ data, onClick }) {
    const minute  = new Date(data.date).getMinutes()

    function renderTimeOffset() {

        if(minute < 5) {
            return ""
        } 
        else if(minute >= 5 && minute < 10) {
            return "min5"
        } 
        else if(minute >= 10 && minute < 15) {
            return "min10"
        } 
        else if(minute >= 15 && minute < 20) {
            return "min15"
        } 
        else if(minute >= 20 && minute < 25) {
            return "min20"
        } 
        else if(minute >= 25 && minute < 30) {
            return "min25"
        } 
        else if(minute >= 30 && minute < 35) {
            return "min30"
        } 
        else if(minute >= 35 && minute < 40) {
            return "min35"
        } 
        else if(minute >= 40 && minute < 45) {
            return "min40"
        } 
        else if(minute >= 45 && minute < 50) {
            return "min45"
        } 
        else if(minute >= 50 && minute < 55) {
            return "min50"
        } 
        else {
            return "min55"
        }
    }

    function renderActivityDuration(duration) {
        if(duration < .5) {
            return 'activity-set-30'
        }
        else if(duration >= .5 && duration < 1) {
            return 'activity-set-60'
        }
        else if(duration >= 1 && duration < 1.5) {
            return 'activity-set-90'
        }
        else if(duration >= 1.5 && duration < 2) {
            return 'activity-set-120'
        }
        else if(duration >= 2 && duration < 2.5) {
            return 'activity-set-150'
        }
        else if(duration >= 3 && duration < 3.5) {
            return 'activity-set-180'
        }
        else if(duration >= 3.5 && duration < 4) {
            return 'activity-set-210'
        }
        else if(duration >= 4) {
            return 'activity-set-240'
        }
    }



    return (
        <div onClick={() => onClick(data.id)} className={`calendar-hour-set-activity pointer ${renderTimeOffset()} ${renderActivityDuration(data.duration)}`}>
            <h3 className="large white">{data.user.first_name} {data.user.last_name}</h3>
            <p className="small white ml-20 calendar-hour-set-activity-location">{data.location}</p>

            <div className="calendar-hour-set-activity-activity-type">
                <span className="tag small white-blue">{data.activity.name}</span>
            </div>
        </div>
    );
}

export default ActivityOnCalendar;
