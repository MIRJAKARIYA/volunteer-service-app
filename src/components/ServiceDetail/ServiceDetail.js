import { async } from "@firebase/util";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [singleService, setSingleService] = useState({});
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setSingleService(data));
  }, [serviceId]);

  const handleFormSubmit =(e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const volunteerservice = e.target.service.value; 
    const name = e.target.name.value;
    const registrationdate = e.target.date.value;
    console.log(email, volunteerservice, name,registrationdate)
    const volunteer = {
      name:name,
      email:email,
      registrationdate:registrationdate,
      volunteerservice:volunteerservice
    }
      fetch(`http://localhost:5000/addvolunteers?email=${email}`,{
        method:'POST',
        headers:{
          'content-type':'application/json',
          authorization:`Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        },
        body:JSON.stringify(volunteer)
      })
      .then(res=> res.json())
      .then(data => {
        console.log(data)
        if(data?.message === 'Forbidden Access'){
          signOut(auth);
          navigate('/login')
        }
        else if(data?.acknowledged === true){
          toast(`Registration successfull for ${singleService.service}`)
          console.log('data added')
        }
      })
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center md:w-1/2 mt-16 lg:text-left h-[600px] p-4">
          <img
            src={singleService.image}
            className="w-full h-[350px] object-cover rounded-xl shadow-2xl"
            alt=""
          />
          <div className="mt-4">
            <h1 className="text-3xl font-bold">{singleService.service}</h1>
            <p className="py-4">{singleService.description}</p>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Volunteer for</span>
                </label>
                <input
                  type="text"
                  value={singleService?.service || ''}
                  className="input input-bordered"
                  disabled
                  name="service"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={user?.email || ''}
                  className="input input-bordered"
                  disabled
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="Date"
                  className="input input-bordered"
                  name="date"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary">
                  Register as Volunteer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ServiceDetail;
