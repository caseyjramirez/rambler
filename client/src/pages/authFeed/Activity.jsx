import WalkCard from '../../components/walkCard';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Message from '../../components/message';
import { createMessage } from '../../services/services';

// ACTIVITY PAGE FEED
function Activity({ user, addMessage }) {
    const navigate = useNavigate();

    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [walk, setWalk] = useState(null)
    const [reciever, setReciever] = useState('')
    const [isConvoSelected, setIsConvoSelected] = useState(false)

    function setConvo(walk) {
        setIsConvoSelected(true)
        setMessages(walk.messages);
        setWalk(walk)
        setReciever(`${walk.user.first_name} ${walk.user.last_name}`)
    }

    async function sendMessage() {

        const data = await createMessage({
            sender_id: user.id,
            reciever_id: walk.user.id,
            walk_id: walk.id,
            message: newMessage
        })

        if(data.status === 201) {
            setNewMessage('')

            const newMessage = {
                id: data.data.id,
                message: data.data.message,
                reciever_id: data.data.reciever,
                sender_id: data.data.sender,
                walk_id: data.data.walk
            }

            setMessages(messages => [...messages, newMessage])
            addMessage(newMessage)

        } else {
            console.log('oops something broke!!');
        }
        

    }

    function renderActivityPage() {
        return user.walks.length ? (
            <div className="around-me">     
                <div className="around-me-left">
                    {
                        user.walks && user.walks.map(walk => 
                            <WalkCard 
                                key={walk.id} 
                                data={walk} 
                                setConvo={setConvo}
                            />)
                    }
                </div>

                <div className="around-me-right">
                    <div className='messages'>
                        {renderRight()}
                    </div>
                </div>
            </div>

        ) : (
            <div className="conditional-command-container">
                <h3 className='conditional-command'>Apply for walks in the Around Me page to begin!</h3>
            </div>
        );
    }

    function renderRight() {
        return isConvoSelected ? (
            <>            
                <h3 className='my-10'>{reciever}</h3>
                <div className="breaker"></div>
                    <div className="messages-body mt-5">
                        {
                            messages && messages.map(message => <Message userId={user.id} message={message} sender={`${user.first_name} ${user.last_name}`} reciever={reciever}/>)
                        }
                    </div>
                <div className="messages-text-box">
                        <textarea value={newMessage} onChange={e => setNewMessage(e.target.value)} className='mr-10' />
                        <button onClick={sendMessage} type='submit'>
                            <p>Send</p>
                        </button>
                </div>
            </>
        ) : (
            <div className="conditional-command-container">
                <h3 className='conditional-command'>Select a convo to begin!</h3>
            </div>
        )
    }

    return (
        <div className="card">

            <h1 className="around-me-title mb-20">Activity</h1>

            {renderActivityPage()}
                
        </div>
    );
}

export default Activity;