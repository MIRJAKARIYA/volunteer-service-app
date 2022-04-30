import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import PageTitle from '../PageTitle/PageTitle';

const EmailVerification = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [sendEmailVerification] = useSendEmailVerification(auth);

  const handleVerification = async () => {
    await sendEmailVerification();
    toast("Email verification sent...");
  };

  useEffect(() => {
    if (user?.emailVerified) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <>
    <PageTitle title='Email Verification'></PageTitle>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h4 className="text-3xl font-bold mb-3">
                Verify your email at <br />
                {user?.email}
              </h4>
              <button className="btn btn-primary" onClick={handleVerification}>
                Send verification again
              </button>
              <p>Refresh the page you have verified the email</p>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default EmailVerification;
