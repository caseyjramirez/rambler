import React, { useState } from 'react';
import DistanceSlider from '../../components/distanceSlider';
import TextInput from '../../components/textInput';
import PostingDateTimePicker from '../../components/dateTimePicker';
import { createPosting } from '../../services/services';
import { useNavigate } from "react-router-dom";

function GoWalk({ user }) {
  const navigate = useNavigate();

  const [distance, setDistance] = useState(1);
  const [location, setLocation] = useState('')
  const [date, setDate] = useState(new Date());

  const changeValue = (e, value) => {
    setDistance(value);
  };

  function renderMileWord() {
    if(distance === 1) return 'Mile'
    else return 'Miles'
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = await createPosting({distance, date: date.toISOString(), location, user_id: user.id})

    if(data.status === 201) {
      navigate('/');
    }
  }


  return (
      <div className='card'>
          <h1 className='card-title'>Go Walk!</h1>
          <div className='card-body-center' >
            <form onSubmit={handleSubmit}>
              <div className="mb-20">
                <h2 className='mb-20' >Distance: {distance} {renderMileWord()}</h2>
                <DistanceSlider distance={distance} onChange={changeValue} />
              </div>
            
              <div className="mb-20">
                <TextInput
                    label="Location"
                    onChange={e => setLocation(e.target.value)}
                    name="location"
                    value={location}
                />
              </div>

              <div className="mb-20">
                <PostingDateTimePicker
                    date={date}
                    onChange={e => setDate(e)}
                />
              </div>

              <button type="submit" className='blue full-span'>
                <p className='mr-10'>Go Walk!</p>
                <p className=''>🥾</p>
              </button>
            </form>
          
          </div>
      </div>
  );
}

export default GoWalk;