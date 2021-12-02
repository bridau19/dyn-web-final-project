import React from "react";
import LoginForm from "../components/LoginForm";

function Login({ setLoggedIn, setUserInformation }) {
    return (
      <div className="PageWrapper">
          <h1>Login</h1>
          <LoginForm />
      </div>
    );
  }
  
  export default Login;