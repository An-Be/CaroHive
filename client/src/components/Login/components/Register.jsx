import React, { useState } from "react";
import usePostUser from "../hooks/usePostUser";

const Register = ({ setIsUser }) => {
  const [email, setEmail] = useState(null);
  const [compareEmail, setCompareEmail] = useState(null);
  const [password, setPassword] = useState(null)

  const {registerUser} = usePostUser();

  const getUsername = (emailToSplit) => {return emailToSplit.split('@')[0]};

  const postRegisterUser = (e) => {
    e.preventDefault()

    console.log({email, password, username: getUsername(email)})

    registerUser({ email, password, username: getUsername(email)})
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
            <span className="label-text">Re-enter Your Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
            onChange={(e) => setCompareEmail(e.target.value)}
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
          <label className="label self-center">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Show Password</span>
                <input type="checkbox" className="checkbox" />
              </label>
            </div>
          </label>
          <button
            onClick={() => setIsUser(true)}
            className="label-text-alt link link-hover self-center"
          >
            I am already a registered user!
          </button>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={(e) => postRegisterUser(e)}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
