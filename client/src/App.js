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
import History from "./pages/authFeed/History";

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

  return (
    <div className="App container">
      <Routes>
        <Route path="/rambler" element={<Rambler />}></Route>

        <Route path="/walk" element={<Walk />}>
          <Route path="" element={<Login setUser={setUser} />} />
          <Route path="signup/*" element={<Signup setUser={setUser} />} />
        </Route>
        
        <Route path="/" element={<Dashboard user={user} />}>
          <Route path="" element={<Activity user={user} />} />
          <Route path="/go-walk" element={<GoWalk user={user} />} />
          <Route path="/around-me" element={<AroundMe user={user} addWalk={addWalk} />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </div>
  );
}



export default App;