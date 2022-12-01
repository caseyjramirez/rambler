function ActivityOnCalendar({ data, onClick }) {
    return (
        <div onClick={() => onClick(data.id)} className="calendar-hour-set-activity pointer">
            <h3 className="large white mt-10 ml-20">{data.user.first_name} {data.user.last_name}</h3>
            <p className="small white ml-20 calendar-hour-set-activity-location">{data.location}</p>

            <div className="calendar-hour-set-activity-activity-type mt-10 mr-10">
                <span className="tag small white-blue">{data.activity.name}</span>
            </div>
        </div>
    );
}

export default ActivityOnCalendar;