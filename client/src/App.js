import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Rambler from "./pages/Rambler";
import Walk from "./pages/Walk";
import Login from "./pages/Login";
import Signup from './pages/Signup';

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/walk')
  }, [])

  return (
    <div className="App container">


      <Routes>
        <Route path="/rambler" element={<Rambler />}></Route>

        <Route path="/walk" element={<Walk />}>
          <Route path="" element={<Login />} />
          {/* <Route path="/signup/*" element={<Signup />} />  */}
        </Route>
      </Routes>
      
      
      
      
      {/* <Routes>
        <Route path="/" element={<AroundMe />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
      </Routes> */}
    </div>
  );
}

export default App;