import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Authorized from "./pages/page-templates/authorized";
import Activity from './pages/authorized/Activity';
import Go from './pages/authorized/Go';
import AroundMe from './pages/authorized/AroundMe';
import Account from './pages/authorized/Account';
import Hamburger from './components/hamburger';

function App() {
  const [user, setUser] = useState(true)

  function renderAuthorizedRoutes() {
    if(user) {
      return (
        <Route path="/" element={<Authorized />}>
          <Route path="" element={<Activity user={user} />} />
          <Route path="/go" element={<Go user={user} />} />
          <Route path="/around-me" element={<AroundMe user={user} />} />
          <Route path="/account" element={<Account user={user} setUser={setUser} />} />
        </Route>
      )
    }
  }


  return (
    <div className="App">
      <Hamburger />
      <div className="container">
        <Routes>
          {renderAuthorizedRoutes()}
        </Routes>
      </div>
    </div>
  );
}

export default App;
