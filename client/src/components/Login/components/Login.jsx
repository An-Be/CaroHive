import React, { useState } from "react";
import usePostUser from "../hooks/usePostUser";

const Login = ({ setIsUser }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null)

  const {loginUser} = usePostUser();

  const handleUserLogin = (e) => {
    e.preventDefault();
    console.log({email, password})
    loginUser({identifier: email, password})
  }
  return (
    <div className="card glass shadow-2xl">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="label">
            <button
              onClick={() => setIsUser(false)}
              className="label-text-alt link link-hover"
            >
              Click here to register!
            </button>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={(e) => handleUserLogin(e)} className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
