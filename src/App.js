import React, { useEffect, useState } from "react";
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

// styles
import './App.css';

// page imports
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import UserProfile from "./pages/UserProfile";
import Dashboard from "./pages/Dashboard";
import AddPost from "./pages/AddPost";
import Post from "./components/Post";
import Header from "./components/Header";
// import FirebaseConfig from './components/FirebaseConfig';

function App() {
  // track if user is logged in
  const [loggedIn, setLoggedIn] = useState(false);
  // check to see if there is any loading...
  const [loading, setLoading] = useState(true);
  // state user information in state
  const [userInformation, setUserInformation] = useState({});
  const [appInitialized, setAppInitialized] = useState(false);
  // error
  const [errors, setErrors] = useState();

  return (
    <div className="App">
      {/* <Header logout={logout} loggedIn={loggedIn} /> */}
      <Header />
      {/* <p>User {loggedIn ? `IS LOGGED IN` : `IS NOT LOGGED IN`}</p>
      <p>Email {userInformation.email}</p> */} 
      <Router>
        <Routes>
          <Route path='login' element={<Login />}/>
          <Route path='signup' element={<SignUp />}/>
          <Route path='add-post' element={<AddPost />}/>
          <Route path='/cheese/:id' element={<Post />}/>
          <Route path='/user/:id' element={<UserProfile />}/>
          <Route path='/' element={<Dashboard />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
