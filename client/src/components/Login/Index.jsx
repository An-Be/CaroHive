import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./Login.scss";

export const LoginPage = () => {
  const [isUser, setIsUser] = useState(true);
  return (
    <div className="Login hero min-h-screen" style={{backgroundImage: 'url(images/login/login-bg.png)'}}>
      <div className="hero-content">
        {isUser && <Login setIsUser={setIsUser} />}
        {!isUser && <Register setIsUser={setIsUser} />}
      </div>
    </div>
  );
};
