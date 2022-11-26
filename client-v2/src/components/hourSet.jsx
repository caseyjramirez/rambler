import React, { useRef } from 'react';

function HourSet({ hour }) {
    return (
        <div className="calendar-hour-set flex" id={hour.hour}>
            <h3 className="time">{hour.label}</h3>
            <div className="breaker-hor blue"></div>
        </div>
    );
}

export default HourSet;