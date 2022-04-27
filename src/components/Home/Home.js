import React, { useEffect, useState } from "react";
import SingleVolunteer from "../SingleVolunteer/SingleVolunteer";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data =>setServices(data))
  },[])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 mt-5 lg:grid-cols-3 max-w-[1300px] mx-auto justify-items-center">
      {
        services.map(serv=> <SingleVolunteer serv={serv} key={serv._id}></SingleVolunteer>)
      }
    </div>
  );
};

export default Home;
