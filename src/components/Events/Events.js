import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import PageTitle from "../PageTitle/PageTitle";
import SingleEvent from "../SingleEvent/SingleEvent";

const Events = () => {
  const [user] = useAuthState(auth);
  const [events, setEvents] = useState([]);
  const [del, setDel] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getEvents = async () => {
      const email = user?.email;
      const url = `https://radiant-peak-60741.herokuapp.com/addedServices?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
          },
        });
        setEvents(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getEvents();
  }, [user, navigate, del]);

  const handleCancelButton = (id) => {
    console.log(id);
    fetch(`https://radiant-peak-60741.herokuapp.com/service/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Successfully removed");
        setDel(!del);
      });
  };

  return (
    <>
      <PageTitle title="Events"></PageTitle>
      <div className="bg-slate-200 h-screen flow-root">
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 mt-5 w-[100%] mx-auto justify-items-center max-w-[715px]">
          {events.map((addedEvent) => (
            <SingleEvent
              key={addedEvent._id}
              addedEvent={addedEvent}
              handleCancelButton={handleCancelButton}
            ></SingleEvent>
          ))}
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default Events;
