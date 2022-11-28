import { add } from 'date-fns'
const currDay = new Date().getDay();
// const currDay = 0;
const difference = [0, 1, 2, 3, 4, 5, 6]

const days = [
    {
        label: 'Su',
        day: 'Sunday',
        date: getDaysDate(0)
    },
    {
        label: 'M',
        day: 'Monday',
        date: getDaysDate(1)
    },
    {
        label: 'Tu',
        day: 'Tuesday',
        date: getDaysDate(2)
    },
    {
        label: 'W',
        day: 'Wednesday',
        date: getDaysDate(3)
    },
    {
        label: 'Th',
        day: 'Thursday',
        date: getDaysDate(4)
    },
    {
        label: 'F',
        day: 'Friday',
        date: getDaysDate(5)
    },
    {
        label: 'Sa',
        day: 'Saturday',
        date: getDaysDate(6)
    },
]

function getDaysDate(day) {
    let d = new Date()
    let offset;

    // so if the day coming in is less than the current day 
    // than we know this day has already happened this week and we are talking about this day in the following week
    //  if it has already happened this week then we want our offset to be the minus index of the difference arr.
    // otherwise we want our offset to be the day coming in minus the current day.
    // we then use this offset to add days to our date
    if(day < currDay) {
        offset = difference[difference.length + (day - currDay)]
    } else {
        offset = day - currDay
    }


    let dateUpdatedWithOffset = add(d, {
        days: offset
    })
    
    return dateUpdatedWithOffset.toDateString() // converting to a date string
}

function getDate(query) {
    return days.find(day => day.label === query).date
}


export { days, currDay, getDate }
