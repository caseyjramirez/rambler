import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import BusinessCard from "../../components/businessCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import HourSet from "../../components/hourSet";
import { hours } from '../../data/hours'

function Activity() {
    
    useEffect(() => {
        // const testHour = document.getElementById('5');
        // const root = createRoot(testHour);
        // // root.render([<HourSet hour={hours[0]} />, <h1>Hello</h1>]);
        // root.render([<h1>Hello</h1>]);
    }, [])




    return (  
        <div className="activity">
            <div className="activity-calendar">
                <div className="activity-calendar-header">
                    <div className="flex jc-space-between ai-end">
                        <div className="flex">
                            <button className="mr-30">
                                <h3 className="large">Today</h3>
                            </button>

                            <button className="mr-10">
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>                               

                            <button>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>                               
                        </div>
                        <h2>November 23, 2022</h2>
                    </div>
                </div>
                
                
                
                <div className="activity-calendar-calendar">
                    <div className="span100 flex jc-space-between mb-20">
                        <div>
                            <span className="tag grey">Wednesday</span>
                        </div>
                        <div>
                            <span className="tag grey circle">23</span>
                        </div>
                    </div>
                    
                    <div className="breaker-hor blue"></div>

                    <div className="activity-calendar-calendar-hours">
                        {
                            hours.map(hour => <HourSet key={hour.hour} hour={hour} />)
                        }
                        {/* <HourSet hour={hours[0]} /> */}
                    </div>
                    
                </div>
            </div>

            
            
            
            
            <div className="activity-feed">
                <BusinessCard />

                <div className="activity-feed-map">

                </div>
            </div>
        </div>
    );
}

export default Activity;