import WalkCard from '../../components/walkCard';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Message from '../../components/message';

// ACTIVITY PAGE FEED
function Activity({ user }) {
    const navigate = useNavigate();

    const [messages, setMessages] = useState([])
    
    console.log(messages);


    

    return (
        <div className="card">

        <h1 className="around-me-title mb-20">Activity</h1>
        <div className="around-me">

            <div className="around-me-left">
                {
                    user.walks && user.walks.map(posting => 
                        <WalkCard 
                            key={posting.id} 
                            data={posting} 
                            setMessages={setMessages}
                        />)
                }
            </div>

            <div className="around-me-right">
                <div className='messages'>
                    <h3 className='mb-5'>Roy Lee</h3>
                    <div className="breaker mb-20"></div>

                    <Message />
                    <Message />
                    <Message />





                    <div className="messages-text-box">
                        <textarea rows="2" className='mr-10'></textarea>
                        <button>
                            <p>Send</p>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );
}

export default Activity;