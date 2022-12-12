import React, { useState } from 'react';
import Error from './error';

function SetGoal({ currentActivityGoal, isOpen, onClose, setNewGoal }) {

    const [activityGoal, setActivityGoal] = useState(currentActivityGoal)
    const [error, setError] = useState(null)

    function renderClass() {
        return isOpen ? 'set-goal-background active flex center-center' : 'set-goal-background flex center-center';
    }

    function onSet() {
        setError('')
        if(activityGoal && activityGoal > 0) {
            setNewGoal(activityGoal)
            onClose()
        } else {
            setError('Activty Goal Must be above 0.')
        }
    }

    
    return (
        <div className={renderClass()}>
            <div className="set-goal-modal">
                <div className="mb-20">
                    <h1 className='mb-5'>Activity Goal</h1>
                    <h3>How many miles would you like travel with rambler?</h3>
                </div>

                <div className="set-goal-input mb">
                    {activityGoal || activityGoal === 0 ? null : <h1 className='ml-15 mt-10 grey'>Set your goal.</h1>} 
                    <input value={activityGoal} onChange={(e) => setActivityGoal(e.target.value)} min={0} type="number" defaultValue={'fsdf'}/>
                </div>

                <div className="breaker-hor mb-10"></div>


                <div className="mb-20">
                    {error && <Error error={error}/>}

                </div>

                <div className="mb-20">
                    <button onClick={onSet} className='grey mr-20'>
                        <h3 className="large">Set Goal</h3>
                    </button>
   
                    <button onClick={onClose} className='grey'>
                        <h3 className="large">Cancel</h3>
                    </button>
                </div>

            </div>

        </div>
    );
}

export default SetGoal;