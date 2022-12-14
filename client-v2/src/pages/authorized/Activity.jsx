import React, { useState, useEffect } from 'react';
import { add } from 'date-fns'
import BusinessCard from "../../components/businessCard";
import BusinessCardPlaceholder from '../../components/BusinessCardPlaceHolder';
import Message from '../../components/message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { createMessage, deleteActivity, setActivitiesToSeen } from '../../services/services';
import ActivityOnCalendar from '../../components/activityOnCalendar';
import LocalTimeTicker from '../../components/localTimeTicker';
import { hours } from '../../data/hours'
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import { getGeocode, getLatLng } from "use-places-autocomplete";
import EditActivity from '../../components/editActivity';
import { notifyOnNewActivity } from '../../services/notifyOnNewActivity';
import NewActivityMessage from '../../components/newActivityMessage';
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


function Activity({ user, addMessage, userCityCord, removeActivity, newActivitiesHaveBeenSeen }) {
        
    const [currDate, setCurrDate] = useState(new Date())
    const [dateObj, setDateObj] = useState({
        month: month[currDate.getMonth()],
        day: currDate.getDate(),
        year: currDate.getFullYear(),
        dayOfTheWeek: weekday[currDate.getDay()]
    })
    const [todaysActivities, setTodaysActivities] = useState(new Array(user.activities.filter(activity => new Date(activity.date).toDateString() === currDate.toDateString())))
    const [activityOfInterest, setActivityOfInterest] = useState()
    const [isMessaging, setIsMessaging] = useState(false)
    const [newMessage, setNewMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [cord, setCord] = useState()
    const [cordHasBeenSet, setCordHasBeenSet] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [isShowingNewActivityMessage, setIsShowingNewActivityMessage] = useState(true)
    const [localTime, setLocalTime] = useState({
        hour: new Date().getHours(),
        minute: new Date().getMinutes()
    })


    useEffect(() => {
        setActivityOfInterest(todaysActivities[0][0])
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setLocalTime({
                hour: new Date().getHours(),
                minute: new Date().getMinutes()
            })
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setDateObj({
            month: month[currDate.getMonth()],
            day: currDate.getDate(),
            year: currDate.getFullYear(),
            dayOfTheWeek: weekday[currDate.getDay()]
        })
        
        setTodaysActivities(user.activities.filter(activity => new Date(activity.date).toDateString() === currDate.toDateString()))
    }, [currDate, user.activities])

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
        libraries: ['places']
    })


    function onDayChange(change) {
        setCurrDate(currDate => add(currDate, {
            days: change
        }))
    }

    function goToToday() {
        setCurrDate(new Date())
    }

    async function onActivityClick(activityId) {
        setCordHasBeenSet(true)
        newActivitiesHaveBeenSeen()
        const activity = todaysActivities.find(activity => activity.id === activityId)
        
        setMessages(activity.messages)
        setActivityOfInterest(activity);

        const results = await getGeocode({ address: activity.location });
        const { lat, lng } = await getLatLng(results[0]);
        setCord({ lat, lng });

        openMessage(activityId)
    }

    function getTimeOfCurrDaysActivity() {
        return todaysActivities.map(activity => new Date(activity.date).getHours())
    }

    function getCorrectActivityForHour(hour) {
        return todaysActivities.find(activity => new Date(activity.date).getHours() === hour)
    }
    

    function openMessage(activityId) {
        setIsMessaging(true)
        onActivityClick(activityId)
    }

    function goBackToCalendar() {
        setIsMessaging(false)
    }

    async function sendMessage() {
        const data = await createMessage({
            sender_id: user.id,
            reciever_id: activityOfInterest.user.id,
            walk_id: activityOfInterest.id,
            message: newMessage
        })

        
        if(data.status === 201) {
            console.log(data);
            setNewMessage('')

            const newMessage = {
                id: data.data.id,
                message: data.data.message,
                reciever_id: data.data.reciever,
                sender_id: data.data.sender,
                activity_id: data.data.activity
            }

            setMessages(messages => [...messages, newMessage])
            addMessage(newMessage)

        } else {
            console.log('oops something broke!!');
        }

    }

    async function cancelActivity(activityId) {
        setIsEditing(false);
        setIsMessaging(false);
        const data = await deleteActivity(activityId, {user_id: user.id})
        console.log(data);

        if(data.status === 204) {
            removeActivity(activityId)
            setActivityOfInterest(todaysActivities[0][0])
        }
        
    }

    
    function isViewingToday() {
        const todayDate = new Date();
        
        const today = {
            month: month[todayDate.getMonth()],
            day: todayDate.getDate(),
            year: todayDate.getFullYear(),
        }

        if(today.month === dateObj.month && today.day === dateObj.day && today.year === dateObj.year) {
            return true;
        } else {
            return false;
        }

    }

    function onCloseNewActivityMessage() {
        setIsShowingNewActivityMessage(false)
        // update on the backend.
        setActivitiesToSeen({
            user_id: user.id
        })
    }

    function renderNewActivityMessage() {
        return notifyOnNewActivity(user.id, user.activities) && isShowingNewActivityMessage ? <NewActivityMessage userId={user.id} activities={user.activities} onClick={onCloseNewActivityMessage}/> : null;
    }

    function mapDay() { 
        let returnValue = [];
        for(let i = 0; i <hours.length; i++) {

            // if current hour === local time
            if(localTime.hour === hours[i].hour) {
                if(getTimeOfCurrDaysActivity().includes(hours[i].hour)) {
                    returnValue.push(
                        <div className="calendar-hour-set flex" id={hours[i].hour}>
                            <h3 className="time">{hours[i].label}</h3>
                            <div className="breaker-hor blue"></div>
                            {isViewingToday() ? <LocalTimeTicker minute={localTime.minute} /> : null}
                            <ActivityOnCalendar userId={user.id} data={getCorrectActivityForHour(hours[i].hour)} onClick={onActivityClick} />
                        </div>
                    )
                } else {
                    returnValue.push(
                        <div className="calendar-hour-set flex" id={hours[i].hour}>
                            <h3 className="time">{hours[i].label}</h3>
                            <div className="breaker-hor blue"></div>
                            {isViewingToday() ? <LocalTimeTicker minute={localTime.minute} /> : null}
                        </div>
                    )
                }
            // if it doesnt === curr hour
            } else {
                if(getTimeOfCurrDaysActivity().includes(hours[i].hour)) {
                    returnValue.push(
                        <div className="calendar-hour-set flex" id={hours[i].hour}>
                            <h3 className="time">{hours[i].label}</h3>
                            <div className="breaker-hor blue"></div>
                            <ActivityOnCalendar userId={user.id} data={getCorrectActivityForHour(hours[i].hour)} onClick={onActivityClick} />
                        </div>
                    )
                } else {
                    returnValue.push(
                        <div className="calendar-hour-set flex" id={hours[i].hour}>
                            <h3 className="time">{hours[i].label}</h3>
                            <div className="breaker-hor blue"></div>
                        </div>
                    )
                }

            }
        }

        return returnValue;
    }

    return (  
        <div className="activity">
            <EditActivity 
                data={activityOfInterest}
                isEditing={isEditing}
                goBack={() => setIsEditing(false)}
                cancelWalk={cancelActivity}
            />
            <div className="activity-calendar">
                <div className="activity-calendar-header">
                    {
                        isMessaging ? (
                            <div className="flex jc-space-between ai-end">
                                <div className="flex">
                                    <button onClick={goBackToCalendar} className="mr-30">
                                        <h3 className="large">Back to Calendar</h3>
                                    </button>                            
                                </div>
                            </div>
                        ) : (
                            <div className="flex jc-space-between ai-end">
                                <div className="flex">
                                    <button onClick={goToToday} className="mr-30">
                                        <h3 className="large">Today</h3>
                                    </button>

                                    <button onClick={() => onDayChange(-1)} className="mr-10">
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>                               

                                    <button onClick={() => onDayChange(+1)}>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>                               
                                </div>
                                <h2>{dateObj.month} {dateObj.day}, {dateObj.year}</h2>
                            </div>
                        )
                    }
                </div>

                <div className="activity-calendar-calendar">
                    {
                        isMessaging ? (
                            <div className="span100 flex jc-space-between mb-10">
                                <h2>{activityOfInterest.user.first_name} {activityOfInterest.user.last_name}</h2>
                                {/* <div>
                                    <span className="tag grey circle">test</span>
                                </div> */}
                            </div>
                        ) : (
                            <div className="span100 flex jc-space-between mb-20">
                                <div>
                                    <span className="tag grey">{dateObj.dayOfTheWeek}</span>
                                </div>
                                <div>
                                    <span className="tag grey circle">{dateObj.day}</span>
                                </div>
                            </div>
                        )
                    }
                    <div className="breaker-hor blue"></div>
                    

                    {
                        isMessaging ? (
                            <div className="messages">
                                <div className="messages-body mt-5">
                                    {
                                        messages && messages.map(message => <Message 
                                            userId={user.id} 
                                            message={message} 
                                            sender={`${user.first_name} ${user.last_name}`} 
                                            reciever={`${activityOfInterest.user.first_name} ${activityOfInterest.user.last_name}`}
                                        />)
                                    }
                                </div>
                                <div className="messages-text-box">
                                    <div className="breaker-hor mb-10"></div>
                                    <div className="flex span100 sdfgsdfg jc-space-between ai-end">
                                        <textarea value={newMessage} onChange={e => setNewMessage(e.target.value)} className='mr-10 activitty-text-area' />

                                        <div>
                                            <button onClick={sendMessage} className="black">
                                                <h3 className="large">Send</h3>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>                            
                        ) : (
                            <div className="activity-calendar-calendar-hours">
                                {renderNewActivityMessage()}
                                {mapDay()}
                            </div>
                        )
                    }
                </div>
            </div>

            
            
            <div className="activity-feed">
                {activityOfInterest ? <BusinessCard data={activityOfInterest} onClick={() => setIsEditing(true)} cta={'Cancel'}/> : <BusinessCardPlaceholder/> }

                <div className="activity-feed-map">
                    {isLoaded ? (
                    <GoogleMap 
                        center={cord || userCityCord} 
                        zoom={cordHasBeenSet ? 15 : 13}
                        mapContainerStyle={{ width: '100%', height: '100%' }} 
                        options={{
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false,
                        }}
                    >
                        {cordHasBeenSet && <MarkerF position={cord} />}
                    </GoogleMap>
                    ) : (null)}

                </div>
            </div>
        </div>
    );
}

export default Activity;