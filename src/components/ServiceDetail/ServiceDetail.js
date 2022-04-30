import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [singleService, setSingleService] = useState({});
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setSingleService(data));
  }, [serviceId]);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center md:w-1/2 mt-16 lg:text-left h-[600px] p-4">
          <img src={singleService.image} className='w-full h-[350px] object-cover rounded-xl shadow-2xl' alt="" />
          <div className="mt-4">
            <h1 className="text-3xl font-bold">{singleService.service}</h1>
            <p className="py-4">{singleService.description}</p>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Volunteer for</span>
              </label>
              <input
                type="text"
                placeholder="email"
                value={singleService.service}
                disabled
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                value={user?.email}
                disabled
                className="input input-bordered"
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
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Add Volunteer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
