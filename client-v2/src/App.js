import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Hamburger from './components/hamburger';

import ProductPage from './pages/unauthorized/ProductPage';
import Unauthorized from './pages/page-templates/unauthorized';
import Login from './pages/unauthorized/Login';
import Signup from './pages/unauthorized/Signup';

import Authorized from "./pages/page-templates/authorized";
import Activity from './pages/authorized/Activity';
import Go from './pages/authorized/Go';
import AroundMe from './pages/authorized/AroundMe';
import Account from './pages/authorized/Account';

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
          <Route path="/home" element={<ProductPage />}></Route>
          
          <Route path="/welcome" element={<Unauthorized />}>
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
