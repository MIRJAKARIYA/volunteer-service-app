import React from "react";
import "./AddEvent.css";
import { AiOutlinePlus } from 'react-icons/ai';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";

const AddEvent = () => {
  const [user] = useAuthState(auth);

  const handleAddEvent = e =>{
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const date = e.target.date.value;
    const banner = e.target.banner.value;
    const addedEvent = {
      title,
      description,
      date,
      banner,
      email: user?.email
    }

    fetch('http://localhost:5000/service', {
      method: 'POST',
      headers:{
        'content-type':'application/json',
        authorization:`Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
      },
      body:JSON.stringify(addedEvent)
    })
    .then(res=>res.json())
    .then(data=> {
      console.log(data)
      if(data?.acknowledged){
        toast('Event added successfully 😊');
      }
      else{
        toast('Something wrong happend 😕')
      }
    })
    e.target.reset();
  }
  return (
    <div className="add-event-container flow-root">
      <form onSubmit={handleAddEvent}>
        <div className="flex flex-col md:flex-row justify-between md:w-[50%] mx-auto p-10 w-[95%] bg-white mt-32 rounded-xl">
          
          <div className="md:w-1/2">
            <div>
              <label htmlFor="title" className="block">
                Event Title
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-secondary w-full"
                name="title" required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="description" className="block">
                Description
              </label>
              <textarea
                className="textarea textarea-secondary w-full"
                placeholder="Bio"
                name="description" required
              />
            </div>
          </div>
          <div className="md:w-1/2 md:ml-5">
            <div>
              <label htmlFor="date" className="block">
                Event Date
              </label>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered input-secondary  w-full"
                name="date" required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="banner block">Banner</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-secondary w-full"
                name="banner" required
              />
            </div>
            <button type="submit" className="btn btn-outline btn-primary block ml-auto mt-5 ">
              <div className="flex">
              <AiOutlinePlus></AiOutlinePlus>
                <span className="ml-1">ADD EVENT</span> 
              </div>
            </button>
          </div>
          <ToastContainer></ToastContainer>
        </div>
        
      </form>
    </div>
  );
};

export default AddEvent;
