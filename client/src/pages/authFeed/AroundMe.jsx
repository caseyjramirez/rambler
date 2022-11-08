import React, { useState, useEffect } from 'react';
import { getPostings } from '../../services/services'
import PostingCard from '../../components/postingCard';

function AroundMe() {
    const [postings, setPostings] = useState([])
    
    useEffect(() => {
        getPostings().then(d => setPostings(d.data));
    }, [])

    function goOnWalk(postingId) {
        // applyToPosting()
        setPostings(postings => postings.filter(posting => posting.id !== postingId))
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