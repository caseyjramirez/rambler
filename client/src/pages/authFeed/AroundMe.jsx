import React, { useState, useEffect } from 'react';
import { getPostings } from '../../services/services'
import PostingCard from '../../components/postingCard';
import { createWalk } from '../../services/services'

function AroundMe({ user, addWalk }) {
    const [postings, setPostings] = useState([])
    
    useEffect(() => {
        getPostings().then(d => setPostings(d.data));
    }, [])

    async function goOnWalk(clickedPosting) {
        console.log(clickedPosting.id, user);

        const { data } = await createWalk({
            distance: clickedPosting.distance,
            location: clickedPosting.location,
            date: clickedPosting.date,
            user_one_id: clickedPosting.user.id,
            user_two_id: user.id,
            posting_id: clickedPosting.id
        })



        addWalk({
            id: data.id,
            date: data.date,
            distance: data.distance,
            location: data.location,
            user: data.user_one
        });

        setPostings(postings => postings.filter(posting => posting.id !== clickedPosting.id))
    }

    return (
        <div className="card">
            <h1 className="card-title">Around Me</h1>
            <div className="card-feed">
                {
                    postings.map(posting => <PostingCard data={posting} goOnWalk={goOnWalk} />)
                }
            </div>
        </div>
    );
}

export default AroundMe;