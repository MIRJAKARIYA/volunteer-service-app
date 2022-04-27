import React, { useState } from "react";
import "./SingleVolunteer.css";
import { TiArrowForward } from 'react-icons/ti'

const SingleVolunteer = ({ serv }) => {
  const { description, image, service } = serv;
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="">
      <div className="card w-[400px] bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="w-full h-60 service-image" alt="" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{service}</h2>
            <div className=" text-blue-700 border-2 rounded-3xl py-1 px-2 border-blue-700 hover:bg-blue-700 hover:text-white duration-150" style={{cursor:'pointer'}}>
              <p className="mr-2 font-semibold flex items-center justify-between">Checkout<TiArrowForward className="text-lg"></TiArrowForward></p>
            </div>
          </div>
          <p>
            {showMore ? description : description.slice(0, 70) + "..."} <br />
            <button
              className="text-red-600 font-semibold ml-auto block"
              onClick={handleShowMore}
            >
              {showMore ? "show less" : "show more"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleVolunteer;
