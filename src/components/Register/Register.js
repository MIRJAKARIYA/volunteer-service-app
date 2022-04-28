import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Register.css";
const Register = () => {
    const handleSubmit = e =>{
        e.preventDefault();
    }
  return (
    <div className="flow-root">
        <div className="card mx-auto mt-36 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
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
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">Register</button>
            </div>
          </div>
          </form>
          <SocialLogin></SocialLogin>
      </div>
      
    </div>
  );
};

export default Register;
