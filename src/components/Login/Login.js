import React, { useEffect, useRef, useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import useToken from "../hooks/useToken";
import PageTitle from "../PageTitle/PageTitle";
const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const [resetError, setResetError] = useState(false);

  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, ResetError] =
    useSendPasswordResetEmail(auth);
  const [token] = useToken(user?.user?.email);

  const handleForgotPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    setResetError(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    if (ResetError && resetError) {
      toast(ResetError.message.split("auth/").join(""));
      setResetError(false);
    } else if (!ResetError && resetError) {
      toast("password reset email has been sent successfully");
      setResetError(false);
    }
  }, [ResetError, resetError]);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  return (
    <>
    <PageTitle title='Login'></PageTitle>
      <div className="flow-root">
        <div className="card mx-auto mt-36 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  ref={emailRef}
                />
              </div>
              <small className="text-red-700">
                {error?.message?.includes("not-found") ? "*user not found" : ""}
              </small>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>
              <small className="text-red-700">
                {error?.message?.includes("password") ? "*wrong password" : ""}
              </small>
              <button
                className="block ml-auto text-blue-700 underline"
                onClick={handleForgotPassword}
              >
                forgot password?
              </button>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
          <ToastContainer />
          <SocialLogin></SocialLogin>
        </div>
        <Link to="/register" className="block text-center mt-3 text-blue-700">
          create a new account...
        </Link>
      </div>
    </>
  );
};

export default Login;
