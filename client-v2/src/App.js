import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { authorizeUser } from './services/services';
import Hamburger from './components/hamburger';
import { productPage } from './data/welcomeNav';

import Home from './pages/unauthorized/Home';
import Unauthorized from './pages/page-templates/unauthorized';
import Login from './pages/unauthorized/Login';
import Signup from './pages/unauthorized/Signup';
import About from './pages/unauthorized/About';

import Authorized from "./pages/page-templates/authorized";
import Activity from './pages/authorized/Activity';
import Go from './pages/authorized/Go';
import AroundMe from './pages/authorized/AroundMe';
import Account from './pages/authorized/Account';


function App() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    authorizeUser().then(r => {
      if(r.status === 200) {
        setUser(r.data)

      } else {
        navigate(productPage);
      }
    })
  }, [])

  console.log(user);

  function addActivity(newActivity) {
    setUser(user => ({...user, activities: [...user.activities, newActivity]}))
  }

  function removeActivity(activityId) {
    setUser(user => ({...user, activities: user.activities.filter(activity => activity.id !== activityId)}))
  }

  function addMessage(newMessage) {
    setUser(user => ({...user, activities: user.activities.map(activity => {
      if(activity.id === newMessage.activity_id) {
        return {...activity, messages: [...activity.messages, newMessage]}
      } else {
        return activity;
      }  
    })}))
  }

  function setNewActivityGoal(newGoal) {
    setUser(user => ({...user, mile_goal: newGoal}))
  }
  
  function setUserProfileAsComplete() {
    setUser(user => ({...user, complete_profile: true})) 
  }

  function setActivitiesToSeen() {
    setUser(user => ({
      ...user,
      activities: user.activities.map(activity => {
        if(user.id === activity.poster_id && !activity.has_been_seen) {
          return {...activity, has_been_seen: true}
        } else {
          return activity;
        }  
      })
    }))
  }



  function renderAuthorizedRoutes() {
    if(user) {
      return (
          <Route path="/" element={<Authorized user={user} />}>
            <Route path="" element={<Activity 
              user={user} 
              addMessage={addMessage} 
              userCityCord={{lat: user.user_lat, lng: user.user_lng}} 
              removeActivity={removeActivity} 
              newActivitiesHaveBeenSeen={setActivitiesToSeen}
            />} />
            <Route path="/go" element={<Go user={user} userCityCord={{lat: user.user_lat, lng: user.user_lng}} />} />
            <Route path="/around-me" element={<AroundMe user={user} addActivity={addActivity} userCityCord={{lat: user.user_lat, lng: user.user_lng}} />} />
            <Route path="/account" element={<Account user={user} setUser={setUser} setNewActivityGoal={setNewActivityGoal} setUserProfileAsComplete={setUserProfileAsComplete}/>} />
          </Route> 
      )
    }
  }


  return (
    <div className="App">
      {
        user ? <Hamburger user={user} /> : null
      }
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />

          
          <Route path="/welcome" element={<Unauthorized />}>
            <Route path="home" element={<Home />} />
            <Route path="" element={<Login setUser={setUser} />} />
            <Route path="signup/*" element={<Signup setUser={setUser} />} />
          </Route>

          {renderAuthorizedRoutes()}


        </Routes>
      </div>
    </div>
  );
}

export default App;
