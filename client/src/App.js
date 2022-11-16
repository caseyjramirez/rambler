import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { authorizeUser } from "./services/services";

import Rambler from "./pages/Rambler";
import Walk from "./pages/pageTemplates/Walk";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Activity from "./pages/authFeed/Activity";
import Dashboard from "./pages/pageTemplates/Dashboard";
import GoWalk from "./pages/authFeed/GoWalk";
import AroundMe from "./pages/authFeed/AroundMe";
import Account from "./pages/authFeed/Account";

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null)

  useEffect(() => {
    authorizeUser().then(r => {
      if(r.status === 200) {
        setUser(r.data)
      } else {
        navigate('/rambler');
      }
    })
  }, [])

  // console.log(user);

  function addWalk(newWalk) {
    setUser(user => ({...user, walks: [...user.walks, newWalk]}))
  }

  function addMessage(newMessage) {
    setUser(user => ({...user, walks: user.walks.map(walk => {
      if(walk.id === newMessage.walk_id) {
        return {...walk, messages: [...walk.messages, newMessage]}
      } else {
        return walk;
      }  
    })}))
  }

  function renderRoutes() {
    if(user) {
      return (
        <Route path="/" element={<Dashboard user={user} />}>
          <Route path="" element={<Activity user={user} addMessage={addMessage} />} />
          <Route path="/go-walk" element={<GoWalk user={user} />} />
          <Route path="/around-me" element={<AroundMe user={user} addWalk={addWalk} />} />
          <Route path="/account/*" element={<Account user={user} setUser={setUser} />} />
        </Route>
      )
    }
  }

  return (
    <div className="App container">
      <Routes>
        <Route path="/rambler" element={<Rambler />}></Route>

        <Route path="/walk" element={<Walk />}>
          <Route path="" element={<Login setUser={setUser} />} />
          <Route path="signup/*" element={<Signup setUser={setUser} />} />
        </Route>

        {renderRoutes()}
      </Routes>
        
    </div>
  );
}



export default App;