import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import SingleVolunteer from "../SingleVolunteer/SingleVolunteer";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <h2 className="text-center text-4xl font-bold my-6">I GROW BY HELPING PEOPLE IN NEED</h2>
      <div className="flex justify-center w-3/4 mx-auto mb-10">
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered rounded-tr-none rounded-br-none w-full text-lg max-w-[350px]"
        />
        <button className="bg-blue-500 hover:bg-blue-700 duration-300 px-6 text-white rounded-tr-lg rounded-br-lg text-lg">Search</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 mt-5 lg:grid-cols-3 max-w-[1300px] mx-auto justify-items-center">
        {services.map((serv) => (
          <SingleVolunteer serv={serv} key={serv._id}></SingleVolunteer>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
