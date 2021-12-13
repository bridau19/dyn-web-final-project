import React, { useEffect, useState } from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

// styles
import "./App.css";

// page imports
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserProfile from "./pages/UserProfile";
import Dashboard from "./pages/Dashboard";
import AddPost from "./pages/AddPost";
import Post from "./components/Post";
import Header from "./components/Header";
import About from "./pages/About";
import FirebaseConfig from "./components/FirebaseConfig";

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

  useEffect(() => {
    // initialize firebase
    initializeApp(FirebaseConfig);
    setAppInitialized(true);
  }, []);

  // Check to see if user is logged in
  // user loads page, check their status
  // set state accordingly
  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserInformation(user);
          setLoggedIn(true);
        } else {
          setUserInformation({});
          setLoggedIn(false);
        }
        // whenever state changes set loading to false
        setLoading(false);
      });
    }
  }, [appInitialized]);

  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserInformation({});
        setLoggedIn(false);
        setErrors();
      })
      .catch((error) => {
        console.warn(error);
        setErrors(error.errorMessage);
      });
  }

  if (loading || !appInitialized) return null;

  return (
    <div className="App">
      <Header logout={logout} loggedIn={loggedIn} />
      {errors && <p className="Error">{errors}</p>}
      <Router>
        <Routes>
          <Route 
            path="login" 
            element={ 
              !loggedIn ? (
                <Login 
                  setLoggedIn = {setLoggedIn}
                  setUserInformation={setUserInformation}
                  setErrors={setErrors}
                /> 
              ) : (
                <Navigate to="/" /> 
              )
            }
          />

          <Route 
            path="signup" 
            element={ 
              !loggedIn ? (
              <SignUp 
                setLoggedIn = {setLoggedIn}
                setUserInformation={setUserInformation}
                setErrors={setErrors} 
              /> 
              ) : ( 
                <Navigate to="/" /> 
              )
            } 
          />
          
          <Route  
            path="/add-post" 
            element={ loggedIn ? <AddPost userInformation={userInformation} /> : <Navigate to="/login" /> } />
          
          <Route 
            path="/post/:id" 
            element={ loggedIn ? <Post /> : <Navigate to="/login" /> } 
          />

          <Route 
            path="/about" 
            element={ <About /> } 
          />      
          
          <Route path="/user/:id" 
            element={
              loggedIn ? (
                <UserProfile userInformation={userInformation} /> 
              ) : (
                <Navigate to="/login" /> 
              )
            }
          />
          
          <Route 
            path="/" 
            element={ loggedIn ? <Dashboard /> : <Navigate to="/login" /> } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
