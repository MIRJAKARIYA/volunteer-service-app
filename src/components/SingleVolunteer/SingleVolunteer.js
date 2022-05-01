import React, { useState } from "react";
import { TiArrowForward } from 'react-icons/ti'
import { useNavigate } from "react-router-dom";

const SingleVolunteer = ({ serv }) => {
  const { description, image, service, _id } = serv;
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleCheckout = (id) =>{
    navigate(`/service/${id}`);
  }
  return (
    <div className="">
      <div className="card w-[400px] bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="w-full h-60 object-cover" alt="" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{service}</h2>
            <div className=" text-blue-700 border-2 rounded-3xl py-1 pl-3 pr-1 border-blue-700 hover:bg-blue-700 hover:text-white duration-500" style={{cursor:'pointer'}}>
              <p onClick={()=>handleCheckout(_id)} className="mr-2 font-semibold flex items-center justify-between">Checkout<TiArrowForward className="text-lg"></TiArrowForward></p>
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
