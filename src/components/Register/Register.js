import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Register.css";
const Register = () => {
    const handleSubmit = e =>{
        e.preventDefault();
    }
  return (
    <div class="flow-root">
        <div class="card mx-auto mt-36 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit}>
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Confirm Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary" type="submit">Register</button>
            </div>
          </div>
          </form>
          <SocialLogin></SocialLogin>
      </div>
      
    </div>
  );
};

export default Register;
