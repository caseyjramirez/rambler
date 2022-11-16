import React, { useState, useEffect } from 'react';
import { getPostings } from '../../services/services'
import PostingCard from '../../components/postingCard';
import { createWalk } from '../../services/services'
import { getUser } from '../../services/services'
import AroundMeBusinessCard from '../../components/aroundMeBusinessCard';

function AroundMe({ user, addWalk }) {
    const [postings, setPostings] = useState([])
    const [userOfInterest, setUserOfInterest] = useState(null)
    const [posting, setPosting] = useState(null)
    const [hasBeenbooked, setHasBeenBooked] = useState(false)
    
    useEffect(() => {
        getPostings().then(d => setPostings(d.data));
    }, [])

    async function goOnWalk() {
        setHasBeenBooked(true)

        const { data } = await createWalk({
            distance: posting.distance,
            location: posting.location,
            date: posting.date,
            user_one_id: posting.user.id,
            user_two_id: user.id,
            posting_id: posting.id
        })


        addWalk({
            id: data.id,
            date: data.date,
            distance: data.distance,
            location: data.location,
            user: data.user_one
        });

        setPostings(postings => postings.filter(postingObj => postingObj.id !== posting.id))
    }

    async function learnMore(userId, posting) {
        setHasBeenBooked(false)
        setPosting(posting)
        const {data} = await getUser(userId)
        setUserOfInterest(data);
    }

    function renderRight() {
        console.log(hasBeenbooked);
        return hasBeenbooked ? (<h1 className='around-me-confirmation'>Your Walk Has been booked!</h1>) : (<AroundMeBusinessCard data={userOfInterest} walkWithMe={goOnWalk} />)
    }

    return (
        <div className="card">

            <h1 className="around-me-title mb-20">Around Me</h1>
            <div className="around-me">

                <div className="around-me-left">
                    {
                        postings && postings.map(posting => 
                            <PostingCard 
                                key={posting.id} 
                                data={posting} 
                                learnMore={learnMore} 
                            />)
                    }
                </div>

                <div className="around-me-right">
                    {renderRight()}
                </div>
                
            </div>
        </div>
    );
}

export default AroundMe;